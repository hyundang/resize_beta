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
}) => {
  const props = {
    isNoneGone: isNoneGone,
    isOne: isOne,
    isLike: isLike,
    isBig: isBig,
  };
  const [isNoneClick, setIsNoneClick] = useState(false);

  if (!props.isNoneGone) {
    useEffect(() => {
      data.includes("none") ? setIsNoneClick(true) : setIsNoneClick(false);
    }, []);

    useEffect(() => {
      if (isNoneClick) setData(["none"]);
    }, [isNoneClick]);
  }

  return (
    <>
      <Container>
        {items.map((item, idx) => {
          return (
            <ItemBox
              key={idx}
              id={item.text != undefined ? item.text : idx}
              src={item.src}
              text={item.text}
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
  width: 100%;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;
  align-items: flex-start;
  row-gap: 2.4rem;
  justify-content: space-between;
`;


const ItemBox = ({
  id,
  src,
  text,
  data,
  setData,
  props,
  setIsNoneClick,
}) => {
  const [isClick, setIsClick] = useState(false);

  const handleImgClick = () => {
    if (!props.isOne) {
      if (data.includes("none")) {
        setData(data.filter((item) => item !== "none").concat([id]));
        setIsNoneClick(false);
      } else {
        setData(data.concat([id]));
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
        width={90}
        height={props.isBig ? 180 : 90}
        onClick={handleImgClick}
      />
      <ItemHover
        isClick={isClick}
        isBig={props.isBig}
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
          height: 18rem;
          border-radius: 1rem;
        `
      : css`
          height: 9rem;
          border-radius: 0.5rem;
        `};
  width: 9rem;
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
      setData([]);
    } else {
      setCheckedList([0]);
      setIsClick(true);
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
