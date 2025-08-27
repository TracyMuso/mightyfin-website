import Image from "next/image";
import { type MiniBlogDataType } from "@/types";

const MiniBlogCard = ({ postType, title, author, image }: MiniBlogDataType) => {
  return (
    <div className="flex justify-between items-center p-1">
      <div className="flex flex-col justify-between items-start text-left gap-1">
        <p className="text-m">{postType}</p>
        <p className="font-bold">{title}</p>
        <span className="italic font-light text-m">By {author}</span>
        <button className="px-5 py-3 text-center bg-primary hover:bg-primary/90 rounded-full text-white">
          View
        </button>
      </div>
      <Image src={image} alt="post icon" width={150} height={150} />
    </div>
  );
};

export default MiniBlogCard;
