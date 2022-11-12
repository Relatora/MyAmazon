import Image from "next/image";

const SizedImageWrapper = ({
  key = null,
  image,
  title = undefined,
  width = undefined,
  height = undefined,
  layout = undefined,
  objectFit = undefined,
}) => {
  const papaReactImgLoader = ({ src }) => `https://links.papareact.com/${src}`;
  return (
    <>
      <Image
        key={key && `${image}-${Math.random()}`}
        loader={papaReactImgLoader}
        alt={title}
        loading="lazy"
        layout={layout}
        objectFit={objectFit}
        // layout="fill"
        // objectFit="contain"
        width={width}
        height={height}
        src={image}
      />
    </>
  );
};

export default SizedImageWrapper;
