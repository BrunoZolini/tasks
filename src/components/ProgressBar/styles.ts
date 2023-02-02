import styled from "styled-components";

export const Container = styled.div`
  margin-top: 24px;
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProgressBorder = styled.div`
  width: 100%;
  margin-top: 2px;
  border: 1px solid #393B41;
  border-radius: 5px;
  height: 10px;
  padding: 1px;
`;

interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  width: ${(props) => props.percentage}%;
  background-color: #236FE2;
  height: 6px;
  border-radius: 5px;
  transition-duration: 500ms;
`;