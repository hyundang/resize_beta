import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ItemImg from "next/image";
// components
import { Check } from ".";
// assets
import ic_cancel from "../../assets/icons/btn-dislike-select.svg";
import ic_select from "../../assets/icons/btn-like-select.svg";

const Items = ({
  data,
  setData,
  items,
  text,
  isNoneGone,
  isOne,
  isLike,
  isBig,
  isTwo,
}) => {
  const props = {
    isNoneGone: isNoneGone,
    isOne: isOne,
    isLike: isLike,
    isBig: isBig,
    isTwo: isTwo,
  };
  const [isNoneClick, setIsNoneClick] = useState(false);

  if (!props.isNoneGone) {
    useEffect(() => {
      data.length === 0 ? setIsNoneClick(true) : setIsNoneClick(false);
    }, []);

    useEffect(() => {
      if (isNoneClick) setData([]);
    }, [isNoneClick]);
  }

  return (
    <>
      <Container isTwo={props.isTwo}>
        {items.map((item, idx) => {
          return (
            <ItemBox
              key={idx}
              id={idx}
              src={item.src}
              text={item.label}
              data={data}
              setData={setData}
              props={props}
              setIsNoneClick={setIsNoneClick}
            />
          );
        })}
      </Container>
      {!isNoneGone && (
        <CheckBox
          isClick={isNoneClick}
          setIsClick={setIsNoneClick}
          setData={setData}
          text={text.replace("있으신가요?", "없음")}
        />
      )}
    </>
  );
};

export default Items;

const Container = styled.div`
  ${(props) =>
    props.isTwo
      ? css`
          grid-template-columns: 1fr 1fr;
        `
      : css`
          grid-template-columns: 33% 33% 33%;
        `};

  width: 100%;

  display: grid;
  justify-items: center;
  align-items: flex-start;
  row-gap: 2.4rem;
  justify-content: space-between;
`;

const ItemBox = ({ id, src, text, data, setData, props, setIsNoneClick }) => {
  const [isClick, setIsClick] = useState(false);

  const handleImgClick = () => {
    if (!props.isOne) {
      if (data.includes(-1) || data.length === 0) {
        setData([id]);
        setIsNoneClick(false);
      } else {
        let sorted = data.concat([id]);
        setData(sorted.sort());
      }
    } else setData(id);
  };

  // for '없음' click
  useEffect(() => {
    // figuring the choice item
    if (!props.isOne) {
      // for multiple choice
      data.includes(id) ? setIsClick(true) : setIsClick(false);
    } else {
      // for single choice
      data === id ? setIsClick(true) : setIsClick(false);
    }
  }, [data]);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <ItemImg
        className="item_img"
        src={src}
        priority={true}
        // loading="eager"
        // loading="lazy"
        width={props.isTwo ? 135 : 90}
        height={props.isBig ? 180 : props.isTwo ? 135 : 90}
        onClick={handleImgClick}
      />
      <ItemHover
        isClick={isClick}
        isBig={props.isBig}
        isTwo={props.isTwo}
        onClick={() =>
          !props.isOne
            ? setData(data.filter((item) => id !== item))
            : setData(-1)
        }
      >
        <img src={props.isLike ? ic_select : ic_cancel} />
      </ItemHover>
      {props.isBig ? (
        <style jsx global>
          {`
            .item_img {
              border-radius: 1rem;
            }
          `}
        </style>
      ) : (
        <style jsx global>
          {`
            .item_img {
              border-radius: 0.5rem;
            }
          `}
        </style>
      )}
      {text && <ItemText>{text}</ItemText>}
    </div>
  );
};

const ItemText = styled.div`
  margin-top: 1rem;
  width: 100%;

  font-size: 1.35rem;
  font-weight: 400;
  letter-spacing: -0.035rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray_4};
  white-space: pre-wrap;
`;

const ItemHover = styled.div`
  position: absolute;
  z-index: 2;

  ${(props) =>
    props.isBig
      ? css`
          width: 9rem;
          height: 18rem;
          border-radius: 1rem;
        `
      : props.isTwo
      ? css`
          width: 13.5rem;
          height: 13.5rem;
          border-radius: 0.5rem;
        `
      : css`
          width: 9rem;
          height: 9rem;
          border-radius: 0.5rem;
        `};

  background-color: rgba(0, 0, 0, 0.4);

  display: ${(props) => (props.isClick ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const CheckBox = ({ isClick, setIsClick, setData, text }) => {
  const [checkedList, setCheckedList] = useState([]);

  useEffect(() => {
    isClick ? setCheckedList([0]) : setCheckedList([]);
  }, [isClick]);

  const handleCheckClick = () => {
    if (isClick) {
      setCheckedList([]);
      setIsClick(false);
      setData([-1]);
    } else {
      setCheckedList([0]);
      setIsClick(true);
      setData([]);
    }
  };

  return (
    <CheckContainer>
      <Check
        id={0}
        checkedList={checkedList}
        handleCheckClick={handleCheckClick}
        text={text}
      />
    </CheckContainer>
  );
};

const CheckContainer = styled.div`
  width: 100%;
  height: 4.8rem;
  margin-top: 3.2rem;
  padding: 0 1.2rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
`;
