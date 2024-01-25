import React from "react";
import * as S from "../styles/pages/MainPage.style";

import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";
import { db } from "../apis/firebase";
import Button from "../components/common/Button";

const MainPage = () => {
  const [componentList, setComponentList] = useState([]);

  console.log(componentList);

  // react-qeury 추가
  const getComponents = () => {
    const dbRef = ref(db);
    get(child(dbRef, "/components"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setComponentList([...snapshot.val().component]);
        } else {
          console.log("No Data");
        }
      })
      .catch((error) => {
        console.error("데이터 실패", error);
      });
  };

  useEffect(() => {
    getComponents();
  }, []);

  return (
    <>
      {componentList.length === 0 ? (
        <S.NotHaveComponent>
          <div className="main-desc">등록된 컴포넌트가 없습니다.</div>
          <div className="sub-desc">등록 먼저해주세요.</div>
          <Button size="large">등록하기</Button>
        </S.NotHaveComponent>
      ) : (
        <div> </div>
      )}
    </>
  );
};

export default MainPage;
