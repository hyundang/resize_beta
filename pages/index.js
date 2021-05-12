import React, { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
// components
import { Header } from "../src/components/common";
// assets
import ic_hamburger from "../src/assets/icons/btn-hamburger.svg";
import ic_exit from "../src/assets/icons/btn-exit.svg";

export default function Home() {
  const ADs = [
    {
      title: "MAISONMARAIS",
      description:
        "2020년 런칭한 여성 컨템포러리 브랜드로, 트렌디하면서 오래 착용할수 있는 옷을 선보입니다.",
      src: "",
    },
    {
      title: "MAISONMARAIS",
      description:
        "2020년 런칭한 여성 컨템포러리 브랜드로, 트렌디하면서 오래 착용할수 있는 옷을 선보입니다.",
      src: "",
    },
    {
      title: "MAISONMARAIS",
      description:
        "2020년 런칭한 여성 컨템포러리 브랜드로, 트렌디하면서 오래 착용할수 있는 옷을 선보입니다.",
      src: "",
    },
    {
      title: "MAISONMARAIS",
      description:
        "2020년 런칭한 여성 컨템포러리 브랜드로, 트렌디하면서 오래 착용할수 있는 옷을 선보입니다.",
      src: "",
    },
  ];
  // for sidemenu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header
        style={{
          padding: "0 0.6rem 0 2.4rem",
          boxShadow: "0 0 0.3rem 0.3rem rgba(0,0,0,0.05)",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <div
            className="left_wrap"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <img
              src=""
              className="logo"
              style={{ width: "3.5rem", height: "3.5rem", background: "black" }}
            />
            <Title>RESIZE</Title>
          </div>
        </Link>
        <div
          className="right_wrap"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <UserName>Heesu</UserName>
          <img
            className="btn_menu"
            src={ic_hamburger}
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </Header>
      <Container>
        {ADs.map((item, idx) => {
          return (
            <AD
              id={`ad_${idx}`}
              key={idx}
              src={item.src}
              title={item.title}
              description={item.description}
            />
          );
        })}
      </Container>
      <MenuBackground
        isOpen={isMenuOpen}
        onClick={(e) => {
          e.stopPropagation();
          setIsMenuOpen(false);
        }}
      />
      <MenuContainer isOpen={isMenuOpen}>
        <img
          src={ic_exit}
          style={{ position: "relative", left: "75%" }}
          onClick={() => setIsMenuOpen(false)}
        />
        <div style={{ marginBottom: "3.2rem" }}>MY STYLE</div>
        <Link href="login">
          <div style={{ marginBottom: "3.2rem" }}>MY PAGE</div>
        </Link>
        <div style={{ marginBottom: "3.2rem" }}>ORDER</div>
        <div style={{ marginBottom: "3.2rem" }}>SHOPPING</div>
        <div style={{ marginBottom: "3.2rem" }}>INVITATION</div>
      </MenuContainer>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  margin-top: 8.7rem;
  padding: 3rem 2.4rem;
`;

const Title = styled.div`
  margin-left: 1.125rem;

  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const UserName = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const ADImg = styled.div`
  position: relative;
  z-index: 1;

  width: 100%;
  height: 18.6rem;
  margin-bottom: 2.4rem;
  background: url(${(props) => props.src}) center center / cover;
  background-color: pink;
`;

const ADTextContainer = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;
  height: 100%;
  padding: 0 1.7rem;
  background: rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const ADTitle = styled.div`
  width: 22.6rem;
  height: 3.7rem;
  margin-bottom: 0.8rem;

  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.075rem;
  color: ${({ theme }) => theme.colors.white};
`;

const ADDesc = styled.div`
  width: 22.8rem;

  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.colors.white};
`;

const AD = ({ title, description, src, id }) => {
  return (
    <ADImg id={id} src={src}>
      <ADTextContainer className="ad_container">
        <ADTitle className="ad_title">{title}</ADTitle>
        <ADDesc className="ad_description">{description}</ADDesc>
      </ADTextContainer>
    </ADImg>
  );
};

const MenuBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  display: ${(props) => (props.isOpen ? "block" : "none")};
  transition: 0.15s;
`;

const fadeIn = keyframes`
  from {
    transform: translate(75%,0);
    opacity: 0;
  }
  to {
    transform: translate(0,0);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: translate(0,0);
    opacity: 1;
  }
  to {
    transform: translate(75%,0);
    opacity: 0;
  }
`;

const MenuContainer = styled.div`
  ${(props) =>
    props.isOpen
      ? css`
          visibility: visible;
          animation: ${fadeIn} 0.2s linear;
        `
      : css`
          visibility: hidden;
          animation: ${fadeOut} 0.2s linear;
        `};
  transition: visibility 0.2s linear;

  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;

  width: 75%;
  height: 100vh;
  padding-left: 3rem;
  background-color: ${({ theme }) => theme.colors.gray_0};
  opacity: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;
