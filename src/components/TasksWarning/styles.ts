import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 66px;
`;
export const Heading2 = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin-top: 80px;
`;

export const Button = styled.button`
  margin-top: 78px;
  background-color: #236fe2;
  font-weight: 400;
  color: #ffffff;
  padding: 0 2em;
  height: 40px;
  border: none;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  &:focus {
    border: 2px solid #abbdd9;
  }
`;
