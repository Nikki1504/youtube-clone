import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  if (!comments || comments.length === 0) return null;
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l border-gray-300">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
