import * as S from "../../styles/components/common/Header.style";

import Search from "../../assets/icons/search.svg?react";
import { useRef, useState } from "react";
import { v4 as uid } from "uuid";
import { ref, set } from "firebase/database";
import { db } from "./../../apis/firebase";

const Header = () => {
  const [expandStatus, setExpandStatus] = useState("default");

  const [dummyDataArray, setDummyDataArray] = useState({
    component: [
      {
        type: "Button",
        data: [
          {
            component_name: "Default Button",
            id: uid(),
          },
          {
            component_name: "BoxShadow Button",
            id: uid(),
          },
        ],
      },
      {
        type: "Input",
        data: [
          {
            component_name: "Default Input",
            id: uid(),
          },
        ],
      },
      {
        type: "CheckBox",
        data: [
          {
            component_name: "Default CheckBox",
            id: uid(),
          },
        ],
      },
    ],
  });

  const submitData = (e) => {
    e.preventDefault();

    set(ref(db, `componentstest`), {
      ...dummyDataArray,
    })
      .then(() => {
        console.log("데이터 쓰기 성공");
      })
      .catch((error) => {
        console.error("데이터 쓰기 실패:", error);
      });
  };

  const inputBoxRef = useRef(null);

  const clickSearchIcon = () => {
    if (expandStatus === "default") {
      setExpandStatus("expand");
    } else if (expandStatus === "expand") {
      setExpandStatus("decrease");
    } else if (expandStatus === "decrease") {
      setExpandStatus("expand");
    }
  };

  return (
    <S.Header>
      <div className="logo">Component Picker</div>

      <div className="right">
        <Search onClick={clickSearchIcon} />

        <S.SearchBox expand={expandStatus} ref={inputBoxRef}>
          <input type="text" />
        </S.SearchBox>

        <div className="auth">채운</div>
        <button onClick={submitData}>추가</button>
      </div>
    </S.Header>
  );
};

export default Header;
