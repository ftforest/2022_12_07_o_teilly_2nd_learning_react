// ./src/index.js

import React from "react";
import { render } from "react-dom";
import Main from "./components/Main";
import Checkbox from "./components/chapter_007/Checkbox";

var chapter = 'ch7';
var renderComponent = null;
switch (chapter)
{
    case "ch6":
        renderComponent = <Main />;
        break;
    case "ch7":
        renderComponent = <Checkbox />;
        break;

    default:
        renderComponent = <Main />;
}

render(
    renderComponent,
    document.getElementById("root")
);