import React, { useEffect } from "react";
import * as S from "../styles/pages/MainPage.style";
import Button from "../components/common/Button";
import { useDispatch, useSelector } from "react-redux";
import useComponent from "../hooks/useComponent";
import { setSubComponent } from "../redux/slices/componentSlice";

import useReturnComponent from "../hooks/useReturnComponent";

const MainPage = () => {
  // const [componentList, setComponentList] = useState([]);
  const dispatch = useDispatch();

  const title = useSelector((state) => state.componentSlice.component);
  const sub = useSelector((state) => state.componentSlice.subComponent);

  const {
    categoryQuery: { isLoading, data: componentDataList },
  } = useComponent();
  // console.log("componentDataList ::", componentDataList);

  // const [styleObj, setStyleObj] = useState({})
  // const element = useReturnComponent(title, styleObj);
  const { returnElement } = useReturnComponent();

  const renderElement = (style) => {
    // if (title && title === "Button") {
    //   return <T.TestButton obj={style}>{style.desc || "Button"}</T.TestButton>;
    // } else if (title && title === "Input") {
    //   return (
    //     <T.TestInput
    //       readOnly
    //       type="text"
    //       obj={style}
    //       placeholder={style.placeholder || "placeholder입니다."}
    //       defaultValue={style.desc}
    //     />
    //   );
    // } else if (title && title === "CheckBox") {
    //   <T.TestCheckbox
    //     readOnly
    //     type="checkbox"
    //     obj={style}
    //     checked={style.checked || false}
    //   />;
    // }
    // }
    // return <div>띠용</div>;

    if (title) {
      return returnElement(title, style);
    } else {
      return <div>title먼저 클릭</div>;
    }
  };

  /* componentList가 없을 때, 있는데 폴더를 누르지 않았을 때, 눌렀을 때, DetailComponent를 눌렀을 때 분기 처리*/
  const renderComponentItem = () => {
    if (Object.keys(componentDataList).length !== 0 && title) {
      return Object.values(componentDataList[title]).map((el) => (
        <div className="item" key={el.id}>
          <div className="item-header">{el.style.component_name}</div>
          <div className="item-body">
            {/* <button>{el.style.desc}</button> */}
            {renderElement(el.style)}
          </div>
        </div>
      ));
    } else {
      return <div>없음</div>; // sub Component 없을 때, title이 없을 때
    }
  };

  useEffect(() => {
    dispatch(setSubComponent(""));
  }, [title]);

  if (isLoading) return "Loding 중입니다...";

  return (
    <>
      {componentDataList.length === 0 ? (
        <S.NotHaveComponent>
          <div className="main-desc">등록된 컴포넌트가 없습니다.</div>
          <div className="sub-desc">등록 먼저해주세요.</div>
          <Button size="large">등록하기</Button>
        </S.NotHaveComponent>
      ) : (
        <S.HaveComponent>
          <div className="header">
            {/* {title} - {sub} */}
            {title && sub ? `${title} - ${sub}` : `${title}`}
          </div>
          <div className="section">
            {/* <div className="item">
              <div className="item-header">Default Button</div>
              <div className="item-body">
                <button>채운</button>
              </div>
            </div> */}

            {/* {Object.values(componentDataList[title]).map((el) => (
              <div className="item" key={el.id}>
                <div className="item-header">{el.style.component_name}</div>
                <div className="item-body">
                  <button>채운</button>
                </div>
              </div>
            ))} */}

            {renderComponentItem()}
          </div>
        </S.HaveComponent>
      )}
    </>
  );
};

export default MainPage;
