import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    width: 45px;
    height: 45px;
    animation: spin 1s linear infinite;
  }

  p {
    font-size: 1.8rem;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
