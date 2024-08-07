import React from "react";

interface BackgroundProperties {
  imageUrl: string;
}

const Background: React.FC<BackgroundProperties> = ({ imageUrl }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: -1,
      }}
    />
  );
};

export default Background;
