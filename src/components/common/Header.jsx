import * as S from "../../styles/components/common/Header.style";

const Header = () => {
  return (
    <S.Header>
      <div className="left">
        <div className="logo">로고</div>
        <div className="search-box"></div>
      </div>
      <div className="right">
        <div className="auth">채운</div>
      </div>
    </S.Header>
  );
};

export default Header;
