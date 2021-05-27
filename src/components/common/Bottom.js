import React, { useState } from "react/cjs/react.development";
import styled, { css } from "styled-components";

const Bottom = ({
  isShow,
  isActive,
  onlyNext,
  isSubmit,
  onBackClick,
  onNextClick,
}) => {
  return (
    <Container isShow={isShow}>
      {onlyNext ? (
        <div style={{ width: "1px" }} />
      ) : (
        <Text onClick={onBackClick}>Back</Text>
      )}
      <BtnContainer
        isActive={isActive}
        onClick={isActive ? onNextClick : () => {}}
      >
        <Text style={{ borderBottom: "none" }}>
          {isSubmit ? "Submit" : "Next"}
        </Text>
      </BtnContainer>
    </Container>
  );
};

export default Bottom;

const Container = styled.div`
  position: fixed;
  bottom: -1px;
  z-index: 5;

  width: 100%;
  height: 8.4rem;
  padding: 0 2.4rem;
  background-color: ${({ theme }) => theme.colors.white};
  transition: box-shadow 0.1s linear;
  box-shadow: ${(props) =>
    props.isShow ? "0 -0.5rem 1rem 0.2rem rgba(0, 0, 0, 0.1)" : "none"};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.div`
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.black};
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;

const BtnContainer = styled.div`
  width: 8.4rem;
  height: 4.8rem;
  border-radius: 0.3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;
  ${(props) =>
    props.isActive
      ? css`
          background-color: ${({ theme }) => theme.colors.black};
          ${Text} {
            color: ${({ theme }) => theme.colors.white};
          }
        `
      : css`
          background-color: ${({ theme }) => theme.colors.gray_0};
        `};
`;
