// ./src/components/app_menu/IngredientsList.js

import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientsList({ list }) {
    return (
        <ul className="ingredients">
            {list.map((ingridient, i) => (
                <Ingredient key={i} {...ingridient} />
            ))}
        </ul>
    );
}