import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Check, Bottom, Radio } from "../common";
// assets

const Page_1 = ({
  options,
  inputData,
  setInputData,
  onBackClick,
  onNextClick,
}) => {
  // for bottom btn active
  const [isActive, setIsActive] = useState(false);
  // for bottom shadow
  const viewport = useRef(null);
  const target = useRef(null);
  const [isShow, setIsShow] = useState(true);

  // for check btn click
  const handleCheckClick = (e) => {
    const id = Number(e.target.id);
    setInputData({
      ...inputData,
      purpose: inputData.purpose.includes(id)
        ? inputData.purpose.filter((item) => id !== item)
        : inputData.purpose.concat([id]),
    });
  };

  // for radio btn click
  const handleRadioChange = (e) => {
    setInputData({
      ...inputData,
      age: Number(e.target.id),
    });
  };

  // for checking bottom btn active
  useEffect(() => {
    (inputData.purpose.length !== 0) & (inputData.age !== -1)
      ? setIsActive(true)
      : setIsActive(false);
  }, [inputData]);

  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);

    // for bottom shadow
    const option = {
      root: viewport.current,
      threshold: 1,
    };
    const handleIntersection = ([entry], observer) => {
      entry.isIntersecting? setIsShow(false) : setIsShow(true)
    };
    const io = new IntersectionObserver(handleIntersection, option);
    io.observe(target.current);
  }, []);

  return (
    <>
      <Container className="container">
        <Text>어떤 목적으로 리사이즈에 방문하게 되셨나요?</Text>
        {options[1].map((item, idx) => {
          return (
            <CheckBox
              className="checkbox"
              key={idx}
              id={idx}
              text={item}
              checkList={inputData.purpose}
              handleCheckList={handleCheckClick}
            />
          );
        })}
        <div style={{ height: "4rem" }} />
        <Text>연령대가 어떻게 되시나요?</Text>
        <RadioContainer>
          {options[2].map((item, idx) => {
            return (
              <>
                <Radio
                  className="radiobtn"
                  key={idx}
                  id={idx}
                  value={idx}
                  data={inputData.age}
                  onChange={handleRadioChange}
                  text={item}
                />
                <div style={{ height: "1.6rem" }} />
              </>
            );
          })}
        </RadioContainer>
        <div style={{ marginTop: "5.9rem",height:'1px' }} ref={target}/>
      </Container>
      <Bottom
        ref={viewport}
        className="bottom"
        isShow={isShow}
        isActive={isActive}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
    </>
  );
};

export default Page_1;

const Container = styled.div`
  width: 100%;
  margin-top: 8.7rem;
  padding: 4rem 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  width: 100%;
  margin-bottom: 1.9rem;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
  white-space: pre-wrap;
  word-break: break-all;
`;

const CheckBoxContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-bottom: 0.8rem;
  padding: 1.4rem 1.2rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
`;

const CheckBox = ({ text, id, checkList, handleCheckList }) => {
  return (
    <CheckBoxContainer id={id} onClick={handleCheckList}>
      <Check
        text={text}
        id={id}
        checkedList={checkList}
        handleCheckClick={handleCheckList}
      />
    </CheckBoxContainer>
  );
};

const RadioContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
