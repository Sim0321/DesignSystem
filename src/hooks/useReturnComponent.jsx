import { useEffect, useState } from "react";

function useReturnComponent(title) {
  const [element, setElement] = useState(null);

  useEffect(() => {
    switch (title) {
      case "Button":
        setElement(<button>Button</button>);
        break;
      case "Input":
        setElement(<input type="text" />);
        break;
      case "CheckBox":
        setElement(<input type="checkbox" />);
        break;
      case "Radio":
        setElement(<input type="radio" />);
        break;
      case "Card":
        setElement(<div>card</div>);
        break;
      case "BoxShadow":
        setElement(<div>boxShadow</div>);
        break;
      default:
        setElement(null);
        break;
    }
  }, [title]);

  return element;
}

export default useReturnComponent;
