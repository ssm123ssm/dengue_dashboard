import ButtonGroup, { ButtonType } from "../ButtonGroup/ButtonGroup";
import { ChangeEvent, FC, useEffect, useState, useRef, } from "react";
import ChatMessage, { Message } from "./ChatMessage";

import { DATETIME } from "@/utility/constants";
import Image from "next/image";
import { Send2 } from "iconsax-react";
import moment from "moment";



const Chat: FC = () => {
  const [input, setInput] = useState<string>("");
  const [messages, setMessage] = useState<Message[]>([
    {
      sender: "Neurasense.ai",
      time: moment().format(DATETIME),
      message:
        "Could you provide the latest audited financial statements of Acme.co including balance sheet, income statement, and cash flow statement for the past three years?",
    }, 
  ]);

  const chatRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (input.length > 0) {
      const newMessage: Message = {
        sender: "Me",
        time: moment().format(DATETIME),
        message: input,
      };

      // Add the new message to the state immediately for a quicker UI update
      setMessage((prevMessages) => [...prevMessages, newMessage]);
      setInput("");

      try {
        // Send the message to the Flask backend
        const response = await fetch("http://localhost:150/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        });

        if (response.ok) {
          // Assuming the backend responds with a JSON object containing the reply
          const { reply }: { reply: string } = await response.json();
          const replyMessage: Message = {
            sender: "Neurasense AI analyst",
            time: moment().format(DATETIME),
            message: reply,
          };

          // Update the state with the response from the Flask backend
          setMessage((prevMessages) => [...prevMessages, replyMessage]);
        } else {
          console.error("Failed to send message to the Flask backend");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat window whenever messages are updated
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  
  return (
    <div className="flex flex-col w-full h-full border border-gray-200">
      <div className="flex flex-row items-center p-4 border-b border-gray-200">
        <Image
          height={50}
          width={50}
          alt="Logo"
          src="/assets/logo/logo-large.svg"
        />

        <h3 className="ml-2">Review with Ai</h3>
      </div>

      <div className="grow p-4" style={{ overflow: "auto"}} ref={chatRef}>
  {messages.map((x: Message, i: number) => (
    <ChatMessage
      key={i}
      time={x.time}
      message={x.message}
      sender={x.sender}
    />
  ))}
</div>


      <div className="border-t border-gray-200 p-2">
        <div className="w-fit">
          <ButtonGroup
            buttons={["Prompts", "Custom"]}
            selected="Prompts"
            type={ButtonType.TINY}
            select={() => {}}
          />
        </div>

        <div className="relative mt-2">
          <textarea
            className="w-full border border-gray-300 rounded-md p-2"
            rows={5}
            placeholder="Type here"
            value={input}
            onChange={(ev: ChangeEvent<HTMLTextAreaElement>) =>
              setInput(ev.target.value)
            }
            onKeyDown={(ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
              if (ev.key === 'Enter' && !ev.shiftKey) {
                ev.preventDefault(); // Prevents the newline character
                sendMessage();
              }
            }}
          />

          <button
            className="primary p-1 absolute bottom-2 right-2"
            onClick={sendMessage}
            disabled={input.length < 1}
          >
            <Send2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
