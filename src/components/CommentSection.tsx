"use client";
import { Rubik_Vinyl } from "next/font/google";


const rubikVinyl = Rubik_Vinyl({
  weight: "400",
  subsets: ["latin"],
});

import { useState } from "react";

const CommentSection = () => {
  const [comments, setComments] = useState<{ id: number; user: string; text: string; timestamp: string; }[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now(),
          user: "Yousra Khan", 
          text: newComment,
          timestamp: new Date().toLocaleString(),
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Heading */}
      <h2 className={`${rubikVinyl.className} text-2xl md:text-3xl font-bold text-center mb-6 text-[#F2AE66]`}>
        Comments
      </h2>

      {/* Comment Input Section */}
      <div className="flex flex-col gap-4 mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 border border-[#F2AE66] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={4}
        ></textarea>
        <button
          onClick={handleAddComment}
          className="text-white bg-[#F2AE66] hover:bg-gradient-to-r hover:from-purple-900 py-2 px-4 rounded-md  focus:outline-none focus:ring-2 focus:ring-black"
        >
          Submit
        </button>
      </div>

      {/* Comments Display */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-gray-100 rounded-md shadow-md"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-800">
                {comment.user}
              </span>
              <span className="text-xs text-gray-500">
                {comment.timestamp}
              </span>
            </div>
            <p className="text-gray-700">{comment.text}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-center text-gray-500">No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
