import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

const portrait = {
    name: "portraits",
    description: " Portraits of people in my life",
};

afterEach(cleanup);

describe("Gallery is rendering", () => {
    it("renders", () => {
        render(<Gallery currentCategory={portrait}></Gallery>);
        expect(screen.getByTestId("h1tag")).toHaveTextContent("Portraits");
    });

    it("matches snapshot", () => {
        const { asFragment } = render(
            <Gallery currentCategory={portrait}></Gallery>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
