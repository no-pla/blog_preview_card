import Image from "next/image";
import React from "react";

const UserInfo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src="/image-avatar.webp"
        alt="Greg Hooper의 프로필 이미지입니다."
        width={32}
        height={32}
      />
      <span className="text-bodyS font-extrabold">Greg Hooper</span>
    </div>
  );
};

export default UserInfo;
