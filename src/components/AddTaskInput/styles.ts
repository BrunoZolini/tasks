import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding-right: 2px;
  background-color: #2a2c31;
  border-radius: 30px;
  margin-top: 26px;
  width: 100%;
  height: 40px;
  @media (min-width: 762px) {
    max-width: 334px;
  }
  &:focus-within {
    outline: 1px solid #9a9b9e;
  }
`;
export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  color: #ffffff;
  height: 40px;
  border: none;
  padding-left: 15px;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  cursor: auto;
  &::placeholder {
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
  outline: none;
  cursor: pointer;
  &:focus {
    border: 2px solid #abbdd9;
  }
`;
