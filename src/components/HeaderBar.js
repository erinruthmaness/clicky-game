import React from "react";

function HeaderBar(props) {
    return (
        <div id="header-bar">
            <div id="title">The ABBA Shuffle</div>
            <div id="instructions">Click an image to begin!</div>
            <div id="scoreboard">Score: {props.score} | Top Score: {props.topScore}</div>
        </div>
    )

}

export default HeaderBar;