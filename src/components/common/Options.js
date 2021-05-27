import styled from "styled-components";
// components
import { Check } from ".";

const Options = ({ options, inputData, setInputData, text, property }) => {
  const handleCheckClick = (e) => {
    inputData[property].includes(Number(e.target.id))
      ? setInputData({
          ...inputData,
          [property]: inputData[property].filter(
            (item) => item !== Number(e.target.id)
          ),
        })
      : setInputData({
          ...inputData,
          [property]: inputData[property].concat([Number(e.target.id)]),
        });
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
  margin-bottom: 2.4rem;

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
