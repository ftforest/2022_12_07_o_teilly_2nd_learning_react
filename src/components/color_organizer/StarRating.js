// ./src/components/color_organizer/StarRating.js

import React, { useState } from "react";
import { createArray} from "../forms/lib";
import Star from "./Star"

export default function StarRating({
    totalStars = 5,
    selectedStars = 0,
    onRate = f => f
}) {
    return (
        <>
            {createArray(totalStars).map((n, i) => (
                <Star
                    key={i}
                    selected={selectedStars > i}
                    onSelect={() => onRate(i + 1)}
                />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </>
    );
}
