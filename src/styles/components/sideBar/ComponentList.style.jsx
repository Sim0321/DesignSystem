import styled from "styled-components";
import { theme } from "../../theme";

export const ComponentTitle = styled.div`
  display: flex;
  flex-direction: column;
  .category {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px 10px 24px;
    border-radius: 8px;
    font-size: 1.4rem;
    cursor: pointer;
    transition: ${theme.transition.default};
    &:hover {
      background-color: ${theme.color.main};
      color: ${theme.color.mainActive};
    }
    svg {
      transform: translateY(0);
    }
    &:hover svg {
      animation: downInfinite 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
  }
  .active {
    background-color: #ede7f6;
  }

  .component_name-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    border-left: 1px solid #eeeeee;
    width: calc(100% - 30px);
    margin: 0 0 0 auto;

    .list {
      margin-top: 4px;
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 8px 16px;
      transition: ${theme.transition.default};
      cursor: pointer;
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #000;
        transition: ${theme.transition.default};
      }
      .name {
        font-size: 1.4rem;
      }
      &:hover {
        color: ${theme.color.mainHover};
      }
      &:hover .dot {
        background-color: ${theme.color.mainHover};
      }
    }
  }

  @keyframes downInfinite {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(5px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;
