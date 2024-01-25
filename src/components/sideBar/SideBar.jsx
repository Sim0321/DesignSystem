import { useEffect, useState } from "react";
import * as S from "../../styles/components/sideBar/SideBar.style";
import { child, get, ref } from "firebase/database";
import { db } from "../../apis/firebase";

import ComponentTitle from "./ComponentList";

const SideBar = () => {
  const [componentList, setComponentList] = useState([]);

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
    <S.SideBar>
      <div className="title">Components</div>
      <div className="folder">
        {componentList.map((component) => (
          <ComponentTitle key={component.type} component={component} />
        ))}
      </div>
    </S.SideBar>
  );
};

export default SideBar;
