import type { CartItemType } from "../types/CartItemType";

interface Props {
  item: CartItemType;
}

const ConfirmationItem = ({ item }: Props) => {
  return (
    <div className="flex items-center w-full justify-between border-b border-rose-300 pb-5 mb-5">
      <div className="flex items-center gap-4">
        <img src={item.thumbnail} alt="" className="h-15 rounded-lg" />
        <div>
          <span className="font-semibold line-clamp-1 pr-2">{item.name}</span>
          <div className="flex gap-2">
            <span className="text-red font-semibold mr-2">{item.amount}x</span>
            <span className="text-rose-500">
              @ ${item.pricePerProduct.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <span className="text-rose-500 font-semibold">
        ${item.totalPrice.toFixed(2)}
      </span>
    </div>
  );
};

export default ConfirmationItem;
