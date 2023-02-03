import React from "react";

const ImageBox = (props) => {
  return(
    <div style={{backgroundColor: props.data.Background.toLowerCase()}}className="box">
      <p>ID: {props.data.id}</p>
      <p>Background: {props.data.Background}</p>
      <p>Skin: {props.data.Skin}</p>
      <p>Outfit: {props.data.Outfit}</p>
    </div>
  );
}

export default ImageBox;