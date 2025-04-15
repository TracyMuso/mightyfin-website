import ProductCard from "../Cards/productCard";
import { ProductCardData } from "@/constants/data/landingPage"

const Products = () => {
  return (
    <section className="flex flex-col gap-5 items-center md:h-[100vh] bg-[#FBECFF] px-6 py-8">
      <div className="text-purple-500 flex flex-col items-center pt-5 gap-2 pb-8">
        <h1 className="font-extrabold sm:text-3xl text-2xl">Our Products</h1>
        <p className="md:text-xl text-center sm:text-left">
          Fast & Easy Loan Application: Done in Minutes
        </p>
      </div>
      <div className="product-card-row flex md:flex-row flex-col md:gap-1 gap-5 items center md:justify-between justify-center xl:w-4/5 md:w-full px-5">
        {ProductCardData.map((item, idx) => (
          <ProductCard {...item} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default Products;
