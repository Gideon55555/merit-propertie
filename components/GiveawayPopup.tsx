"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const GOOGLE_SCRIPT_URL =
  process.env.NEXT_PUBLIC_GIVEAWAY_SCRIPT_URL || "";

export default function GiveawayPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Check if the user has already seen/dismissed the popup in this session
    const hasSeenPopup = sessionStorage.getItem("giveaway_popup_seen");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      setIsClosing(false);
      sessionStorage.setItem("giveaway_popup_seen", "true");
    }, 400);
  }, []);

  // ── Helpers ──

  /** Normalize a phone string to pure digits (strip +, spaces, dashes, parens) */
  const normalizePhone = (value: string): string =>
    value.replace(/[\s\-\(\)\.]/g, "");

  /** Get the set of phone numbers that have already been submitted from this device */
  const getSubmittedPhones = (): Set<string> => {
    try {
      const stored = localStorage.getItem("giveaway_submitted_phones");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  };

  /** Persist a newly submitted phone number */
  const saveSubmittedPhone = (normalized: string) => {
    try {
      const phones = getSubmittedPhones();
      phones.add(normalized);
      localStorage.setItem(
        "giveaway_submitted_phones",
        JSON.stringify([...phones])
      );
    } catch {
      // localStorage may be full or disabled – silently ignore
    }
  };

  // ── Validation ──

  const validateName = (value: string): string => {
    const trimmed = value.trim();
    if (!trimmed) return "Full name is required.";
    if (trimmed.length < 2) return "Name must be at least 2 characters.";
    if (/^\d+$/.test(trimmed)) return "Name cannot be only numbers.";
    if (!/[a-zA-Z\u1200-\u137F]/.test(trimmed))
      return "Please enter a valid name.";
    return "";
  };

  const validatePhone = (value: string): string => {
    const normalized = normalizePhone(value);

    // — required
    if (!normalized) return "Phone number is required.";

    // — must start with optional + then digits only
    if (!/^\+?\d+$/.test(normalized))
      return "Phone number can only contain digits (and an optional leading +).";

    // strip leading + for digit-length checks
    const digits = normalized.replace(/^\+/, "");

    // — length bounds
    if (digits.length < 7)
      return "Phone number is too short — minimum 7 digits.";
    if (digits.length > 15)
      return "Phone number is too long — maximum 15 digits.";

    // — reject all-same-digit spam (e.g. 0000000000)
    if (/^(\d)\1+$/.test(digits))
      return "Please enter a real phone number.";

    // — reject obviously fake sequential numbers (1234567890)
    if ("01234567890".includes(digits) || "09876543210".includes(digits))
      return "Please enter a real phone number.";

    // — Ethiopian-specific: if starts with 0 it must be 09… and 10 digits
    if (digits.startsWith("0")) {
      if (!digits.startsWith("09"))
        return "Ethiopian numbers should start with 09 (e.g. 0911…).";
      if (digits.length !== 10)
        return "Ethiopian phone numbers must be 10 digits.";
    }

    // — Ethiopian-specific: if starts with 251 it should be 2519… and 12 digits
    if (digits.startsWith("251")) {
      if (!digits.startsWith("2519"))
        return "Ethiopian numbers should start with +2519… (e.g. +251911…).";
      if (digits.length !== 12)
        return "Ethiopian phone numbers with country code must be 12 digits.";
    }

    // — duplicate check (client-side)
    if (getSubmittedPhones().has(digits))
      return "This phone number has already been registered for the giveaway.";

    return "";
  };

  // ── Submit ──

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate name
    const nameErr = validateName(name);
    if (nameErr) {
      setPhoneError(""); // clear phone error if any
      setErrorMessage(nameErr);
      return;
    }

    // Validate phone
    const phoneErr = validatePhone(phone);
    if (phoneErr) {
      setPhoneError(phoneErr);
      setErrorMessage("");
      return;
    }

    setPhoneError("");
    setErrorMessage("");
    setStatus("submitting");

    // Derive normalized digits for storage
    const digits = normalizePhone(phone).replace(/^\+/, "");

    try {
      // Use GET with query params so we can read the response from Apps Script.
      // The server checks for duplicate phone numbers in the spreadsheet.
      const params = new URLSearchParams({
        datetime: new Date().toLocaleString(),
        name: name.trim(),
        phone: phone.trim(),
        source: "Website - Giveaway",
      });

      const response = await fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        redirect: "follow",
      });

      const result = await response.json();

      if (result.status === "duplicate") {
        // Server detected this phone number already exists in the spreadsheet
        setPhoneError("This phone number has already been registered for the giveaway.");
        setStatus("idle");
        return;
      }

      if (result.status !== "success") {
        setStatus("error");
        setErrorMessage(result.message || "Something went wrong. Please try again.");
        return;
      }

      // Track this number locally too for instant feedback on same device
      saveSubmittedPhone(digits);

      setStatus("success");
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch {
      // If server request fails, fall back to POST with no-cors (no duplicate check)
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            datetime: new Date().toLocaleString(),
            name: name.trim(),
            phone: phone.trim(),
            source: "Website - Giveaway",
          }),
        });
        saveSubmittedPhone(digits);
        setStatus("success");
        setTimeout(() => {
          handleClose();
        }, 3000);
      } catch {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-all duration-400 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      style={{ backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup Card — Glassmorphism */}
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl transition-all duration-500 ${
          isClosing
            ? "scale-90 opacity-0 translate-y-8"
            : "scale-100 opacity-100 translate-y-0"
        }`}
        style={{
          animation: isClosing ? undefined : "popupSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          background: "rgba(21, 72, 67, 0.45)",
          backdropFilter: "blur(24px) saturate(180%)",
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
          border: "1px solid rgba(192, 178, 131, 0.25)",
          boxShadow: "0 8px 60px rgba(0, 0, 0, 0.4), 0 0 40px rgba(192, 178, 131, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Top decorative band */}
        <div
          className="h-1.5 rounded-t-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgb(192 178 131 / 0.7), rgb(255 255 255 / 0.2), rgb(192 178 131 / 0.7))",
          }}
        />

        {/* Card body — transparent to let glass show through */}
        <div
          className="relative px-8 py-10"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors duration-200 rounded-full hover:bg-white/10 p-1"
            aria-label="Close popup"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Merit Properties Logo */}
          <div className="flex justify-center mb-4">
            <Image
              src="/images/logo.png"
              alt="Merit Properties Logo"
              width={160}
              height={64}
              className="h-16 w-auto object-contain"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}
            />
          </div>

          {/* Title */}
          <h2
            className="text-center text-2xl md:text-3xl font-serif font-bold mb-2"
            style={{ color: "rgb(192, 178, 131)" }}
          >
            🎉 Giveaway Registration
          </h2>
          <p className="text-center text-white/70 text-sm mb-6 font-sans">
            Register now for a chance to win exclusive prizes!
          </p>

          {status === "success" ? (
            /* Success State */
            <div className="text-center py-6">
              <div
                className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgb(192 178 131 / 0.2), rgb(192 178 131 / 0.05))",
                  border: "2px solid rgb(192 178 131 / 0.5)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(192, 178, 131)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3
                className="text-xl font-serif font-bold mb-2"
                style={{ color: "rgb(192, 178, 131)" }}
              >
                You&apos;re Registered!
              </h3>
              <p className="text-white/70 text-sm font-sans">
                Thank you for registering. Good luck!
              </p>
            </div>
          ) : (
            /* Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="giveaway-name" className="block text-white/80 text-sm mb-1.5 font-sans">
                  Full Name
                </label>
                <input
                  id="giveaway-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 text-sm font-sans outline-none transition-all duration-200 focus:ring-2"
                  style={{
                    background: "rgb(255 255 255 / 0.08)",
                    border: "1px solid rgb(192 178 131 / 0.3)",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgb(192, 178, 131)";
                    e.currentTarget.style.boxShadow = "0 0 0 2px rgb(192 178 131 / 0.2)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgb(192 178 131 / 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="giveaway-phone" className="block text-white/80 text-sm mb-1.5 font-sans">
                  Phone Number
                </label>
                <input
                  id="giveaway-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError("");
                  }}
                  placeholder="e.g. +251 911 234 567"
                  required
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-white/40 text-sm font-sans outline-none transition-all duration-200"
                  style={{
                    background: "rgb(255 255 255 / 0.08)",
                    border: phoneError
                      ? "1px solid rgb(248 113 113)"
                      : "1px solid rgb(192 178 131 / 0.3)",
                  }}
                  onFocus={(e) => {
                    if (!phoneError) {
                      e.currentTarget.style.borderColor = "rgb(192, 178, 131)";
                      e.currentTarget.style.boxShadow = "0 0 0 2px rgb(192 178 131 / 0.2)";
                    }
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = phoneError
                      ? "rgb(248, 113, 113)"
                      : "rgb(192 178 131 / 0.3)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                {phoneError && (
                  <p className="text-red-400 text-xs mt-1.5 font-sans">{phoneError}</p>
                )}
              </div>

              {/* Error message (validation or submit error) */}
              {errorMessage && (
                <p className="text-red-400 text-sm text-center font-sans">{errorMessage}</p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full py-3.5 rounded-xl text-sm font-sans font-semibold tracking-wide uppercase transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(192, 178, 131) 0%, rgb(170, 155, 110) 100%)",
                  color: "rgb(21, 72, 67)",
                }}
              >
                {status === "submitting" ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Registering...
                  </span>
                ) : (
                  "Register Now"
                )}
              </button>
            </form>
          )}

          {/* Visit website link */}
          <div className="mt-6 text-center">
            <a
              href="https://meritrealestate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-sans transition-all duration-200 hover:underline"
              style={{ color: "rgb(192 178 131 / 0.8)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(192, 178, 131)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(192 178 131 / 0.8)")}
            >
              Visit our website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom decorative band */}
        <div
          className="h-1 rounded-b-3xl"
          style={{
            background:
              "linear-gradient(90deg, rgb(192 178 131 / 0.5), rgb(255 255 255 / 0.15), rgb(192 178 131 / 0.5))",
          }}
        />
      </div>

      {/* Keyframe animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes popupSlideIn {
          0% {
            opacity: 0;
            transform: scale(0.85) translateY(30px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}} />
    </div>
  );
}
