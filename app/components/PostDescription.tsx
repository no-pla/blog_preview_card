import React from "react";

const PostDescription = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="px-3 py-1 bg-yellow w-fit font-extrabold rounded">
        Learning
      </div>
      <span>Published 12 Dec 2023</span>
      <div className="leading-normal text-2xl font-extrabold hover:text-yellow transition ease-in-out duration-300 cursor-pointer">
        HTML & CSS foundations
      </div>
      <p className="text-grey leading-normal">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
};

export default PostDescription;
