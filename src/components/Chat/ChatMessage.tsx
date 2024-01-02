import { DATETIME, HUMANIZED_TIME } from "@/utility/constants";

import { FC } from "react";
import { Star } from "iconsax-react";
import moment from "moment";

export interface Message {
  time: string;
  sender: string;
  message: string;
}

const ChatMessage: FC<Message> = ({ sender, time, message }) => {
  return (
    <div className="mb-2">
      <div className="pb-1 flex flex-row justify-between items-center">
        <p className="flex flex-row justify-between items-center font-semibold text-gray-700 text-sm">
          <Star className="mr-1" size={12} color="rgb(52, 64, 84)" />
          {sender}
        </p>

        <p className="text-xs">
          {moment(time, DATETIME).format(HUMANIZED_TIME)}
        </p>
      </div>

      <div className="p-2 rounded-lg rounded-tl-none border border-gray-200">
        <p className="text-gray-900">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
