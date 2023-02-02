import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  height: 100%;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  @media (min-width: 762px) {
    max-width: 334px;
  }
`;

export const Heading2 = styled.h2`
  font-size: 16px;
  margin-top: 24px;
  font-weight: 600;
`;

export const TasksWrapper = styled.div`
  margin-top: 10px;
`;