import styled from "styled-components";

export const SideBar = styled.div`
  width: 260px;
  height: calc(100vh - 112px);
  padding: 0 16px;
  .title {
    font-size: 2rem;
    margin: 10px 0;
    padding: 6px;
    font-family: TheJamsil5Bold;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .folder {
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* border: 1px solid; */
  }
`;
