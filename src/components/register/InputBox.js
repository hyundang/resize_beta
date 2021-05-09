import styled from "styled-components";

const InputBox = styled.input`
  width: 100%;
  height: 2.65rem;
  padding: 0 0 0.65rem 0;
  border: none;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.gray_0};

  outline: none;

  font-size: 1.4rem;
  font-family: "Noto Sans KR";
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_2};
  }

  &:focus {
    border-bottom: solid 0.1rem ${({ theme }) => theme.colors.gray_2};
  }
`;

export default InputBox;
