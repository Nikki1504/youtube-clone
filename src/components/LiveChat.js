import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Store/Slice/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(15) + "🙂",
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="ml-2 h-[560px] w-full rounded-lg border border-gray-300 flex flex-col">
      <h1 className="font-light p-3 pl-5 w-full bg-white sticky top-0 border-b border-gray-300 z-10 flex items-center cursor-pointer">
        Top Chat
        <ChevronDown />
      </h1>
      <div className="flex flex-col-reverse overflow-y-auto flex-1 p-2">
        {chatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className=" flex items-center p-2 border-t border-gray-300 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          // console.log("ON FORM SUBMIT " + liveMessage);
          if (!liveMessage.trim()) return;
          dispatch(
            addMessage({
              name: "Nikita Thakur",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          type="text"
          value={liveMessage}
          placeholder="Chat..."
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="ml-2 px-4 py-2 bg-black text-white rounded-full text-sm hover:bg-blue-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
