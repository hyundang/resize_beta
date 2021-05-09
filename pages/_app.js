import "../styles/globals.css";
// recoil
import { RecoilRoot } from "recoil";
// theme
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
// for rendering when routing
import PageTransition from "../src/components/PageTransition";

function Resize({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <PageTransition type="app">
          <Component {...pageProps} />
        </PageTransition>
      </RecoilRoot>
    </ThemeProvider>
  );
}

export default Resize;
