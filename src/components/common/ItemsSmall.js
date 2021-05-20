import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ItemImg from "next/image";
// assets
import ic_cancel from "../../assets/icons/btn-dislike-select.svg";

const ItemsSmall = ({ data, setData, items, isNoneGone, isOne }) => {
  return (
    <Container>
      {items.map((item, idx) => {
        return (
          <ItemBox
            key={idx}
            id={idx}
            src={item.src}
            text={item.text}
            data={data}
            setData={setData}
            last={items.length - 1}
            isNoneGone={isNoneGone}
            isOne={isOne}
          />
        );
      })}
    </Container>
  );
};

export default ItemsSmall;

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 33% 33% 33%;
  justify-items: center;
  align-items: flex-start;
  row-gap: 2.4rem;
  justify-content: space-between;
`;

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

  width: 9rem;
  height: 9rem;
  border-radius: 0.5rem;
  background-color: rgba(0, 0, 0, 0.4);

  display: ${(props) => (props.isClick ? "flex" : "none")};
  align-items: center;
  justify-content: center;
`;

const ItemBox = ({ id, src, text, data, setData, last, isNoneGone, isOne }) => {
  const [isClick, setIsClick] = useState(false);

  const handleItemClick = () => {
    if (!isOne) {
      text === "없음" ? setData([id]) : setData(data.concat([id]));
    } else {
      setData(id);
    }
  };

  const handleCancelClick = () => {
    if (!isOne) {
      setData(data.filter((item) => id !== item));
    } else {
      setData(-1);
    }
  };

  // for '없음' click
  useEffect(() => {
    // figuring the choice item
    if (!isOne) {
      // for multiple choice
      data.includes(id) ? setIsClick(true) : setIsClick(false);
    } else {
      // for single choice
      data === id ? setIsClick(true) : setIsClick(false);
    }

    // '없음' 항목 존재하는 경우
    if (!isNoneGone) {
      if ((data.length > 1) & data.includes(last))
        setData(data.filter((item) => last !== item));
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
        // loading="lazy"
        height={90}
        width={90}
        onClick={handleItemClick}
      />
      <ItemHover isClick={isClick} onClick={handleCancelClick}>
        <img src={ic_cancel} />
      </ItemHover>
      <style jsx global>
        {`
          .item_img {
            border-radius: 0.5rem;
          }
        `}
      </style>
      {text && <ItemText>{text}</ItemText>}
    </div>
  );
};
