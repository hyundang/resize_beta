import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom, Options } from "../common";
// for figuring the input data property
import { props } from "../../lib/data/properties";

const PagePayment = ({
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

  // for checking bottom btn active
  useEffect(() => {
    console.log(inputData);
    for (let i = 0; i < props.payment.length; i++) {
      if (inputData[props.payment[i]].length === 0) {
        setIsActive(false);
        break;
      } else {
        setIsActive(true);
      }
    }
  }, [inputData]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // for bottom shadow
    const option = {
      root: viewport.current,
      threshold: 1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        entry.isIntersecting ? setIsShow(false) : setIsShow(true);
      });
    };
    const io = new IntersectionObserver(handleIntersection, option);
    io.observe(target.current);
  }, []);

  return (
    <>
      <Container className="container" ref={target}>
        <Text
          style={{
            fontSize: "1.6rem",
            fontWeight: "700",
            letterSpacing: "-0.04rem",
            marginBottom: "3.2rem",
          }}
        >
          평소 각 품목에 얼마를 지불하시나요?
        </Text>
        {options.map((item, idx) => {
          return (
            <Options
              options={item.options}
              text={item.text}
              inputData={inputData}
              setInputData={setInputData}
              property={props.payment[idx]}
            />
          );
        })}
        <div style={{ height: "9.2rem" }} />
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

export default PagePayment;

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
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
