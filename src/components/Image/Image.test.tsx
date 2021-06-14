import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import { renderWithRedux } from "src/Utils/renderWithRedux";

import Image from "./Image";

test("image component should contains img tag", () => {
  renderWithRedux(<Image src="pathToImg" ratio="4-5" />);
  const image = screen.queryAllByTestId("image");
  expect(image.length === 1).toBeTruthy();
});
