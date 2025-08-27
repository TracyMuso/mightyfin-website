import React from "react";
import Image from "next/image";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  layout?: "image-right" | "image-left";
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  layout = "image-right" 
}) => {
  return (
    <div className={`flex justify-between items-center pb-12 w-11/12 mx-auto py-10 ${
      layout === "image-left" ? "flex-row-reverse" : ""
    }`}>
      <div className="flex-1">
        <article className="pb-10">
          <h2 className="md:text-2xl text-xl font-extrabold md:leading-9">
            {product.title}
          </h2>
          <p className="py-2 text-sm md:text-[17px]">{product.subtitle}</p>
          
          {product.benefits.length > 0 && (
            <>
              <p className="font-bold">Benefits:</p>
              <ul className="list-disc leading-6 list-inside pl-4">
                {product.benefits.map((benefit, index) => (
                  <li className="text-sm md:text-[17px]" key={index}>{benefit}</li>
                ))}
              </ul>
            </>
          )}
        </article>
        
        <div className="flex sm:flex-row flex-col gap-5 justify-between xl:w-8/12 lg:w-10/12 pl-5 md:w-3/5 sm:w-9/12">
          <button 
            className={`px-10 py-4 text-center text-sm md:text-[17px] bg-primary hover:bg-primary/90 rounded-full text-white`}
          >
            {product.ctaPrimary.text}
          </button>
          <button 
            className={`px-10 py-4 text-center hover:bg-secondary/20 border border-secondary rounded-full text-black`}
          >
            {product.ctaSecondary.text}
          </button>
        </div>
      </div>
      
      <div className="hidden lg:block flex-1">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default ProductCard;
