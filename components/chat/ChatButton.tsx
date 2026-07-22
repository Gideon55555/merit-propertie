"use client";

interface Props {
  onClick: () => void;
  open: boolean;
}

export default function ChatButton({ onClick, open }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-6
        right-6
        w-16
        h-16
        rounded-full
        bg-[#1F5E58]
        text-white
        text-2xl
        shadow-xl
        hover:scale-105
        transition
        z-50
      "
    >
      {open ? "×" : "💬"}
    </button>
  );
}