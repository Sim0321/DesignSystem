import React, { useState } from "react";
import * as S from "../styles/pages/RegisterComponentPage.style";
import { titleArray } from "../utils/array";
import LabelBox from "../components/common/LabelBox";
import useReturnComponent from "../hooks/useReturnComponent";

const RegisterComponentPage = () => {
  const [selectCategory, setSelectCategory] = useState("");
  console.log("selectCategory ::", selectCategory);

  const clickSelectCategory = (e) => {
    console.log(e);
    setSelectCategory(e.target.innerText);
  };

  const element = useReturnComponent(selectCategory);

  console.log(element);

  const renderCategory = () => {
    return titleArray.map((el, index) => (
      <div className="category" key={index} onClick={clickSelectCategory}>
        {el}
      </div>
    ));
  };

  return (
    <S.RegisterWrapper>
      <S.HandleComponentBox>{selectCategory && element}</S.HandleComponentBox>
      <S.HandleStyleBox>
        <div className="category-list">{renderCategory()}</div>
        <LabelBox />
      </S.HandleStyleBox>
    </S.RegisterWrapper>
  );
};

export default RegisterComponentPage;
