import React, { useReducer } from "react";
import "./Product.css";

const currencyOptions = {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
};

const products = [
  {
    emoji: "🍦",
    name: "ice cream",
    price: 5,
  },
  {
    emoji: "🍩",
    name: "donuts",
    price: 2.5,
  },
  {
    emoji: "🍉",
    name: "watermelon",
    price: 4,
  },
];

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.name];
    case "remove":
      const update = [...state];
      update.splice(update.indexOf(action.name), 1);
      return update;
    default:
      return state;
  }
}

function totalReducer(state, action) {
  if (action.type === "add") {
    return state + action.price;
  }
  return state - action.price;
}

export default function Product() {
  const [cart, setCart] = useReducer(cartReducer, []);
  const [total, setTotal] = useReducer(totalReducer, 0);

  function getTotal(total) {
    return total.toLocaleString(undefined, currencyOptions);
  }
  function add(product) {
    const { name, price } = product;
    setCart({ name, type: "add" });
    setTotal({ price, type: "add" });
  }
  function remove(product) {
    const { name, price } = product;
    setCart({ name, type: "remove" });
    setTotal({ price, type: "remove" });
  }
  return (
    <div className="wrapper">
      <div>Shopping Cart: {cart.length} total items.</div>
      <div>Total: {getTotal(total)}</div>
      {products.map((product) => (
        <div key={product.name}>
          <div className="product">
            <span role="img" aria-label={product.name}>
              {product.emoji}
            </span>
          </div>
          <button onClick={() => add(product)}>Add</button>
          <button onClick={() => remove(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
}
