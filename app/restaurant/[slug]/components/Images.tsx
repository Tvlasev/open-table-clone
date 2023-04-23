import { FC } from "react";

interface ImagesProps {
  images: string[];
}

const Images = ({ images }: ImagesProps) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">{`${images.length} photos`}</h1>
      <div className="flex flex-wrap">
        {images.map(img => {
          return (<img
            className="w-56 h-44 mr-1 mb-1"
            src={img}
            alt=""
          />)
        })}
      </div>
    </div>
  );
};

export default Images;
