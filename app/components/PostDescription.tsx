import React from "react";

const PostDescription = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="px-3 py-1 bg-yellow w-fit font-extrabold text-bodyS rounded  sm:text-[12px]">
        Learning
      </div>
      <span className="text-bodyS sm:text-[12px]">Published 21 Dec 2023</span>
      <div className="leading-normal text-heading font-extrabold hover:text-yellow transition ease-in-out duration-300 cursor-pointer sm:text-[20px]">
        HTML & CSS foundations
      </div>
      <p className="text-grey text-bodyM leading-normal sm:text-bodyS">
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
};

export default PostDescription;
