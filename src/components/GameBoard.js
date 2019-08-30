// import React from "react";
import photoGallery from "./PhotoGallery";
import PhotoCard from "./PhotoCard";

function GameBoard() {
    photoGallery.imgArray.map(picture => PhotoCard.createCard(picture));
}

export default GameBoard;