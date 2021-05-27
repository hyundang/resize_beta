import { css } from "styled-components";

const colors = {
  white: "#ffffff",
  black: "#191919",
  gray_0: '#F1F1F1', 
  gray_1: '#dddddd',
  gray_2: '#b7b7b7',
  gray_3: "#707070",
  gray_4: "#767676",
  blue: '#001191',
  red: '#D94B4B',
};
// how to use : ${({ theme }) => theme.colors.cookieOrange};

const sizes = {
  desktop: 102.4,
  tablet: 76.8,
  mobile: 32,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}rem) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
// how to use : ${({ theme }) => theme.media.phone` mobile ver code comes here `;

const theme = {
  colors,
  media,
};

export default theme;
