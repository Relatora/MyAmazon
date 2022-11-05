import Image from "next/image";

const Slide = ({ key, image, title }) => {
  const papaReactImgLoader = ({ src }) => `https://links.papareact.com/${src}`;
  return (
    <>
      <Image
        key={key}
        loader={papaReactImgLoader}
        alt={title}
        loading="lazy"
        layout="fill"
        objectFit="contain"
        // width={600}
        // height={600}
        src={image}
      />
    </>
  );
};

export default Slide;
