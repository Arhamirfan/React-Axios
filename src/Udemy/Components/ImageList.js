import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";
const ImageList = (props) => {
  const Images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <>
      <p>ImageList length : {props.images.length}</p>
      <div className="image-list">{Images}</div>
    </>
  );
};
export default ImageList;
