import React from "react";

const calculationSammary = (cart) => {
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);
  const delivery = total > 100 ? 0 : total > 50 ? 5 : 10;
  const gst = total * 0.18;
  const finalTotal = total + gst + Number(delivery);

  return {
    total,
    delivery,
    gst,
    finalTotal,
  };
};

export default calculationSammary;
