import Image from "next/image";

const ImageStatic = ({ key, image }) => {
  return (
    <>
      <Image
      key={key}
        loading="lazy"
        objectFit="cover"
        width={1500}
        height={600}
        src={`/${image}`}
      />
    </>
  );
};

export default ImageStatic;
