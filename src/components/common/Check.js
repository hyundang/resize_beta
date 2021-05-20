import styled, { css } from "styled-components";

const Check = ({ id, checkedList, handleCheckClick, text }) => {
  return (
    <CheckContainer className="check" id={id} onClick={handleCheckClick}>
      <StyledCheck
        id={id}
        checked={
          id === "check_all"
            ? checkedList.length === 3
              ? true
              : false
            : checkedList.includes(Number(`${id}`))
            ? true
            : false
        }
        onClick={handleCheckClick}
      >
        <Icon id={id} viewBox="0 0 24 24">
          <polyline
            id={id}
            points="18 8 10 16 6 11"
            onClick={handleCheckClick}
          />
        </Icon>
      </StyledCheck>
      <CheckText id={id} onClick={handleCheckClick}>
        {text}
      </CheckText>
    </CheckContainer>
  );
};

export default Check;

const CheckContainer = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.svg`
  fill: none;
  stroke-width: 0.2rem;
  stroke: ${({ theme }) => theme.colors.gray_1};
`;

const StyledCheck = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;

  display: inline-block;

  transition: all 0.2s;

  ${(props) =>
    props.checked
      ? css`
          border: none;
          background-color: ${({ theme }) => theme.colors.black};
          ${Icon} {
            stroke: ${({ theme }) => theme.colors.white};
          }
        `
      : css`
          border: solid 0.1rem ${({ theme }) => theme.colors.gray_1};
          background-color: ${({ theme }) => theme.colors.white};
          ${Icon} {
            stroke: ${({ theme }) => theme.colors.gray_1};
          }
        `}
`;

const CheckText = styled.span`
  height: 2rem;
  margin-left: 1rem;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colors.black};
`;
