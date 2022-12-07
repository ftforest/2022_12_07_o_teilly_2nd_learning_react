// ./src/components/Main.js

import React from "react";
import Menu from "./app_menu/Menu";
import data from "../data/recipes.json"
import StarRating from "./star_rating/StarRating";


function Main() {
    return (
        <article>
            <Menu recipes={data} />
            <StarRating />
        </article>
    );
}

export default Main;