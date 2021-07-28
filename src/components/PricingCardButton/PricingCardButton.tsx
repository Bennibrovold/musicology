import React from "react";
import "./PricingCardButton.scss";

interface IPricingCardButton {
  image: string;
  altImage: string;
  title: string;
  description: string;
  price: string;
}

const PricingCardButton = (props: IPricingCardButton) => {
  const { image, altImage, title, description, price } = props; 

  return (
    <div className="pricing-card-item">
      <div className="pricing-card-item__image">
        <img alt={altImage} src={image} />
      </div>
      <div className="pricing-card-item__content">
        <div className="pricing-card-item__content-title">{title}</div>
        <div className="pricing-card-item__content-description">
          {description}
        </div>
      </div>
      <div className="pricing-card-item__button">
        <button>{price}</button>
      </div>
    </div>
  );
};

export default PricingCardButton;
