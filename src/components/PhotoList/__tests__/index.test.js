import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import PhotoList from "..";
import { Fragment } from "react/cjs/react.production.min";

afterEach(cleanup);

describe("PhotoList is rendering", () => {
    it("renders", () => {
        render(<PhotoList></PhotoList>);
    });

    it("matches snapshot", () => {
        const { asFragment } = render(<PhotoList></PhotoList>);
        expect(asFragment()).toMatchSnapshot();
    });
});
