import React from "react";

function PhotoCard(props) {
    return (
        <img src={props.source}
            alt="game-piece"
            className="game-piece"
            id={props.id}
            onClick={props.handleClick} />
    );
};

export default PhotoCard;