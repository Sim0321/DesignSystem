import * as S from "../styles/pages/MainPage.style";
import Button from "../components/common/Button";
import { useSelector } from "react-redux";
import useComponent from "../hooks/useComponent";

import MainItemBox from "../components/item/MainItemBox";
import Loading from "../components/common/Loading";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const title = useSelector((state) => state.componentSlice.component);
  // const sub = useSelector((state) => state.componentSlice.subComponent);

  // data 불러오는 query
  const {
    categoryQuery: { isLoading, data: componentDataList },
  } = useComponent();

  // component들 렌더하는 함수
  const renderComponentItem = () => {
    /* componentList가 없을 때, 있는데 폴더를 누르지 않았을 때, 눌렀을 때, DetailComponent를 눌렀을 때 분기 처리*/
    if (Object.keys(componentDataList).length !== 0 && title) {
      return Object.values(componentDataList[title]).map((el) => (
        <MainItemBox data={el} key={el.id} title={title} />
      ));
    }
    if (!title) {
      return (
        <S.NoTitle>
          <p>SideBar에서 Category를 선택해주세요.</p>
        </S.NoTitle>
      );
    }
  };

  // 나중에 sub title 까지 보여줘야할 때(Detail일 때)
  // useEffect(() => {
  //   dispatch(setSubComponent(""));
  // }, [title]);

  if (isLoading) return <Loading />;

  return (
    <>
      {componentDataList.length === 0 ? (
        <S.NotHaveComponent>
          <div className="main-desc">등록된 컴포넌트가 없습니다.</div>
          <div className="sub-desc">등록을 먼저해주세요.</div>
          <Button size="large" onClick={() => navigate("/upload")}>
            등록하기
          </Button>
        </S.NotHaveComponent>
      ) : (
        <S.HaveComponent>
          <div className="header">
            {title}
            {/* {title && sub ? `${title} - ${sub}` : `${title}`} */}
          </div>
          <div className="section">{renderComponentItem()}</div>
        </S.HaveComponent>
      )}
    </>
  );
};

export default MainPage;
