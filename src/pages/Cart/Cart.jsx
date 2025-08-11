import CartItem from "../../components/CartItem";
import { useContext, useMemo } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Cart = () => {
  const { cart } = useContext(ShopContext);

  const { total, delivery, gst, finalTotal } = useMemo(() => {
    const totalAmount = cart.reduce(
      (sum, item) => sum + Number(item.price) * Number(item.qty),
      0
    );

    const deliveryFee = totalAmount > 100 ? 0 : totalAmount > 50 ? 5 : 10;
    const tax = totalAmount * 0.18;
    const final = totalAmount + tax + Number(deliveryFee);

    return {
      total: totalAmount,
      delivery: deliveryFee,
      gst: tax,
      finalTotal: final,
    };
  }, [cart]);

  return (
    <div className="min-h-auto">
      <h1 className="text-3xl text-center mb-10 font-bold tracking-widest">
        Cart
      </h1>
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-8 p-5 flex flex-col gap-5 row-span-3 max-h-120 overflow-y-auto">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="col-span-4 border row-span-1 m-5 p-4">
          <h1 className="mb-5">TOTAL</h1>
          <div className="border-t border-b py-4 px-3">
            <div className="flex items-center justify-between mb-3">
              <span>Shopping Cost:</span> <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span>Tax (18%):</span> <span>${gst.toFixed(1)}</span>
            </div>
            <div className="flex items-center justify-between mb-3">
              <span>Delivery:</span> <span>${delivery}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-3 border-b py-3 px-3 font-semibold">
            <span>Total:</span> <span>${finalTotal.toFixed(2)}</span>
          </div>
          <button className="w-full py-3 mt-5 bg-blue-700 text-white text-2xl font-bold tracking-wider rounded-full active:scale-90 transition-transform duration-300">
            CHECKOUT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
