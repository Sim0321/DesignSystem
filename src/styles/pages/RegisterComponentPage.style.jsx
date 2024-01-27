import styled from "styled-components";
import { theme } from "../theme";

export const RegisterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const HandleComponentBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  .info-text {
    font-size: 1.6rem;
  }
`;

export const TestButton = styled.button`
  max-width: 300px;
  width: ${(p) => (p.obj.width ? p.obj.width : "50px")};
  height: ${(p) => (p.obj.height ? p.obj.height : "20px")};
  border-radius: ${(p) => (p.obj.border_radius ? p.obj.border_radius : "0px")};
  background-color: ${(p) => (p.obj.background ? p.obj.background : "#eee")};
  color: ${(p) => (p.obj.color ? p.obj.color : "#000")};
  padding: ${(p) => (p.obj.padding ? p.obj.padding : "0")};
  border-width: ${(p) => (p.obj.border_width ? p.obj.border_width : "1px")};
  border-style: ${(p) => (p.obj.border_style ? p.obj.border_style : "solid")};
  border-color: ${(p) => (p.obj.border_color ? p.obj.border_color : "#000")};
  font-size: ${(p) => (p.obj.font_size ? p.obj.font_size : "1.4rem")};
  font-weight: ${(p) =>
    p.obj.font_size ? Number(p.obj.font_weight) : "normal"};
  box-shadow: ${(p) =>
    p.obj.box_shadow ? p.obj.box_shadow : "0px 0px 0px 0px #000"};
  box-sizing: content-box;
  cursor: default;
`;

export const TestInput = styled.input`
  max-width: 300px;
  min-width: 150px;
  min-height: 25px;
  width: ${(p) => (p.obj.width ? p.obj.width : "150px")};
  height: ${(p) => (p.obj.height ? p.obj.height : "20px")};
  border-radius: ${(p) => (p.obj.border_radius ? p.obj.border_radius : "0px")};
  background-color: ${(p) => (p.obj.background ? p.obj.background : "#eee")};
  color: ${(p) => (p.obj.color ? p.obj.color : "#000")};
  padding: ${(p) => (p.obj.padding ? p.obj.padding : "0 10px")};
  border-width: ${(p) => (p.obj.border_width ? p.obj.border_width : "1px")};
  border-style: ${(p) => (p.obj.border_style ? p.obj.border_style : "solid")};
  border-color: ${(p) => (p.obj.border_color ? p.obj.border_color : "#000")};
  font-size: ${(p) => (p.obj.font_size ? p.obj.font_size : "1.4rem")};
  font-weight: ${(p) =>
    p.obj.font_size ? Number(p.obj.font_weight) : "normal"};
  box-shadow: ${(p) =>
    p.obj.box_shadow ? p.obj.box_shadow : "0px 0px 0px 0px #000"};
  outline: none;
  cursor: default;
  box-sizing: content-box;
`;

export const TestCard = styled.button`
  max-width: 300px;
  max-height: 300px;
  width: ${(p) => (p.obj.width ? p.obj.width : "150px")};
  height: ${(p) => (p.obj.height ? p.obj.height : "150px")};
  border-radius: ${(p) => (p.obj.border_radius ? p.obj.border_radius : "8px")};
  background-color: ${(p) => (p.obj.background ? p.obj.background : "#eee")};
  color: ${(p) => (p.obj.color ? p.obj.color : "#000")};
  padding: ${(p) => (p.obj.padding ? p.obj.padding : "0")};
  border-width: ${(p) => (p.obj.border_width ? p.obj.border_width : "1px")};
  border-style: ${(p) => (p.obj.border_style ? p.obj.border_style : "solid")};
  border-color: ${(p) => (p.obj.border_color ? p.obj.border_color : "#000")};
  font-size: ${(p) => (p.obj.font_size ? p.obj.font_size : "1.4rem")};
  font-weight: ${(p) =>
    p.obj.font_size ? Number(p.obj.font_weight) : "normal"};
  box-shadow: ${(p) =>
    p.obj.box_shadow ? p.obj.box_shadow : "0px 0px 0px 0px #000"};
  box-sizing: content-box;
  cursor: default;
`;

export const TestBoxShadow = styled.button`
  max-width: 300px;
  max-height: 300px;
  width: ${(p) => (p.obj.width ? p.obj.width : "150px")};
  height: ${(p) => (p.obj.height ? p.obj.height : "150px")};
  border-radius: ${(p) => (p.obj.border_radius ? p.obj.border_radius : "8px")};
  border: none;
  background-color: #fff;

  box-shadow: ${(p) =>
    p.obj.box_shadow
      ? p.obj.box_shadow
      : " 0px 2px 8px 0px rgba(99, 99, 99, 0.2)"};
  cursor: default;
`;

export const HandleStyleBox = styled.form`
  flex: 1;
  background-color: #f7f4f4;
  padding: 15px 20px;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .style-top {
    .category-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 20px;
      .category {
        flex: 1; //반응형 할 때 따로 수정
        height: 30px;
        border: 1px solid ${theme.color.main};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        background-color: ${theme.color.main};
        color: #000;
        transition: ${theme.transition.default};
        font-family: TheJamsil2Light;
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
          background-color: ${theme.color.sub};
        }
      }
    }
    .form {
      display: flex;
      flex-direction: column;
      /* align-items: end; */
      justify-content: end;
      gap: 10px;
    }
  }
  .style-btn {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
