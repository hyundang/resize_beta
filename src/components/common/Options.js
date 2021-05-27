import { useState } from "react/cjs/react.development";
import styled from "styled-components";
// components
import { Check, InputBox } from ".";

const Options = ({
  options,
  inputData,
  setInputData,
  text,
  property,
  isEct,
  text_2,
  placeholder,
}) => {
  const handleCheckClick = (e) => {
    let sorted = inputData[property].includes(Number(e.target.id))
      ? inputData[property].filter((item) => item !== Number(e.target.id))
      : inputData[property].concat([Number(e.target.id)]);
    setInputData({
      ...inputData,
      [property]: sorted.sort(),
    });
  };

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setInputData({
      ...inputData,
      [property + "_ect"]: value,
    });
  };

  const setValue = (e) => {
    setInputData({
      ...inputData,
      [property + "_ect"]: e,
    });
  };

  const input = {
    value: inputData[property + "_ect"],
    onChange: onChange,
    setValue: setValue,
  };

  return (
    <>
      <Text>{text}</Text>
      <CheckBoxContainer className="check_box_container">
        {options.map((item, idx) => {
          return (
            <CheckBox
              id={item.value}
              key={idx}
              text={item.label}
              checkedList={inputData[property]}
              handleCheckClick={handleCheckClick}
            />
          );
        })}
      </CheckBoxContainer>
      {isEct & inputData[property].includes(options.length - 1) ? (
        <>
          <Text
            style={{
              fontSize: "1.6rem",
              fontWeight: "700",
              letterSpacing: "-0.04rem",
            }}
          >
            {text_2}
          </Text>
          <InputBox placeholder={placeholder} input={input} type="text" />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Options;

const Text = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 4rem;

  display: grid;
  grid-template-columns: 47% 47%;
  justify-content: space-between;
`;

const CheckBox = ({ id, checkedList, handleCheckClick, text }) => {
  return (
    <CheckContainer className="check_box" id={id} onClick={handleCheckClick}>
      <Check
        id={id}
        checkedList={checkedList}
        handleCheckClick={handleCheckClick}
        text={text}
      />
    </CheckContainer>
  );
};

const CheckContainer = styled.div`
  width: 100%;
  margin-bottom: 1.2rem;
  padding: 1.4rem 1.2rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.colors.white};
`;
