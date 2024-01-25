import React from "react";
import * as S from "../../styles/components/sideBar/ComponentList.style";
import DownArrow from "../../assets/icons/downArrow.svg?react";
import { useDispatch, useSelector } from "react-redux";
import { setComponent } from "../../redux/slices/componentSlice";

const ComponentTitle = ({ component }) => {
  const dispatch = useDispatch();

  const nowComponent = useSelector((state) => state.componentSlice.component);

  const clickDownArrow = (title) => {
    if (nowComponent === title) {
      dispatch(setComponent(""));
    } else {
      dispatch(setComponent(title));
    }
  };
  return (
    <S.ComponentTitle id={component.type}>
      <div className="category" onClick={() => clickDownArrow(component.type)}>
        {component.type}
        <DownArrow />
      </div>

      {nowComponent === component.type ? (
        <div className="component_name-list">
          {component.data.map((el) => (
            <React.Fragment key={el.id}>
              <div className="list">
                <div className="dot"></div>
                <div className="name">{el.component_name}</div>
              </div>
            </React.Fragment>
          ))}
        </div>
      ) : (
        ""
      )}
    </S.ComponentTitle>
  );
};

export default ComponentTitle;
