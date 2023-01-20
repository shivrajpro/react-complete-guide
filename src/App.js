import React, { useContext, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
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
