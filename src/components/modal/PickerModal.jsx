import React, { useEffect, useRef } from "react";
import * as S from "../../styles/components/modal/PickerModal.style";
import { ChromePicker } from "react-color";
import Close from "../../assets/icons/close.svg?react";

const PickerModal = ({ color, handleColorChange, setOpenPicker, name }) => {
  const popupRef = useRef();

  // 밖에 누르면 꺼지는 함수
  const handleClickOutside = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      setOpenPicker(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <S.PickerModalWrapper ref={popupRef}>
      <S.PickerModalContainer>
        <div className="modal-header">
          <span>{name}</span>
          <Close onClick={() => setOpenPicker(false)} />
        </div>
        <ChromePicker color={color} onChangeComplete={handleColorChange} />
        <div className="bottom">
          <div
            className="test-div"
            style={{ backgroundColor: `${color}` }}
          ></div>
        </div>
      </S.PickerModalContainer>
    </S.PickerModalWrapper>
  );
};

export default PickerModal;
