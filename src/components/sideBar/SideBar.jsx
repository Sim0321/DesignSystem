import * as S from "../../styles/components/sideBar/SideBar.style";
import useComponent from "../../hooks/useComponent";
import ComponentTitle from "./ComponentList";
import ComponentI from "../../assets/icons/component.svg?react";
// import { useEffect } from "react";

const SideBar = () => {
  const { categoryArray } = useComponent();

  return (
    <S.SideBar>
      <div className="title">
        <ComponentI />
        Components
      </div>
      <div className="folder">
        {categoryArray &&
          categoryArray.map((component) => (
            <ComponentTitle key={component} component={component} />
          ))}
      </div>
    </S.SideBar>
  );
};

export default SideBar;
