import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
// components
import { Bottom, Items } from "../common";

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
    (inputData.face !== -1) &
    (inputData.skin !== -1) &
    (inputData.shoulder !== -1)
      ? setIsActive(true)
      : setIsActive(false);
  }, [inputData]);

  useEffect(() => {
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
        <Text>얼굴형이 어떠신가요?</Text>
        <Items
          items={options.face}
          data={inputData.face}
          setData={(data) =>
            setInputData({
              ...inputData,
              face: data,
            })
          }
          isNoneGone={true}
          isOne={true}
          isLike={true}
        />
        <div style={{ height: "4rem" }} />
        <Text>피부색이 어떠신가요?</Text>
        <Items
          items={options.skin}
          data={inputData.skin}
          setData={(data) =>
            setInputData({
              ...inputData,
              skin: data,
            })
          }
          isNoneGone={true}
          isOne={true}
          isLike={true}
        />
        <div style={{ height: "4rem" }} />
        <Text>어깨모양이 어떠신가요?</Text>
        <Items
          items={options.shoulder}
          data={inputData.shoulder}
          setData={(data) =>
            setInputData({
              ...inputData,
              shoulder: data,
            })
          }
          isNoneGone={true}
          isOne={true}
          isLike={true}
        />
        <div style={{ marginTop: "7.2rem", height: "1px" }} ref={target} />
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
  margin-bottom: 2.4rem;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
`;
