import React, { useEffect, useState, useRef } from "react";
import styled, { css } from "styled-components";
// components
import { Bottom, InputBox } from "../common";

// for handle InputBox
const useInput = (inputData, setInputData, property) => {
  const setValue = (str) => {
    setInputData({
      ...inputData,
      [property]: str,
    });
  };
  const value = inputData[property];
  const onChange = (e) => {
    setInputData({
      ...inputData,
      [property]: e.target.value,
    });
  };
  return { value, onChange, setValue };
};

const PageJob = ({
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
  // for handle ect input data
  const inputInd = useInput(inputData, setInputData, "industry_ect");
  const inputTask = useInput(inputData, setInputData, "task_ect");
  // for show industry question
  const [isIndShow, setIsIndShow] = useState(false);
  // for show task question
  const [isTaskShow, setIsTaskShow] = useState(false);

  // for checking bottom btn active
  useEffect(() => {
    console.log(inputData);
    const nothing = [2, 6];
    const single = [4, 5];
    const both = [0, 1, 3];
    if (nothing.includes(inputData.job)) {
      setIsActive(true);
    } else if (single.includes(inputData.job)) {
      inputData.industry === options.industry.length - 1
        ? inputData.industry_ect !== ""
          ? setIsActive(true)
          : setIsActive(false)
        : inputData.industry !== -1
        ? setIsActive(true)
        : setIsActive(false);
    } else {
      inputData.industry === options.industry.length - 1 ||
      inputData.task === options.task.length - 1
        ? (inputData.industry === options.industry.length - 1) &
          (inputData.task === options.task.length - 1)
          ? (inputData.industry_ect !== "") & (inputData.task_ect !== "")
            ? setIsActive(true)
            : setIsActive(false)
          : inputData.industry === options.industry.length - 1
          ? inputData.industry_ect !== ""
            ? setIsActive(true)
            : setIsActive(false)
          : inputData.task_ect !== ""
          ? setIsActive(true)
          : setIsActive(false)
        : (inputData.industry !== -1) & (inputData.task !== -1)
        ? setIsActive(true)
        : setIsActive(false);
    }
  }, [inputData]);

  // for checking industry, task question show
  useEffect(() => {
    const ind = [0, 1, 3, 4, 5];
    const task = [0, 1, 3];
    ind.includes(inputData.job) ? setIsIndShow(true) : setIsIndShow(false);
    task.includes(inputData.job) ? setIsTaskShow(true) : setIsTaskShow(false);
  }, [inputData.job]);

  useEffect(() => {
    // for scroll
    window.scrollTo(0, 0);

    // for bottom shadow
    const option = {
      root: viewport.current,
      threshold: 1,
    };
    const handleIntersection = ([entry], observer) => {
      entry.isIntersecting ? setIsShow(false) : setIsShow(true);
    };
    const io = new IntersectionObserver(handleIntersection, option);
    io.observe(target.current);
  }, []);

  return (
    <>
      <Container className="container">
        <Options
          options={options.job}
          inputData={inputData}
          setInputData={setInputData}
          property="job"
        />
        {isIndShow && (
          <Options
            text="어떤 산업"
            options={options.industry}
            inputData={inputData}
            setInputData={setInputData}
            property="industry"
            input={inputInd}
          />
        )}
        {isTaskShow && (
          <Options
            text="어떤 직무"
            options={options.task}
            inputData={inputData}
            setInputData={setInputData}
            property="task"
            input={inputTask}
          />
        )}
        <div style={{ marginTop: "5.9rem", height: "1px" }} ref={target} />
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

export default PageJob;

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
  margin-bottom: 2.4rem;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const OptionsContainer = styled.div`
  width: 100%;
  margin-bottom: 2.4rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const OptionBox = styled.div`
  ${(props) =>
    props.isClicked
      ? css`
          border: none;
          background-color: ${({ theme }) => theme.colors.black};
          font-weight: 700;
          color: ${({ theme }) => theme.colors.white};
        `
      : css`
          border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
          background-color: ${({ theme }) => theme.colors.white};
          font-weight: 400;
          color: ${({ theme }) => theme.colors.black};
        `};

  width: 46%;
  height: 4.8rem;
  margin-bottom: 1.2rem;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  letter-spacing: -0.03rem;
  text-align: center;
`;

const Options = ({
  text,
  options,
  inputData,
  setInputData,
  property,
  input,
}) => {
  return (
    <>
      <Text>
        {text === undefined ? "직업이 무엇인가요?" : text + "에 종사하시나요?"}
      </Text>
      <OptionsContainer>
        {options.map((item, idx) => {
          return (
            <OptionBox
              key={idx}
              id={idx}
              isClicked={idx === inputData[property]}
              onClick={(e) =>
                setInputData({
                  ...inputData,
                  [property]: Number(e.target.id),
                })
              }
            >
              {item}
            </OptionBox>
          );
        })}
      </OptionsContainer>
      {input !== undefined && inputData[property] === options.length - 1 && (
        <>
          <Text>{text + "에 종사하시나요?"}</Text>
          <InputBox
            placeholder={text + "에 종사하시는지 입력해주세요."}
            type="text"
            input={input}
          />
          <div style={{ height: "4rem" }} />
        </>
      )}
    </>
  );
};
