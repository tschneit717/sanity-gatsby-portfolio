import React, { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { CardProps } from "./Card.interface";

export const Card: FunctionComponent<CardProps> = ({
  testid,
  image,
  imageAlt,
  title,
  text,
}: CardProps) => {
  return (
    <div
      data-component-type="Card"
      key={uuidv4()}
      data-testid={testid}
      className="card rounded border w-auto inline-block"
    >
      <img className="card__image" src={image} alt={imageAlt} />
      <div className="p-4">
        <span className="card__title text-2xl">{title}</span>
        <p className="card__text">{text}</p>
      </div>
    </div>
  );
};
