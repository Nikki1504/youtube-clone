import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex p-2 my-2 gap-2">
      <img
        className="h-8 w-8 rounded-full"
        alt="cmnt-user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-semibold text-sm">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
