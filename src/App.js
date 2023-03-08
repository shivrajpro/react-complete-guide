import React from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

const App = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage/>} exact="true" />
          <Route path="/favorites" element={<FavoritesPage/>} />
        </Routes>
      </main>
    </React.Fragment>
  );
};

export default App;
