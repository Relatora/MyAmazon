import Image from "next/image";

const ProductAmzImgWrapper = ({ key, image, title, width, height }) => {
  const papaReactImgLoader = ({ src }) =>
    //    (https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg

    `https://fakestoreapi.com/img/${src}`;
  return (
    <>
      <Image
        key={key}
        loader={papaReactImgLoader}
        alt={title}
        loading="lazy"
        objectFit="contain"
        width={width}
        height={height}
        src={image}
      />
    </>
  );
};

export default ProductAmzImgWrapper;
