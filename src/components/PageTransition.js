import React, { ReactNode } from "react";
import Link from "next/link";
import { Transition, TransitionGroup } from "react-transition-group";
import { useRouter } from "next/router";

const TIMEOUT = 300;
const getTransitionStyles = {
  entering: {
    position: "absolute",
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};
// entering: 렌더 되기 전 상태, entered: 렌더 후 상태, exiting: 화면에서 사라질 때

const PageTransition = ({ children, type, pagenum }) => {
  const router = useRouter();

  return (
    <>
      <div>
        <Link href="/">
          <a>HOME</a>
        </Link>
        <Link href="/mypage">
          <a>MY_PAGE</a>
        </Link>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </div>
      <TransitionGroup style={{ position: "relative" }}>
        <Transition
          key={type === "app" ? router.pathname : pagenum}
          timeout={{
            enter: TIMEOUT,
            exit: TIMEOUT,
          }}
        >
          {(status) => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </Transition>
      </TransitionGroup>
    </>
  );
};

export default PageTransition;
