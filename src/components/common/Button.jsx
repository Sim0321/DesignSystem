import React from "react";
import * as S from "../../styles/components/common/Button.style";

const Button = ({ children, size, ...rest }) => {
  return (
    <S.Button size={size} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
