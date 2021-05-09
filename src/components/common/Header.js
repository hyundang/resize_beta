import styled from "styled-components";

const Header = styled.div`
  position: fixed;
  top: 0;
  z-index: 5;

  width: 100%;
  height: 5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0.1rem 0.5rem 0.5rem rgba(255, 255, 255, 1);

  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 1.6rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

export default Header;
