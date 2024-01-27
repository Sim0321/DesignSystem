import React from "react";
import * as S from "../../styles/components/common/Input.style";

const Input = ({ placeholder, ...rest }) => {
  return <S.Input placeholder={placeholder} {...rest} autoComplete="off" />;
};

export default Input;
