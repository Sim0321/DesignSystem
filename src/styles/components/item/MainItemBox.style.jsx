import styled from "styled-components";
import { theme } from "../../theme";

export const MainItem = styled.div`
  width: 49%;
  min-height: 140px;
  border: 1px solid ${theme.color.gray};
  margin-bottom: 24px;
  border-radius: 8px;
  transition: ${theme.transition.default};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  &:nth-child(odd) {
    float: left;
  }
  &:nth-child(even) {
    float: right;
  }

  .item-header {
    padding: 8px;
    font-size: 1.8rem;
    background-color: #fff;
    position: absolute;
    left: 10px;
    top: -17px;
    transition: ${theme.transition.default};
  }
  .item-body {
    padding: 10px 25px;
    height: 100%;
  }

  &:hover {
    transform: scale(1.01);
    box-shadow: ${theme.boxShadow.item};
  }
  &:hover .item-header {
    font-size: 2rem;
  }
  &:hover svg {
    opacity: 1;
  }
`;
