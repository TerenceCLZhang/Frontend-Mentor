import { useSelector } from "react-redux";
import orderConfirmed from "../assets/images/icon-order-confirmed.svg";
import type { RootState } from "../state/store";
import ConfirmationItem from "./ConfirmationItem";
import orderConfirmedSound from "../assets/sounds/OrderConfirmed.mp3";
import { useEffect } from "react";

const Confirmation = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  useEffect(() => {
    new Audio(orderConfirmedSound).play();
  }, []);

  return (
    <section className="fixed z-10 h-fit px-5 py-9 bg-white rounded-t-3xl w-full lg:p-8 md:rounded-lg md:w-[75vw] lg:w-[50vw] 2xl:w-[30vw] bottom-0 md:left-1/2 md:top-1/2 md:-translate-1/2 flex flex-col items-start gap-5">
      <img src={orderConfirmed} alt="" />
      <div>
        <h2 className="text-3xl font-bold mb-2 xl:text-4xl">Order Confirmed</h2>
        <p>We hope you enjoy your food!</p>
      </div>

      <div className="flex flex-col gap-2 w-full bg-rose-100 p-5 rounded-lg">
        <div className="max-h-50 lg:max-h-50 2xl:max-h-100 overflow-y-auto pr-5">
          {cart.map((item, index) => (
            <ConfirmationItem key={index} item={item} />
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold">Order Total</span>
          <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button
        type="button"
        className="red-btn mt-4"
        onClick={() => window.location.reload()}
      >
        Start New Order
      </button>
    </section>
  );
};

export default Confirmation;
