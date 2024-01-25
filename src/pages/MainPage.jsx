import React from "react";
import * as S from "../styles/pages/MainPage.style";

import { useEffect, useState } from "react";
import { child, get, ref } from "firebase/database";
import { db } from "../apis/firebase";
import Button from "../components/common/Button";
import { useSelector } from "react-redux";

const MainPage = () => {
  const [componentList, setComponentList] = useState([]);

  const title = useSelector((state) => state.componentSlice.component);

  console.log(componentList);
  console.log(title);

  // react-qeury 추가
  const getComponents = () => {
    const dbRef = ref(db);
    get(child(dbRef, "componentstest"))
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
      {/* componentList가 없을 때, 있는데 폴더를 누르지 않았을 때, 눌렀을 때, DetailComponent를 눌렀을 때 */}
      {componentList.length === 0 ? (
        <S.NotHaveComponent>
          <div className="main-desc">등록된 컴포넌트가 없습니다.</div>
          <div className="sub-desc">등록 먼저해주세요.</div>
          <Button size="large">등록하기</Button>
        </S.NotHaveComponent>
      ) : (
        <S.HaveComponent>
          <div className="header">{title}</div>
          <div className="section">
            <div className="item">
              <div className="item-header">Default Button</div>
              <div className="item-body">
                <button>채운</button>
              </div>
            </div>
            <div className="item">2</div>
            <div className="item">3</div>
            <div className="item">4</div>
            {/* {returnElement()} */}
          </div>
        </S.HaveComponent>
      )}
    </>
  );
};

export default MainPage;
