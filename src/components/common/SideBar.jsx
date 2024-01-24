import * as S from "../../styles/components/common/SideBar.style";

const SideBar = () => {
  return (
    <S.SideBar>
      <div className="title">Components</div>
      <ul>
        <li className="item">Button</li>
        <li className="item">Input</li>
        <li className="item">CheckBox</li>
      </ul>
    </S.SideBar>
  );
};

export default SideBar;
