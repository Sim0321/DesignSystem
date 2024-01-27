import styled from "styled-components";
import { theme } from "../../theme";

export const PickerModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 2%;
  background-color: transparent;
  display: flex;
  justify-content: end;
  align-items: center;
  z-index: 1;
`;

export const PickerModalContainer = styled.div`
  width: 250px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 12px;
  margin-right: 45px;
  .modal-header {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    color: #fff;
    font-size: 1.8rem;
    svg {
      fill: #fff;
      cursor: pointer;
    }
  }
  .chrome-picker {
    border-radius: 8px !important;
  }
  .bottom {
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    justify-content: end;

    padding-right: 3px;
    margin-top: 10px;
    /* background-color: pink; */
    .test-div {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
`;

export const PickerModalHeader = styled.div``;
