import js from "@eslint/js";
import { X } from "lucide-react";
import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const { cart, handleCartQtyClick,handleDeleteCartItem } = useOutletContext();
  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.qty;
  }, 0);

  return (
    <div className="min-h-screen grid grid-cols-12 gap-10 mt-5">
      <div className="border-2 col-span-8 p-5 flex flex-col gap-5">
        {console.log(cart)}
        {cart.map((item) => (
          <div
            key={item.id}
            className="relative w-full border-1 py-4 px-5 flex items-start justify-between rounded-2xl h-40"
          >
            <X
              className="absolute right-[-7px] top-[-7px] bg-red-500 rounded-full text-white"
              size={20}
              onClick={() => handleDeleteCartItem(item.id)}
            />
            <img src={item.image} className="w-30 h-full" alt="item.title" />
            <h2 className="text-xl">{item.title}</h2>
            <div className="flex flex-col items-center">
              Each: <h1>${item.price}</h1>
            </div>
            <div className="flex flex-col items-center">
              Quantity:{" "}
              <div className="border border-black px-2 py-1 rounded-2xl flex items-center">
                <span
                  onClick={() => handleCartQtyClick("min", item.id)}
                  className="text-xl cursor-pointer active:scale-95 transition-transform"
                >
                  -
                </span>
                <input
                  type="number"
                  min={1}
                  value={item.qty}
                  // onChange={handleInputChange}
                  max={10}
                  className="bg-white text-black w-8 border-none focus:border-none outline-none ml-4"
                />
                <span
                  onClick={() => handleCartQtyClick("plus", item.id)}
                  className="text-xl cursor-pointer active:scale-95 transition-transform"
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              Total: <h1>${item.qty * item.price}</h1>
            </div>
          </div>
        ))}
      </div>

      <div className="border-2 col-span-4 p-5">
        <h1 className="mb-5">TOTAL</h1>
        <div className="border-t border-b py-4 px-3">
          <div className="flex items-center justify-between mb-3">
            <span>Shopping Cost:</span> <span>${total}</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span>Tax (18%):</span> <span>${(total * 0.18).toFixed(1)}</span>
          </div>
          <div className="flex items-center justify-between mb-3">
            <span>Delivery:</span>{" "}
            <span>{total > 100 ? "Free" : total > 50 ? "$5" : "$10"}</span>
          </div>
        </div>
        <div className="flex items-center justify-between mb-3 border-b py-3 px-3 font-semibold">
          <span>Total:</span> <span>${(total + total * 0.18).toFixed(1)}</span>
        </div>
        <button className="w-full py-3 mt-5 bg-blue-700 text-white text-2xl font-bold tracking-wider rounded-full active:scale-90 transition-transform duration-300">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
