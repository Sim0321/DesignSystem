import { useCallback } from "react";
import * as S from "../styles/pages/RegisterComponentPage.style";

const useReturnComponent = () => {
  const returnElement = useCallback((selectCategory, attrObj) => {
    console.log("selectCategory ::", selectCategory);
    console.log("attrObj ::", attrObj);
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
          defaultValue={attrObj.desc}
        />
      );
    } else if (selectCategory === "CheckBox") {
      return (
        <S.TestCheckbox
          readOnly
          type="checkbox"
          obj={attrObj}
          checked={attrObj.checked || false}
        />
      );
    } else {
      return null;
    }
  }, []);

  //   useEffect(() => {
  //   returnElement();
  // }, [returnElement]);

  return { returnElement };
};

export default useReturnComponent;
