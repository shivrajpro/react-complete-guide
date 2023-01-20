import React, { useContext } from "react";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";

function App() {
  const authCtx = useContext(AuthContext);
  
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!authCtx.isLoggedIn && <Login/>}
        {authCtx.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
  );
}

export default App;
