import React from "react";
import "./VaryousDanceBlock.scss";

interface IVaryousDanceBlock {
  image: string;
  altImage: string;
  title: string;
  description: string;
  imagePosition?: 'left' | 'right';
}

const VaryousDanceBlock = (props: IVaryousDanceBlock) => {
  const { image, altImage, title, description, imagePosition } = props;

  return (
    <div className="varyous-dance-item">
      <div className={`varyous-dance-item__image image-pos-${imagePosition}`}>
        <img alt={altImage} src={image} />
      </div>
      <div className="varyous-dance-content-wrapper">
        <div className="varyous-dance-item__content">
          <div className="varyous-dance-item__content-title">{title}</div>
          <div className="varyous-dance-item__content-description">
            {description}
          </div>
          <div className="varyous-dance-item__content-button">
            <button>read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaryousDanceBlock;
