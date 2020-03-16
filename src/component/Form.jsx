import React, { useContext, useState} from "react";
import { CategoriesContext } from "../context/CategoriesContext";
import { RecipeContext } from "../context/RecipeContext";

const Form = () => {
	const [search, setSearch] = useState({
		name: "",
		category: "",
	})	

	const { categories } = useContext(CategoriesContext);
	const { setSearchRecipes, setQuery } = useContext(RecipeContext);
	
	const getRecipe = event =>{
		setSearch({
			...search,
			[event.target.name]: event.target.value,
		})
	}
	const searchRecipes = event => {
		event.preventDefault();
		setSearchRecipes(search);
		setQuery(true);
	}
  return (
    <form className="col-12" onSubmit={searchRecipes}>
      <fieldset className="text-center">
        <legend>Busca bebidas por Categorias o Ingredientes</legend>
      </fieldset>
      <div className="row  mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
						placeholder="Buscar por Ingrediente"
						onChange={getRecipe}
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="category" onChange={getRecipe}>
            <option value="">-- Selecciona categoría--</option>
            {categories.map(category => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
