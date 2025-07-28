import ProductCard from "../Cards/productCard";
import { ProductCardData } from "@/constants/data/landingPage";

const Products = () => {
  return (
    <section className="flex flex-col gap-5 lg:h-[100vh] items-center bg-[#FBECFF] px-6 py-8">
      <div className="text-purple-500 flex flex-col items-center pt-5 gap-2 pb-8">
        <h1 className="font-extrabold sm:text-3xl lg:text-5xl text-xl">
          Our Products
        </h1>
      </div>
      <div className="product-card-row flex md:flex-row md:gap-3 md:flex-wrap lg:flex-no-wrap flex-col lg:gap-1 gap-5 items center md:justify-between justify-center xl:w-11/12 md:w-full px-5">
        {ProductCardData.map((item, idx) => (
          <ProductCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Products;
