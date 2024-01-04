import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-6	bg-pureWhite border border-black rounded-[20px] shadow-cardShadow flex flex-col gap-6 max-w-[384px] w-[90%]">
      {children}
    </div>
  );
};

export default Card;
