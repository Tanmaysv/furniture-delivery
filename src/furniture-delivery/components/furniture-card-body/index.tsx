import React from "react";
import { FurnitureDataType } from "../../redux/type";
import {
  FurnitureCardBodyText,
  FurnitureCardBodyType,
} from "./styles";

type Props = {
  furniture: FurnitureDataType;
};

const FurnitureCardBody: React.FC<Props> = ({ furniture }: Props) => {
  return (
    <>
      <img src={furniture.src} />
      <FurnitureCardBodyText>
        <div>{furniture.name}</div>
        <FurnitureCardBodyType>({furniture.type})</FurnitureCardBodyType>
        <div>
          &#8377;{furniture.cost} | EMI From &#8377;{furniture.emi}
        </div>
        <div>Rating: {furniture.rating}</div>
      </FurnitureCardBodyText>
    </>
  );
};

export default FurnitureCardBody;
