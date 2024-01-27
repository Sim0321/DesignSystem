import * as S from "../../styles/components/common/Header.style";
import { useNavigate } from "react-router-dom";
import Plus from "../../assets/icons/plus.svg?react";
// import Search from "../../assets/icons/search.svg?react";

const Header = () => {
  const navigate = useNavigate();

  // 검색 기능 추가시 필요
  // const inputBoxRef = useRef(null);
  // const clickSearchIcon = () => {
  //   if (expandStatus === "default") {
  //     setExpandStatus("expand");
  //   } else if (expandStatus === "expand") {
  //     setExpandStatus("decrease");
  //   } else if (expandStatus === "decrease") {
  //     setExpandStatus("expand");
  //   }
  // };

  const clickRegister = () => {
    navigate("/upload");
  };

  return (
    <S.Header>
      <div className="logo" onClick={() => navigate("/")}>
        Component Picker
      </div>

      <div className="right">
        {/* 검색 기능 추가시 필요 */}
        {/* <Search onClick={clickSearchIcon} />

        <S.SearchBox expand={expandStatus} ref={inputBoxRef}>
          <input type="text" />
        </S.SearchBox> */}

        <div className="auth">채운</div>
        <div className="add" onClick={clickRegister}>
          <Plus className="plus" />
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
