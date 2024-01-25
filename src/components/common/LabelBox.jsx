import React from "react";
import Input from "./Input";

const LabelBox = () => {
  return (
    <div>
      <label htmlFor="">컴포넌트명</label>
      <Input placeholder="컴포넌트명을 입력해주세요." />
    </div>
  );
};

export default LabelBox;
