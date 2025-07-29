import Image from "next/image";
import Link from "next/link";
import type { ProductCardType } from "@/types";
import styles from "@/styles/landingPage.module.css";

const ProductCard = ({
  icon,
  title,
  text,
  productDetails,
}: ProductCardType) => {
  return (
    <div
      className={`${styles.productCard} bg-purple-500 min-w-[300px] hover:bg-purple-400 relative rounded-3xl`}
    >
      <div className={`${styles.pcBgImg} `} />
      <div className="absolute flex flex-col justif bottom-12 w-full px-5 h-[220px] text-white">
        <Image src={icon} width={50} height={50} alt="product-card-icon" />
        <h3 className="font-extrabold text-xl py-4">{title}</h3>
        <span className="font-medium py-2">{text}</span>
        <Link href={productDetails}>
          <div className="flex justify-between items-center pt-2">
            <span className="text-yellow-400 font-bold">See More</span>
            <Image
              src={"/Icons/yellow-arrow-right.png"}
              alt="yellow-arrow-white"
              width={40}
              height={40}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
