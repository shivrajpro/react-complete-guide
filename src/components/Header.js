import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import classes from "./Header.module.css";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  
  const onLogout = ()=>{
    dispatch(authActions.logout());
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={onLogout} >Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
