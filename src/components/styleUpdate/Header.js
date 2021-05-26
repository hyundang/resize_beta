import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const Header = ({ pageNum, setPageNum }) => {
  return (
    <Container>
      Style Update
      <ContentContainer>
        <ContentText isActive={pageNum === 0} onClick={() => setPageNum(0)}>
          기본정보
        </ContentText>
        <ContentText isActive={pageNum === 1} onClick={() => setPageNum(1)}>
          스타일
        </ContentText>
        <ContentText isActive={pageNum === 2} onClick={() => setPageNum(2)}>
          코디
        </ContentText>
        <ContentText isActive={pageNum === 3} onClick={() => setPageNum(3)}>
          사이즈
        </ContentText>
        <ContentText isActive={pageNum === 4} onClick={() => setPageNum(4)}>
          비용
        </ContentText>
      </ContentContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 9.6rem;
  padding-top: 1rem;
  border-bottom: 0.2rem solid ${({ theme }) => theme.colors.gray_0};
  background-color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.04rem;
  color: ${({ theme }) => theme.colors.black};
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 0.7rem;
  padding: 0 2.2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ContentText = styled.div`
  height: 5rem;
  padding: 0 0.6rem;

  transition: 0.2s;
  ${(props) =>
    props.isActive
      ? css`
          border-bottom: 0.2rem solid ${({ theme }) => theme.colors.black};
          color: ${({ theme }) => theme.colors.black};
        `
      : css`
          color: ${({ theme }) => theme.colors.gray_2};
        `};

  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.035rem;
  line-height: 6rem;
`;
