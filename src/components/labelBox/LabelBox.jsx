import React from "react";
import Input from "../common/Input";
import * as S from "../../styles/components/labelBox/LabelBox.style";
import Label from "../common/Label";
import * as Utils from "../../utils/array";

const LabelBox = ({ id, name, obj, onChange }) => {
  const pickPlaceHolder = () => {
    const filter = Utils.placeholder.filter((el) => el.label === name);
    return filter[0].text;
  };

  // checked일 때 예외처리 필요

  return (
    <S.LabelBox>
      <Label htmlFor={id}>{name}</Label>
      <Input
        id={id}
        name={name}
        placeholder={pickPlaceHolder()}
        value={obj[name] || ""}
        onChange={onChange}
      />
    </S.LabelBox>
  );
};

export default LabelBox;
