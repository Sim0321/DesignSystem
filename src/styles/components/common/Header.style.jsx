import styled, { css } from "styled-components";
import { theme } from "./../../theme";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  font-size: 1.5rem;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    font-family: "BMJua";
    font-size: 2.6rem;
    cursor: pointer;
    width: 210px;
  }

  .right {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 40px;
    svg {
      width: 25px;
      height: 25px;
      cursor: pointer;
      position: absolute;
      left: 0;
    }

    .auth {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      font-size: 1.4rem;
      transition: all 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 10px;
      background-color: ${theme.color.backGround};
      box-shadow: 0px 0px 0px 0 #ddd;
      cursor: pointer;
      font-family: TheJamsil3Regular;

      &:hover {
        box-shadow: 0px 0px 8px 0px #abaaaa;
      }
    }
  }
`;

export const SearchBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: end;
  border-bottom: 1px solid;

  ${({ expand }) => {
    switch (expand) {
      case "default":
        return css`
          width: 420px;
          display: none;
        `;
      case "expand":
        return css`
          animation: expandInput 1s ease-in-out forwards;
        `;
      case "decrease":
        return css`
          animation: decreaseInput 1s ease-in-out forwards;
        `;
    }
  }}

  input {
    width: 100%;
    padding: 0 15px;
    font-size: 1.6rem;
    display: ${(p) => p.expand === "decrease" && "none"};
  }

  @keyframes expandInput {
    from {
      width: 0;
    }
    to {
      width: 420px;
    }
  }

  @keyframes decreaseInput {
    from {
      width: 420px;
    }
    to {
      width: 0px;
    }
  }
`;
