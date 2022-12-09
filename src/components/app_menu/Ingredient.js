// ./src/components/app_menu/Ingredient.js

import React from "react";

export default function Ingredient({ amount, measurement, name }) {
    return (
        <li>
            {amount} {measurement} {name}
        </li>
    );
}