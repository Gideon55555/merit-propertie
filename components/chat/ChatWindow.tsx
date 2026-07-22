"use client";

import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";

interface Props {
  messages: {
    role: "assistant" | "user";
    message: string;
  }[];

  sendMessage: (text: string) => void;

  isTyping: boolean;
}

export default function ChatWindow({ messages, sendMessage, isTyping }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  return (
    <div
      className="
      fixed
      bottom-24
      right-6
      w-[350px]
      h-[500px]
      bg-white
      rounded-2xl
      shadow-2xl
      overflow-hidden
      flex
      flex-col
      z-40
      "
      onWheel={(e) => e.stopPropagation()}
    >
      {/* Header */}

      <h1
        className="
        bg-[#1F5E58]
        text-white
        px-5
        py-4
        font-semibold
        font-sans
        "
      >
        Merit AI Assistant
      </h1>

      {/* Messages */}

      <div
        className="
        flex-1
        p-4
        overflow-y-auto
        overscroll-contain
        bg-[#F8F6F2]
        "
      >
        {messages.map((msg, index) => (
          <ChatMessage key={index} role={msg.role} message={msg.message} />
        ))}

        {isTyping && (
          <div className="flex justify-start mb-3">
            <p
              className="
                bg-white
                px-4
                py-3
                rounded-xl
                shadow-sm
                text-sm
                text-gray-500
                "
            >
              Merit AI is typing
              <span className="animate-pulse">...</span>
            </p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}

      <ChatInput sendMessage={sendMessage} />
    </div>
  );
}
