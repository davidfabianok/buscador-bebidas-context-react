import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

const ModalProvider = ({children}) => {
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipeInf, setRecipe] = useState({});
    
    useEffect(() => {
        if(!idRecipe) return;
        const URL_API = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
        
        const getRecipe = async () => {
            const recipe = await (await axios.get(URL_API)).data.drinks[0];
            setRecipe(recipe);
        }
        getRecipe()
    }, [idRecipe])
    return (
        <ModalContext.Provider
        value={{
            recipeInf,
            setRecipe,
            setIdRecipe
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
