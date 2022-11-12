import { StarIcon } from "@heroicons/react/solid";
import ProductAmzImgWrapper from "./ProductAmzImgWrapper";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // sending product as an action to the REDUX store ... the basket slice
    dispatch(addToBasket(product));
  };
  
  const removeItemFromCart = () => {
    //Remove item from REDUX
    dispatch(removeFromBasket({ id }));
  }

  return (
    <div className="grid grid-cols-5">
      <ProductAmzImgWrapper
        image={image.split("/").slice(-1)[0]}
        height={200}
        width={200}
      />

      {/* Middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="CAD" />

        {hasPrime && (
          <div className="flex items-center space-x-2">
            <img
              loading="lazy"
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt={`${title} image`}
            />
            <p className="text-xs text-gray-500">Free Next-Day Delivery</p>
          </div>
        )}
      </div>
      {/* Right Add and Remove buttons */}
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button" onClick={addItemToCart}>
          Add to Cart
        </button>
        <button className="button" onClick={removeItemFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
