// ./src/components/color_organizer/App.js

import React from "react";
import ColorList from "./ColorList.js";
import AddColorForm from "../forms/AddColorForm";

export default function App() {
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}