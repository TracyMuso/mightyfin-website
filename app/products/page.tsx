import { products, comingSoonProducts } from "@/constants/data/product";
import ProductCard from "@/components/Cards/product";
import styles from "@/styles/productPage.module.css"

const ProductsPage = () => {
  return (
    <div className="w-full p-0">
      <div className={`${styles.hero} h-[40vh]`}>
        <div className={`${styles.heroImg} md:pt-[5rem] pt-16`}>
          <div className="text-center">
          <h1 className="text-white font-bold lg:text-5xl sm:text-3xl text-xlpb-2">Our Products</h1>
          <h3 className="text-gray-100 sm:text-xl">New loans and products</h3>
          </div>
        </div>
      </div>
      <section className="py-16 flex flex-col items-center w-full">
        <div>
        <div className="sm:px-10 px-8 w-full">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          layout="image-right" // or "image-left" for alternate layouts
        />
      ))}
    </div>
       </div>
       <div className="bg-purple-100 py-10 w-full sm:px-10 px-8 flex flex-col items-center">
        <h2 className="font-semibold md:text-4xl sm:text-2xl text-xl py-6">Coming Soon</h2>
        <div>
          <div>
            {comingSoonProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                layout="image-right" // or "image-left" for alternate layouts
              />
            ))}
          </div>
        </div>
       </div>
      </section>

    </div>
  )
}

export default ProductsPage;
