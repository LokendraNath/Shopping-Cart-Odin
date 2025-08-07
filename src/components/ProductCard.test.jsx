import { render, screen } from "@testing-library/react";
import productDetailCard from "./productDetailCard";
import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("productDetailCard", () => {
  it("renders productDetail name and price", async () => {
    const productDetail = {
      title: "Nike Air Max",
      price: 5999,
      id: 1,
    };

    const onAddToCart = vi.fn();

    render(
      <productDetailCard
        productDetail={productDetail}
        onAddToCart={onAddToCart}
      />
    );

    const button = screen.getByRole("button", { name: /add to cart/i });

    await userEvent.click(button);

    expect(screen.getByText("Nike Air Max")).toBeInTheDocument();
    expect(screen.getByText(/\$5999/i)).toBeInTheDocument();
    expect(onAddToCart).toHaveBeenCalledWith(productDetail, 1);
  });

  it("quantiy input has defaoult value 1", () => {
    const productDetail = {
      title: "Nike Air Max",
      price: 5999,
      id: 1,
    };

    render(
      <productDetailCard productDetail={productDetail} onAddToCart={() => {}} />
    );

    const input = screen.getByRole("spinbutton");
    expect(input).toHaveValue(1);
  });

  it("quantity cannot go below 1", async () => {
    const productDetail = {
      title: "Nike Air Max",
      price: 5999,
      id: 1,
    };

    render(
      <productDetailCard productDetail={productDetail} onAddToCart={() => {}} />
    );

    const input = screen.getByRole("spinbutton");
    const minus = screen.getByText("-");

    await userEvent.click(minus);

    expect(input).toHaveValue(1);
  });

  it("quantity cannot go above 10", async () => {
    const productDetail = {
      title: "Nike Air Max",
      price: 5999,
      id: 1,
    };

    render(
      <productDetailCard productDetail={productDetail} onAddToCart={() => {}} />
    );

    const input = screen.getByRole("spinbutton");
    const plus = screen.getByText("+");

    for (let i = 0; i < 10; i++) {
      await userEvent.click(plus);
    }

    expect(input).toHaveValue(10);

    await userEvent.click(plus);

    expect(input).toHaveValue(10);
  });

  it("does not allow manual entry below 1 or above 10", async () => {
    const productDetail = {
      title: "Nike Air Max",
      price: 5999,
      id: 1,
    };

    render(
      <productDetailCard productDetail={productDetail} onAddToCart={() => {}} />
    );
    const input = screen.getByRole("spinbutton");

    // try to enter 0
    await userEvent.clear(input);
    await userEvent.type(input, "0");
    expect(input).not.toHaveValue(0); //should not accect 0

    // try to enter 11
    await userEvent.clear(input);
    await userEvent.type(input, "11");
    expect(input).not.toHaveValue(11); //should not accect 11

    //Enter valid value
    await userEvent.clear(input);
    await userEvent.type(input, "3");
    expect(input).toHaveValue(3);
  });
});
