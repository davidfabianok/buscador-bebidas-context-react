import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CategoriesContext = createContext();

const CategoriesProvider = ({ children }) => {
  
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const getCategories = async () => {
        const URL_BASE = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
        const categories = await (await axios.get(URL_BASE)).data.drinks;
        setCategories(categories)
      }
      getCategories();
    }, [])

  return (
    <CategoriesContext.Provider
      value={{
    categories
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
export default CategoriesProvider;
