import { StarIcon } from "@heroicons/react/solid";
import { useState } from "react";
import ProductAmzImgWrapper from "./ProductAmzImgWrapper";
import Currency from "react-currency-formatter";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    //Randomize Star Rating
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime, setHasPrime] = useState(Math.random() <0.5)
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 my-3">{category}</p>
      <ProductAmzImgWrapper
        image={image.split("/").slice(-1)[0]}
        height={200}
        width={200}
      />
      <h4>{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} currency="CAD" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" loading="lazy" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
}

export default Product;
