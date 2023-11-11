import * as renderer from "react-test-renderer";
import App from "./App";

jest.mock("./config/env", () => ({
  TEXT: "TEXT",
}));

it("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});
