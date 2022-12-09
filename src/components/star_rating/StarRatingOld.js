// ./src/components/star_rating/StarRatingOld.js

import React, { Component } from "react";
import {FaStar} from "react-icons/fa";

const Star = ({ selected = false, onClick = f => f }) => (
    <FaStar color={selected ? "red" : "grey"} onClick={onClick} />
);

export default class StarRatingOld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starsSelected: 0
        };
        this.change = this.change.bind(this);
    }

    change(starsSelected) {
        this.setState({ starsSelected });
    }

    render() {
        const { totalStars } = this.props;
        const { starsSelected } = this.state;
        return (
            <div>
                {[...Array(totalStars)].map((n, i) => (
                    <Star
                        key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(i + 1)}
                    />
                ))}
                <p>
                    {starsSelected} of {totalStars} stars
                </p>
            </div>
        );
    }
}
