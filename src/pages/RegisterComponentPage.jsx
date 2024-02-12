import React, { useEffect, useState } from "react";
import * as S from "../styles/pages/RegisterComponentPage.style";
import * as Utils from "../utils/constant";
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

  // 등록 쿼리
  const { addComponentQuery } = useComponent();

  // category에 따라 다른 Element return 하는 함수
  const { returnElement } = useReturnComponent();

  // 백한테 보낼 데이터 형식
  const [attrObj, setAttrObj] = useState({});

  // 상단에 category 선택하는 함수
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

  // 해당 카테고리의 입력값들 onChange 함수
  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "checked") {
      setAttrObj({ ...attrObj, [name]: e.target.checked });
    } else {
      setAttrObj({ ...attrObj, [name]: value });
    }
  };

  // customhook에서 가져온 객체 state로 관리하기 위해
  useEffect(() => {
    setAttrObj({ ...attr });
  }, [attr]);

  // 등록 버튼 누르면 submit 하는 함수
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(attrObj);
    if (!attrObj.component_name) {
      alert("컴포넌트 이름은 필수입니다.");
    } else {
      addComponentQuery.mutate({ selectCategory, attrObj });
    }
  };

  return (
    <S.RegisterWrapper>
      <S.HandleComponentBox>
        {selectCategory ? (
          returnElement(selectCategory, attrObj)
        ) : (
          <div className="info-text">우측에 있는 카테고리를 선택해주세요.</div>
        )}
      </S.HandleComponentBox>
      <S.HandleStyleBox
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="style-top">
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
                  setAttrObj={setAttrObj}
                  index={i}
                />
              ))}
          </div>
        </div>
        <div className="style-btn">
          {attrKeys.length !== 0 && (
            <Button onClick={handleSubmit} size="large">
              등록
            </Button>
          )}
        </div>
      </S.HandleStyleBox>
    </S.RegisterWrapper>
  );
};

export default RegisterComponentPage;
