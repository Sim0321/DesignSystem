import styled from "styled-components";
import { theme } from "../theme";

export const NotHaveComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .main-desc {
    font-size: 2.1rem;
    font-family: TheJamsil4Medium;
  }
  .sub-desc {
    margin-top: 20px;
    font-size: 1.6rem;
    font-family: TheJamsil4Medium;
    margin-bottom: 50px;
  }
`;

export const HaveComponent = styled.div`
  width: 100%;
  height: 100%;

  .header {
    height: 72px;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 30px;
    border-bottom: 1px solid ${theme.color.gray};
    font-size: 2.8rem;
    margin-bottom: 20px;
  }

  .section {
    gap: 24px;
    position: relative;
    height: calc(100% - 75px);
    overflow-y: auto;
    padding: 15px 12px 0;

    &::-webkit-scrollbar {
      width: 6px;
      margin-left: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background: #697586;
      height: 80%;
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      background: #fff;
    }
  }
`;

export const NoTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;

  p {
    animation: scaleFont 3s linear infinite;
  }

  @keyframes scaleFont {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;
