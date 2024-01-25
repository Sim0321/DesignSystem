import React, { useEffect, useState } from "react";
import * as S from "../styles/pages/RegisterComponentPage.style";
import { titleArray } from "../utils/array";
import LabelBox from "../components/labelBox/LabelBox";
import useReturnComponent from "../hooks/useReturnComponent";
import useReturnObj from "../hooks/useReturnObj";
import Button from "../components/common/Button";

const RegisterComponentPage = () => {
  const [selectCategory, setSelectCategory] = useState("");

  const [attrObj, setAttrObj] = useState({});

  console.log("attrObj::", attrObj);

  const { attr, attrKeys } = useReturnObj(selectCategory);

  const clickSelectCategory = (e) => {
    setSelectCategory(e.target.innerText);
  };

  const element = useReturnComponent(selectCategory);

  // console.log("obj ::", attr);
  // console.log("obj배열로 ::", attrKeys);

  // customhook에서 가져온 객체 state로 관리하기 위해
  useEffect(() => {
    setAttrObj({ ...attr });
  }, [attr]);

  const renderCategory = () => {
    return titleArray.map((el, index) => (
      <div className="category" key={index} onClick={clickSelectCategory}>
        {el}
      </div>
    ));
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setAttrObj({ ...attrObj, [name]: value });
  };

  return (
    <S.RegisterWrapper>
      <S.HandleComponentBox>{selectCategory && element}</S.HandleComponentBox>
      <S.HandleStyleBox>
        <div className="category-list">{renderCategory()}</div>
        {attrKeys.length !== 0 &&
          attrKeys.map((el, i) => (
            <LabelBox
              key={i}
              id={el}
              obj={attrObj}
              name={el}
              onChange={onChange}
            />
          ))}
        <Button>등록</Button>
      </S.HandleStyleBox>
    </S.RegisterWrapper>
  );
};

export default RegisterComponentPage;
