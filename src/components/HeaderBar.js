import React from "react";

function HeaderBar(props) {
    return (
        <div id="header-bar">
            <div id="title">The ABBA Shuffle</div>
            <div id="instructions">Click an image to begin!</div>
            <div id="scoreboard"><span id="score">Score: {props.score}</span><span id="score-stack"> | </span>
             <span id="top-score">Top Score: {props.topScore}</span></div>
        </div>
    )

}

export default HeaderBar;