import React, { createContext, useState, useEffect} from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
    
  const [recipes, setRecipes] = useState([]);
  const [searchRecipes, setSearchRecipes] = useState({
      name: '',
      category: '',
  });
	const [query, setQuery] = useState(false);

	const {name, category} = searchRecipes;
	useEffect(()=>{
		if (query) {
			const getRecipes = async () => {
				const URL_API = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;
				const recipes = await (await axios.get(URL_API)).data.drinks;
				setRecipes(recipes);
			};
			getRecipes();
		}
	}, [searchRecipes]);
  return (
    <RecipeContext.Provider
      value={{
				recipes,
				setSearchRecipes,
				setQuery
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;