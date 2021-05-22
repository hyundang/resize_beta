import React from "react";
import styled, { css } from "styled-components";
// assets
import ic_delete from "../../assets/icons/ic-delete.svg";
import ic_plus from "../../assets/icons/ic-plus.svg";

const Tags = ({ qtext, datas }) => {
  return (
    <>
      <Title>{qtext}</Title>
      <TagContainer>
        <TagBox isFirst={true}>
          <img src={ic_plus} />
          {qtext.replace("싫어하는 ", "") + " 추가하기"}
        </TagBox>
        {datas.map((item, idx) => {
          return (
            <TagBox key={idx} id={idx}>
              {item}
              <img
                src={ic_delete}
                style={{ width: "1.5rem", marginLeft: "0.7rem" }}
              />
            </TagBox>
          );
        })}
      </TagContainer>
    </>
  );
};

export default Tags;

const Title = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;

const TagContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const TagBox = styled.div`
  height: 4rem;
  margin-right: 0.4rem;
  margin-bottom: 1rem;
  padding: 0 1.2rem;
  ${(props) =>
    props.isFirst
      ? css`
          border: none;
          background-color: ${({ theme }) => theme.colors.gray_1};
        `
      : css`
          border: 0.1rem solid ${({ theme }) => theme.colors.gray_1};
          background-color: ${({ theme }) => theme.colors.white};
        `};
  border-radius: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  color: ${({ theme }) => theme.colors.black};
`;
