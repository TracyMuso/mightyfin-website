import BlogPreview from "../Cards/blog-preview";
import { BlogData } from "@/constants/data/landingPage";

const BlogandNews = () => {
  return (
    <section className=" flex-col hidden items-center font-montserrat md:px-16 sm:px-10 px-5 py-12">
      <div className="mx-auto text-center text-primary pb-2">
        <h1 className="font-extrabold md:text-3xl text-xl py-2">
          Mightyfin Blog
        </h1>
        <p className="md:text-xl sm:text-2xl ">
          Your resource for financial wellness
        </p>
      </div>
      <div className="py-6">
        <div className="flex w-full justify-between flex-wrap md:flex-nowrap gap-12">
          {BlogData.map((item, idx) => {
            return <BlogPreview key={idx} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogandNews;
