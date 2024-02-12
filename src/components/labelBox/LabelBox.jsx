import React, { useState } from "react";
import Input from "../common/Input";
import * as S from "../../styles/components/labelBox/LabelBox.style";
import Label from "../common/Label";
import * as Utils from "../../utils/constant";
import Picker from "../../assets/icons/picker.svg?react";
import PickerModal from "../modal/PickerModal";
import { useDispatch, useSelector } from "react-redux";
import { setIndex } from "../../redux/slices/modalIndexSlice";

const LabelBox = ({ id, name, obj, setAttrObj, onChange, index }) => {
  const dispatch = useDispatch();

  // Picker modal 뜨는 상태관리
  const [openPicker, setOpenPicker] = useState(false);

  // Picker의 기본 값
  const [color, setColor] = useState("#eee");

  // modal의 index store에서 관리
  const nowIndex = useSelector((state) => state.modalIndexSlice.index);

  // array 함수에서 input에 들어갈 placeholder들 추출 함수
  const pickPlaceHolder = () => {
    const filter = Utils.placeholder.filter((el) => el.label === name);
    return filter[0].text;
  };

  // store에 index dispatch, openPicker 트리거 함수
  const openPickerBox = (e, index) => {
    e.stopPropagation();
    dispatch(setIndex(index));
    setOpenPicker(true);
  };

  // Color Picker의 onChange 함수
  const handleColorChange = (color) => {
    setAttrObj({ ...obj, [name]: color.hex });
    setColor(color.hex);
  };

  // 입력값들에 대한 분기처리 함수
  const renderDiffentInput = () => {
    if (name === "checked") {
      return (
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={obj.checked || false}
          onChange={onChange}
        />
      );
    }
    if (name === "component_name") {
      return (
        <Input
          id={id}
          name={name}
          placeholder={pickPlaceHolder()}
          value={obj[name] || ""}
          onChange={onChange}
          size="large"
        />
      );
    }
    if (name === "background") {
      return (
        <>
          <Input
            readOnly
            id={id}
            name={name}
            placeholder={pickPlaceHolder()}
            value={obj[name] || ""}
          />
          <div className="svg-box" onClick={(e) => openPickerBox(e, index)}>
            <Picker />
          </div>
          {openPicker && nowIndex === index && (
            <PickerModal
              color={color}
              handleColorChange={handleColorChange}
              setOpenPicker={setOpenPicker}
              openPicker={openPicker}
              name={name}
            />
          )}
        </>
      );
    }
    if (name === "color") {
      return (
        <>
          <Input
            readOnly
            id={id}
            name={name}
            placeholder={pickPlaceHolder()}
            value={obj[name] || ""}
          />
          <div className="svg-box" onClick={(e) => openPickerBox(e, index)}>
            <Picker />
          </div>
          {openPicker && nowIndex === index && (
            <PickerModal
              color={color}
              handleColorChange={handleColorChange}
              setOpenPicker={setOpenPicker}
              name={name}
            />
          )}
        </>
      );
    }
    if (name === "border_color") {
      return (
        <>
          <Input
            readOnly
            id={id}
            name={name}
            placeholder={pickPlaceHolder()}
            value={obj[name] || ""}
          />
          <div className="svg-box" onClick={(e) => openPickerBox(e, index)}>
            <Picker />
          </div>
          {openPicker && nowIndex === index && (
            <PickerModal
              color={color}
              handleColorChange={handleColorChange}
              setOpenPicker={setOpenPicker}
              name={name}
            />
          )}
        </>
      );
    }
    if (name === "box_shadow") {
      return (
        <Input
          id={id}
          name={name}
          placeholder={pickPlaceHolder()}
          value={obj[name] || ""}
          onChange={onChange}
          size="super"
        />
      );
    }
    return (
      <Input
        id={id}
        name={name}
        placeholder={pickPlaceHolder()}
        value={obj[name] || ""}
        onChange={onChange}
      />
    );
  };

  return (
    <S.LabelBox>
      <Label htmlFor={id}>{name}</Label>
      {renderDiffentInput()}
    </S.LabelBox>
  );
};

export default LabelBox;
