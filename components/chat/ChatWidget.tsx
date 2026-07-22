"use client";

import { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";


type Message = {
  role: "assistant" | "user";
  message: string;
};


export default function ChatWidget() {

  const [open, setOpen] = useState(false);


  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      message:
        "Hello 👋 I am Merit AI Assistant. How can I help you today?"
    }
  ]);


  const [isTyping, setIsTyping] = useState(false);



  async function sendMessage(text: string) {

    if (!text.trim()) return;


    // Add user message
    setMessages(prev => [
      ...prev,
      {
        role: "user",
        message: text
      }
    ]);


    // Show typing indicator
    setIsTyping(true);


    try {

      const response = await fetch("/api/chat", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          message: text
        })

      });



      const data = await response.json();


      console.log("BACKEND RESPONSE:", data);



      if (!data.success) {
        throw new Error("API response failed");
      }



      // Add AI response
      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          message: data.reply
        }
      ]);



    } catch (error) {

      console.error("Chat error:", error);


      setMessages(prev => [
        ...prev,
        {
          role: "assistant",
          message:
            "Sorry, I am having trouble responding right now."
        }
      ]);


    } finally {

      // Hide typing indicator
      setIsTyping(false);

    }

  }



  return (
    <>

      {open && (

        <ChatWindow
          messages={messages}
          sendMessage={sendMessage}
          isTyping={isTyping}
        />

      )}



      <ChatButton
        onClick={() => setOpen(!open)}
        open={open}
      />

    </>
  );

}