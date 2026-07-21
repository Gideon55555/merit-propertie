"use client";

import ReactMarkdown from "react-markdown";

interface Props {
  role: "assistant" | "user";
  message: string;
}

export default function ChatMessage({ role, message }: Props) {
  const isAI = role === "assistant";

  return (
    <div
      className={`
        flex
        mb-4
        ${isAI ? "justify-start" : "justify-end"}
      `}
    >
      <div
        className={`
          max-w-[85%]
          px-4
          py-3
          rounded-2xl
          text-sm
          leading-relaxed

          ${
            isAI
              ? "bg-white text-gray-800 shadow-sm"
              : "bg-[#1F5E58] text-white"
          }
        `}
      >
        {isAI ? (
          <ReactMarkdown
            components={{
              strong: ({ children }) => (
                <strong className="font-bold">{children}</strong>
              ),

              ul: ({ children }) => (
                <ul className="list-disc ml-5 space-y-1">{children}</ul>
              ),

              h3: ({ children }) => (
                <h3 className="font-bold text-base mt-3 mb-1">{children}</h3>
              ),
            }}
          >
            {message}
          </ReactMarkdown>
        ) : (
          <p>{message}</p>
        )}
      </div>
    </div>
  );
}
