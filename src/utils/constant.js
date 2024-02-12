const titleArray = ["Button", "Input", "Card", "BoxShadow"];

const placeholder = [
  { label: "component_name", text: "컴포넌트명을 입력해주세요." },
  { label: "width", text: "ex: 50px" },
  { label: "height", text: "ex: 50px" },
  { label: "border_radius", text: "ex : 12px" },
  { label: "background", text: "ex : #fff" },
  { label: "color", text: "ex : #000" },
  { label: "padding", text: "ex : 0px 5px 8px 12px" },
  { label: "border_width", text: "ex : 2px" },
  { label: "border_style", text: "solid" },
  { label: "border_color", text: "#000" },
  { label: "font_size", text: "ex : 15px" },
  { label: "font_weight", text: "ex : 600" },
  { label: "placeholder", text: "placeholder를 입력해주세요." },
  { label: "desc", text: "입력값을 입력해주세요." },
  { label: "box_shadow", text: "ex : 0px(x) 2px(y) 3px(blur) 4px #000(색상)" },
];

const borderStyle = [
  "solid",
  "dotted",
  "dashed",
  "double",
  "groove",
  "ridge",
  "insert",
  "outset",
];

const buttonAttr = {
  component_name: "",
  desc: "",
  width: "50px",
  height: "20px",
  border_radius: "",
  background: "#eee",
  color: "#000",
  padding: "0",
  border_width: "1px",
  border_style: "solid",
  border_color: "#000",
  font_size: "14px",
  font_weight: "",
  box_shadow: "",
};

const inputAttr = {
  component_name: "",
  placeholder: "",
  desc: "",
  width: "150px",
  height: "20px",
  border_radius: "",
  background: "#eee",
  color: "#000",
  padding: "0px 10px",
  border_width: "1px",
  border_style: "solid",
  border_color: "#000",
  font_size: "14px",
  font_weight: "",
  box_shadow: "",
};

const cardAttr = {
  component_name: "",
  desc: "",
  width: "150px",
  height: "150px",
  border_radius: "8px",
  background: "#eee",
  color: "#000",
  padding: "0",
  border_width: "1px",
  border_style: "solid",
  border_color: "#000",
  font_size: "14px",
  font_weight: "",
  box_shadow: "",
};

const boxShadowAttr = {
  component_name: "",
  width: "150px",
  height: "150px",
  border_radius: "8px",
  box_shadow: "0px 2px 8px 0px rgba(99, 99, 99, 0.2)",
};

export {
  titleArray,
  placeholder,
  borderStyle,
  buttonAttr,
  inputAttr,
  cardAttr,
  boxShadowAttr,
};
