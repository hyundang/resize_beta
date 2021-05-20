import styled from "styled-components";

const Radio = ({ id, value, data, onChange, text }) => {
  return (
    <Item>
      <InputGender
        type="radio"
        id={id}
        value={value}
        checked={data === value}
        onChange={onChange}
      />
      <RadioBtnLabel />
      <div style={{ marginLeft: "1.2rem" }} id={id} onClick={onChange}>
        {text}
      </div>
    </Item>
  );
};

export default Radio;

const Item = styled.div`
  position: relative;

  margin-right: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

const RadioBtnLabel = styled.label`
  position: absolute;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.gray_4};
`;

const InputGender = styled.input`
  opacity: 0;
  z-index: 1;
  margin: 0;

  width: 2rem;
  height: 2rem;

  &:checked + ${RadioBtnLabel} {
    border: 0.5rem solid ${({ theme }) => theme.colors.black};
  }
`;
