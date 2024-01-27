import React from "react";
import useReturnComponent from "../../hooks/useReturnComponent";
import * as S from "../../styles/components/item/MainItemBox.style";
import Clip from "../common/Clip";

const MainItemBox = ({ data, title }) => {
  console.log(data.style);
  const { returnElement } = useReturnComponent();

  const renderElement = (style) => {
    if (title) {
      return returnElement(title, style);
    }
  };

  const changeToCssCode = (styleObj) => {
    return Object.entries(styleObj)
      .map(([property, value]) => `${property}: ${value};`)
      .join(" ");
  };

  const copyCss = () => {
    const styleObj = Object.keys(data.style).reduce((acc, key) => {
      const value = data.style[key];

      // 카멜 케이스를 케밥케이스로
      const kebabFormat = key.replace("_", "-");

      // desc, component_name은 제거하고, value값이 빈값일 때 key값 제거
      if (key !== "desc" && key !== "component_name" && value !== "") {
        acc[kebabFormat] = value;
      }

      return acc;
    }, {});

    const cssCode = changeToCssCode(styleObj);

    navigator.clipboard
      .writeText(cssCode)
      .then(() => {
        alert("CSS 코드가 복사되었습니다.");
      })
      .catch(() => {
        alert("CSS 코드 복사에 실패했습니다.");
      });

    // console.log(obj);
    // console.log("-----", data.style);
  };

  return (
    <S.MainItem onClick={copyCss}>
      <div className="item-header">{data.style.component_name}</div>
      <Clip />
      <div className="item-body">{renderElement(data.style)}</div>
    </S.MainItem>
  );
};

export default MainItemBox;
