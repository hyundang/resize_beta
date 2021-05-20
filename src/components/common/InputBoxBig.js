import styled from "styled-components";

const InputBoxBig = ({text, value, onChange}) => {
  return (
    <Wrap
      type="text"
      placeholder={text}
      value={value}
      onChange={onChange}
      maxLength={500}
    />
  );
};

export default InputBoxBig;

const Wrap = styled.textarea`
  width: 100%;
  height: 12.5rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_2};
  background-color: ${({ theme }) => theme.colors.white};

  font-family: "Noto Sans KR";
  font-size: 1.4rem;
  font-weight:400;
  resize: none;
  color: ${({ theme }) => theme.colors.gray_4};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_2};
  }
  &:focus {
    outline: none;
    border: solid 0.1rem ${({ theme }) => theme.colors.gray_4};
  }
`;
