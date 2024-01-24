import { Outlet } from "react-router-dom";
import Header from "./../components/common/Header";
import SideBar from "../components/common/SideBar";
import * as S from "../styles/pages/BaseLayout.style";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <S.MainWrapper>
        <SideBar />
        <Outlet />
      </S.MainWrapper>
    </>
  );
};

export default BaseLayout;
