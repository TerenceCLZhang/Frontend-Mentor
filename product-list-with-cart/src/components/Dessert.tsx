import { useDispatch, useSelector } from "react-redux";
import cartIcon from "../assets/images/icon-add-to-cart.svg";
import type { DessertType } from "../types/DessertType";
import { addToCart, decrementItem, incrementItem } from "../state/cartSlice";
import type { RootState } from "../state/store";

interface Props {
  dessert: DessertType;
}

const Dessert = ({ dessert }: Props) => {
  const cart = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  const cartAmount = cart.find((item) => item.name === dessert.name)?.amount;

  return (
    <section>
      <div className="relative mb-10">
        <picture
          className={`block rounded-xl overflow-hidden border-3 w-full ${
            cartAmount ? "border-red" : "border-transparent"
          }`}
        >
          <source media="(min-width: 1024px)" srcSet={dessert.image.desktop} />
          <source media="(min-width: 768px)" srcSet={dessert.image.tablet} />
          <img src={dessert.image.mobile} alt={dessert.name} />
        </picture>

        <div
          className={`w-[175px] absolute -bottom-[20px] left-1/2 -translate-x-1/2 rounded-full border overflow-hidden font-semibold ${
            !cartAmount
              ? "border-rose-500 hover:border-red"
              : "border-transparent"
          }`}
        >
          {!cartAmount ? (
            <button
              className="bg-white w-full justify-center flex items-center gap-2 px-5 py-3 hover:text-red"
              onClick={() =>
                dispatch(
                  addToCart({
                    name: dessert.name,
                    thumbnail: dessert.image.thumbnail,
                    amount: 1,
                    pricePerProduct: dessert.price,
                    totalPrice: dessert.price,
                  })
                )
              }
            >
              <span>
                <img src={cartIcon} alt="" />
              </span>{" "}
              Add to Cart
            </button>
          ) : (
            <div className="bg-red text-rose-50 px-5 py-3 flex justify-between">
              <button
                type="button"
                aria-label="Decrease number of items"
                className="inc-dec-btn group"
                onClick={() => dispatch(decrementItem(dessert.name))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="2"
                  fill="none"
                  viewBox="0 0 10 2"
                >
                  <path
                    className="fill-white group-hover:fill-red"
                    d="M0 .375h10v1.25H0V.375Z"
                  />
                </svg>
              </button>

              <span className="self-center">{cartAmount}</span>
              <button
                type="button"
                aria-label="Increase number of items"
                className="inc-dec-btn group"
                onClick={() => dispatch(incrementItem(dessert.name))}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="none"
                  viewBox="0 0 10 10"
                >
                  <path
                    className="fill-white group-hover:fill-red"
                    d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <span className="text-rose-400">{dessert.category}</span>
        <h2 className="font-bold">{dessert.name}</h2>
        <span className="text-red font-semibold">
          ${dessert.price.toFixed(2)}
        </span>
      </div>
    </section>
  );
};

export default Dessert;
