import styled from "styled-components";

export const Form = styled.form`
  background-color: #2a2c31;
  border-radius: 30px;
  margin-top: 26px;
  width: 310px;
`;
export const Input = styled.input`
  background-color: transparent;
  color: #ffffff;
  width: 240px;
  height: 40px;
  border: none;
  padding-left: 15px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  cursor: auto;
  ::placeholder {
    color: #9a9b9e;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  background-color: #236fe2;
  color: #ffffff;
  font-weight: 700;
  width: 70px;
  height: 36px;
  border: none;
  border-radius: 30px;
  outline: inherit;
  cursor: pointer;
`;
