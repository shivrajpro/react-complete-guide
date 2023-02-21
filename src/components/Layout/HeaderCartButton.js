import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setButtonIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const numOfItems = cartCtx.items.reduce((count, item) => {
    return count + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  const { items } = cartCtx;

  useEffect(() => {
    if (!cartCtx.items.length) return;
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items, cartCtx.items.length]);
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
