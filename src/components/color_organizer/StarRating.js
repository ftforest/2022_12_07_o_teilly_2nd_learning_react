// ./src/components/StarRating.js

import React, { useState } from "react";
import {FaStar} from "react-icons/fa";

const Star = ({ selected = false}) => (
    <FaStar color={selected ? "red" : "grey"} />
);
const createArray = length => [...Array(length)];

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}
