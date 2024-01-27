import { useEffect, useState } from "react";

import * as Utils from "../utils/obj";

function useReturnObj(title) {
  const [attr, setAttr] = useState({});

  const [attrKeys, setAttrKeys] = useState([]);

  useEffect(() => {
    switch (title) {
      case "Button":
        setAttr(Utils.buttonAttr);
        setAttrKeys([...Object.keys(Utils.buttonAttr)]);
        break;
      case "Input":
        setAttr(Utils.inputAttr);
        setAttrKeys([...Object.keys(Utils.inputAttr)]);
        break;

      case "Card":
        setAttr(Utils.cardAttr);
        setAttrKeys([...Object.keys(Utils.cardAttr)]);
        break;
      case "BoxShadow":
        setAttr(Utils.boxShadowAttr);
        setAttrKeys([...Object.keys(Utils.boxShadowAttr)]);
        break;
      default:
        setAttr({});
        setAttrKeys([]);
        break;
    }
  }, [title]);

  return { attr, attrKeys };
}

export default useReturnObj;
