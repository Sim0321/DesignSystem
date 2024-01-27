import React from "react";
import * as S from "../../styles/components/sideBar/ComponentList.style";
import DownArrow from "../../assets/icons/downArrow.svg?react";
import { useDispatch, useSelector } from "react-redux";
import {
  setComponent,
  setSubComponent,
} from "../../redux/slices/componentSlice";
import useComponent from "../../hooks/useComponent";

const ComponentTitle = ({ component }) => {
  const dispatch = useDispatch();

  const nowComponent = useSelector((state) => state.componentSlice.component);

  // data 가져오는 쿼리
  const {
    categoryQuery: { data: componentData },
  } = useComponent();

  // sub List 트리거함수
  const clickDownArrow = (title) => {
    if (nowComponent === title) {
      dispatch(setComponent(""));
    } else {
      dispatch(setComponent(title));
    }
  };

  // sub Title 누르는 함수
  const clickSub = (data) => {
    if (nowComponent) {
      dispatch(setSubComponent(data.style.component_name));
    }
  };

  // category에 active인지 아닌지 className 반환하는 함수
  const activeClassName = () => {
    if (nowComponent === component) {
      return "category active";
    }
    return "category";
  };

  return (
    <S.ComponentTitle>
      <div
        className={activeClassName()}
        onClick={() => clickDownArrow(component)}
      >
        {component}
        <DownArrow />
      </div>

      {nowComponent === component ? (
        <div className="component_name-list">
          {Object.values(componentData[component]).map((el) => (
            <div className="list" key={el.id} onClick={() => clickSub(el)}>
              <div className="dot"></div>
              <div className="name">{el.style.component_name}</div>
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </S.ComponentTitle>
  );
};

export default ComponentTitle;
