// ./src/components/Main.js

import React  from "react";
import Menu from "./app_menu/Menu";
import data from "../data/recipes.json"
import StarRating from "./star_rating/StarRating";
import StarRatingOld from "./star_rating/StarRatingOld";
import App from "./color_organizer/App";
import { ColorProvider } from "./forms/color-hooks";

function Main() {
    return (
        <article>
            <Menu recipes={data} />
            <StarRating />
            <StarRatingOld totalStars={10} />
            <ColorProvider>
                <App />
            </ColorProvider>
        </article>
    );
}

export default Main;