import { FC } from "react";
import { H1, Hint, StyledLink } from "./Intro.element";

const Intro: FC = () => {
  return (
    <>
      <H1>Welcome to Devolon cats test project</H1>
      <Hint>
        Technologies that was used: react, redux-toolkit, react-router-dom and
        styled-component as ui kit.
      </Hint>
      <p>This is first time that i used style-component and test for my app.</p>
      <StyledLink to="/cats">Check Cats App</StyledLink>
    </>
  );
};

export default Intro;
