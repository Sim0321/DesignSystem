import { Outlet } from "react-router-dom";
import Header from "./../components/common/Header";
import * as S from "../styles/pages/BaseLayout.style";
import SideBar from "../components/sideBar/SideBar";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <SideBar />
        <S.ComponentWrapper>
          <div className="componentContainer">
            <Outlet />
          </div>
        </S.ComponentWrapper>
      </S.MainWrapper>
    </>
  );
};

export default BaseLayout;
