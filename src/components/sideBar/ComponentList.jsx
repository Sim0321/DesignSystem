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
  // console.log("component ::", component);
  const dispatch = useDispatch();

  const nowComponent = useSelector((state) => state.componentSlice.component);

  const {
    categoryQuery: { data: componentData },
  } = useComponent();

  // console.log(nowComponent);
  // console.log(component);

  const clickDownArrow = (title) => {
    if (nowComponent === title) {
      dispatch(setComponent(""));
    } else {
      dispatch(setComponent(title));
    }
  };

  const temp = (data) => {
    // console.log(data);
    if (nowComponent) {
      dispatch(setSubComponent(data.style.component_name));
    }
  };

  return (
    <S.ComponentTitle>
      <div className="category" onClick={() => clickDownArrow(component)}>
        {component}
        <DownArrow />
      </div>

      {nowComponent === component ? (
        <div className="component_name-list">
          {Object.values(componentData[component]).map((el) => (
            <div className="list" key={el.id} onClick={() => temp(el)}>
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
