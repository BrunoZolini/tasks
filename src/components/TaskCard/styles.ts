import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  width: 310px;
  height: 50px;
  margin-top: 8px;
`;
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 310px;
  height: 50px;
  padding: 10px;
  background-color: #2a2c31;
  border-radius: 10px;
  :hover {
    background-color: #373a44;
  }
`;

export const Delete = styled.button`
  position: absolute;
  border: none;
  outline: inherit;
  background-color: transparent;
  margin: 14px;
`;

export const Task = styled.p`
  font-size: 16px;
  font-weight: 300;
  margin-left: 44px;
`;

export const Check = styled.img`
  width: 24px;
`;

export const Invisible = styled.div`
  padding: 12px;
`;
