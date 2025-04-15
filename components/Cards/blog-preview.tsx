import Image from "next/image";
import { type BlogDataType } from "@/types";

const BlogPreview = ({ title, content }: BlogDataType) => {
  return (
    <div className="flex flex-col items-start p-4 gap-2 md:pb-2 pb-16">
      <Image
        src={"/Images/LandingPage/hand-writing-on-paper.png"}
        alt="hand writing"
        width={565}
        height={250}
      />
      <div className="flex flex-col h-[215px] px-7 items-start justify-between">
        <article className="flex flex-col items-start text-left gap-5">
          <h4 className="font-bold">{title}</h4>
          <p className="text-gray-400 leading-7 font-normal">{content}</p>
        </article>
        <button className="px-10 py-4 text-center bg-purple-500 hover:bg-purple-primary rounded-md text-white">
          Read more
        </button>
      </div>
    </div>
  );
};

export default BlogPreview;
