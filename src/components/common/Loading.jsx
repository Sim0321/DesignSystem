import React from "react";

import LoadingI from "../../assets/icons/loading.svg?react";
import * as S from "../../styles/components/common/Loading.style";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <LoadingI />
      <p>로딩 중입니다.</p>
    </S.LoadingWrapper>
  );
};

export default Loading;
