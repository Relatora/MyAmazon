import Image from "next/image";

const ImageStatic = ({ image }) => {
  return (
    <>
      <Image
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
