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

  // name들 예외처리
  const renderDiffentInput = () => {
    if (name === "checked") {
      return (
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={obj.checked || false}
          onChange={onChange}
        />
      );
    }
    if (name === "component_name") {
      return (
        <Input
          id={id}
          name={name}
          placeholder={pickPlaceHolder()}
          value={obj[name] || ""}
          onChange={onChange}
          size="large"
        />
      );
    } else {
      return (
        <Input
          id={id}
          name={name}
          placeholder={pickPlaceHolder()}
          value={obj[name] || ""}
          onChange={onChange}
        />
      );
    }
  };

  return (
    <S.LabelBox>
      <Label htmlFor={id}>{name}</Label>
      {/* <Input
        id={id}
        name={name}
        placeholder={pickPlaceHolder()}
        value={obj[name] || ""}
        onChange={onChange}
      /> */}
      {renderDiffentInput()}
    </S.LabelBox>
  );
};

export default LabelBox;
