import React from "react";
import Cart from "./Cart";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Cart Page", () => {
  it("Should Render Cart Compo", () => {
    render(<Cart />);

    expect(screen.getByText(/cart/i)).toBeInTheDocument();
  });
});
