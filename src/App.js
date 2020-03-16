import React from "react";
import Header from "./component/Header";
import Form from "./component/Form";

import CategoriesProvider from "./context/CategoriesContext";
import RecipeProvider from "./context/RecipeContext";
import ModalProvider from "./context/ModalContext";
import ListRecipe from "./component/ListRecipe";

function App() {
  return (
    <CategoriesProvider>
      <Header />
      <RecipeProvider>
        <div className="container mt-5">
          <div className="row">
            <Form />
          </div>
          <ModalProvider>
            <ListRecipe />
          </ModalProvider>
        </div>
      </RecipeProvider>
    </CategoriesProvider>
  );
}

export default App;
