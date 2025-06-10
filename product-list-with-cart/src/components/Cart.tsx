import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../state/store";
import emptyCart from "../assets/images/illustration-empty-cart.svg";
import carbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import CartItem from "./CartItem";

interface Props {
  setShowConfirmation: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart = ({ setShowConfirmation }: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <section className="bg-white w-full p-5 py-7 rounded-xl shadow-sm">
      <h2 className="text-red text-2xl font-bold mb-5 xl:text-3xl xl:mb-8">
        Your Cart ({totalItems})
      </h2>
      {totalItems === 0 ? (
        <div className="flex flex-col items-center gap-5">
          <img src={emptyCart} alt="Empty cart" />
          <span className="text-rose-500 font-semibold">
            Your added items will appear here
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-5">
          {cart.map((item, index) => (
            <CartItem key={index} dispatch={dispatch} item={item} />
          ))}
          <div className="flex justify-between items-center my-2">
            <span className="font-semibold">Order Total</span>
            <span className="font-bold text-3xl">${totalPrice.toFixed(2)}</span>
          </div>
          <div className="bg-rose-100 flex justify-center items-center gap-2 py-4 rounded-lg">
            <img src={carbonNeutral} alt="" />
            <span>
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </span>
          </div>
          <button
            type="button"
            className="red-btn"
            onClick={() => setShowConfirmation(true)}
          >
            Confirm Order
          </button>
        </div>
      )}
    </section>
  );
};

export default Cart;
