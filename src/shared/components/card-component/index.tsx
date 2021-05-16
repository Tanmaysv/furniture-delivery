import React from "react";
import { CardComponentWrapper } from "./styles";

type Props = {
  title?: string;
  body: React.ReactElement;
  footer?: React.ReactElement;
};

const CardComponent: React.FC<Props> = ({ title, body, footer }: Props) => {
  return (
    <CardComponentWrapper>
      {title && <div>{title}</div>}
      {body}
      {footer}
    </CardComponentWrapper>
  );
};

export default CardComponent;
