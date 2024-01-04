import Image from "next/image";
import React from "react";
import PreviewImage from "../../public/illustration-article.svg";

const PostImage = () => {
  return (
    <div className="h-[200px] relative overflow-hidden">
      <Image
        src={PreviewImage}
        alt="HTML & CSS foundation의 프리뷰 이미지입니다."
        className="rounded-[10px] object-cover"
        fill
      />
    </div>
  );
};

export default PostImage;
