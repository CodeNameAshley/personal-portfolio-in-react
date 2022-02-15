import { render, screen } from "@testing-library/react";
import App from "../components/App";
import "@testing-library/jest-dom/extend-expect";

test("renders my portfolio", () => {
  render(<App />);
  const title = screen.getByText(/my portfolio/i);
  expect(title).toBeInTheDocument();
});
