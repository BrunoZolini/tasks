import styled from "styled-components";

export const Container = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 10px;
  background-color: #2a2c31;
  border-radius: 10px;
  user-select: none;
  outline: none;
  &:hover {
    background-color: #373a44;
  }
  &:focus {
    background-color: #373a44;
  }
`;

export const Delete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  background-color: transparent;
  margin-left: 6px;
  border-radius: 4px;
  padding: 2px;
  & > svg {
    fill: #d95656;
  }
  &:focus {
    background-color: #373a44;
  }
`;

export const Task = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-left: 6px;
`;

export const Check = styled.img`
  width: 24px;
  margin-left: auto;
`;

export const Invisible = styled.div`
  padding: 12px;
`;
