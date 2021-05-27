import styled from "styled-components";

const BottomBlack = ({ isShow, onClick, text }) => {
  return <Container isShow={isShow} onClick={onClick}>{text}</Container>;
};

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.colors.black};
  transition: box-shadow 0.1s linear;
  box-shadow: ${(props) =>
    props.isShow ? "0 -0.5rem 1rem 0.2rem rgba(255, 255, 255, 1)" : "none"};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;

export default BottomBlack;
