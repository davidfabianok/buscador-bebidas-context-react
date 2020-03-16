import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}
const getIngredients = data => {
  let ingredients = [];
  for (let i = 1; i < 16; i++) {
    if (data[`strIngredient${i}`]) {
      ingredients.push(
        <li key={i}>
          {data[`strIngredient${i}`]}: {data[`strMeasure${i}`]}{" "}
        </li>
      );
    }
  }
  return ingredients;
};
const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Recipe = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const { setIdRecipe, recipeInf, setRecipe } = useContext(ModalContext);
  const { strDrink, strDrinkThumb, idDrink } = recipe;

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h4 className="card-header">{strDrink}</h4>
        <img className="card-img-top" src={strDrinkThumb} alt={strDrink} />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-block btn-primary"
            onClick={() => {
              setIdRecipe(idDrink);
              handleOpen();
            }}
          >
            Ver receta
          </button>
          <Modal
            open={open}
            onClose={() => {
              handleClose();
              setRecipe({});
              setIdRecipe(null);
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h1 className="text-primary">{recipeInf.strDrink}</h1>
              <h3 className="mt-4">Instruciones</h3>
              <p>{recipeInf.strInstructions}</p>
              <img
                className="img-fluid my-4"
                src={recipeInf.strDrinkThumb}
                alt={recipeInf.strDrink}
              />
              <h3>Ingredientes</h3>
              <ul>
              {getIngredients(recipeInf)}
              </ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
