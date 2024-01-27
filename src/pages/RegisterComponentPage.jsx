import React, { useEffect, useState } from "react";
import * as S from "../styles/pages/RegisterComponentPage.style";
import * as Utils from "../utils/array";
import LabelBox from "../components/labelBox/LabelBox";
import useReturnObj from "../hooks/useReturnObj";
import Button from "../components/common/Button";
import useComponent from "../hooks/useComponent";
import useReturnComponent from "../hooks/useReturnComponent";

const RegisterComponentPage = () => {
  // 어떤 컴포넌트로 생성할 것인지 카테고리 상태관리
  const [selectCategory, setSelectCategory] = useState("");

  // 커스텀 훅에서 가져온 카테고리별 obj랑 obj의 키로 만든 배열
  const { attr, attrKeys } = useReturnObj(selectCategory);

  // 백한테 보낼 데이터 형식
  const [attrObj, setAttrObj] = useState({});

  // console.log("attrObj ::", attrObj);

  const { addComponentQuery } = useComponent();

  // const element = useReturnComponent(selectCategory, attrObj);
  const { returnElement } = useReturnComponent();

  // console.log("element ::", element);

  const clickSelectCategory = (e) => {
    setSelectCategory(e.target.innerText);
  };

  // category 렌더 함수
  const renderCategory = () => {
    return Utils.titleArray.map((el, index) => (
      <div className="category" key={index} onClick={clickSelectCategory}>
        {el}
      </div>
    ));
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "checked") {
      setAttrObj({ ...attrObj, [name]: e.target.checked });
    } else {
      setAttrObj({ ...attrObj, [name]: value });
    }
  };

  // category에 따른 Element 반환 함수
  // const returnElement = useCallback(() => {
  //   if (selectCategory === "Button") {
  //     return (
  //       <S.TestButton obj={attrObj}>{attrObj.desc || "Button"}</S.TestButton>
  //     );
  //   } else if (selectCategory === "Input") {
  //     return (
  //       <S.TestInput
  //         readOnly
  //         type="text"
  //         obj={attrObj}
  //         placeholder={attrObj.placeholder || "placeholder 입니다."}
  //         defaultValue={attrObj.desc}
  //       />
  //     );
  //   } else if (selectCategory === "CheckBox") {
  //     return (
  //       <S.TestCheckbox
  //         readOnly
  //         type="checkbox"
  //         obj={attrObj}
  //         checked={attrObj.checked || false}
  //       />
  //     );
  //   }
  //   // else if (selectCategory === "Card") {
  //   //   return <div>card</div>;
  //   // }  else if (selectCategory === "BoxShadow") {
  //   //   return <div>box shadow</div>;
  //   // } else if (selectCategory === "Radio") {
  //   //   return <input type="radio" />;
  //   // }
  //   else {
  //     return null;
  //   }
  // }, [selectCategory, attrObj]);

  // useEffect(() => {
  //   returnElement();
  // }, [returnElement]);

  // customhook에서 가져온 객체 state로 관리하기 위해
  useEffect(() => {
    setAttrObj({ ...attr });
  }, [attr]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addComponentQuery.mutate({ selectCategory, attrObj });
  };

  return (
    <S.RegisterWrapper>
      <S.HandleComponentBox>
        {/* {selectCategory && returnElement()} */}
        {/* {selectCategory && element} */}
        {selectCategory && returnElement(selectCategory, attrObj)}
      </S.HandleComponentBox>
      <S.HandleStyleBox
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="category-list">{renderCategory()}</div>
        <div className="form">
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
        </div>
        {attrKeys.length !== 0 && <Button onClick={handleSubmit}>등록</Button>}
      </S.HandleStyleBox>
    </S.RegisterWrapper>
  );
};

export default RegisterComponentPage;
