import React from "react";
import * as S from "../../styles/components/common/Label.style";

const Label = ({ children, ...rest }) => {
  return <S.Label {...rest}>{children}</S.Label>;
};

export default Label;
