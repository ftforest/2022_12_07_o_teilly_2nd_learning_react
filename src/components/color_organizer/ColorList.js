// ./src/components/color_organizer/ColorList.js

import React from "react";
import Color from "./Color";
import { useColors } from "../forms/color-hooks";

export default function ColorList() {
    const { colors } = useColors();
    if(!colors.length) return <div>No Colors Listed. (Add a Color)</div>;
    return (
        <div className="color-list">
            {
                colors.map(color => <Color key={color.id} {...color} />)
            }
        </div>
    );
}