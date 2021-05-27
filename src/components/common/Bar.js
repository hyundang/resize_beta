import styled from "styled-components";

const Bar = ({ pageNum, maxNum }) => {
  return (
    <Container>
      <Inner pageNum={pageNum} maxNum={maxNum} />
    </Container>
  );
};

export default Bar;

const Container = styled.div`
  position: fixed;
  left: 2.5%;
  top: 8.7rem;
  z-index: 5;

  width: 95%;
  height: 0.7rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.gray_2};
  box-shadow: 0 0.5rem 1rem 0.5rem rgba(255, 255, 255, 1);

  display: flex;
  align-items: flex-start;
`;

const Inner = styled.div`
  position: fixed;
  left: 2.5%;
  top: 8.7rem;
  z-index: 5;

  transition: 0.2s;
  width: ${(props) => (95 * props.pageNum) / props.maxNum}%;
  height: 0.7rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.black};
`;
