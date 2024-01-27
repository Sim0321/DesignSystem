import { useCallback } from "react";
import * as S from "../styles/pages/RegisterComponentPage.style";

const useReturnComponent = () => {
  const returnElement = useCallback((selectCategory, attrObj) => {
    if (selectCategory === "Button") {
      return (
        <S.TestButton obj={attrObj}>{attrObj.desc || "Button"}</S.TestButton>
      );
    } else if (selectCategory === "Input") {
      return (
        <S.TestInput
          readOnly
          type="text"
          obj={attrObj}
          placeholder={attrObj.placeholder || ""}
          defaultValue={attrObj.desc || "Input"}
        />
      );
    } else if (selectCategory === "Card") {
      return <S.TestCard obj={attrObj}>{attrObj.desc || "Card"} </S.TestCard>;
    } else if (selectCategory === "BoxShadow") {
      return <S.TestBoxShadow obj={attrObj}>Box</S.TestBoxShadow>;
    } else {
      return null;
    }
  }, []);

  return { returnElement };
};

export default useReturnComponent;
