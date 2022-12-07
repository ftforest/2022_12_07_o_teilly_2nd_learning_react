// ./src/components/Main.js

import React from "react";
import Menu from "./Menu";
import data from "../data/recipes.json"


function Main() {
    return (
        <article>
            <Menu recipes={data} />
        </article>
    );
}

export default Main;