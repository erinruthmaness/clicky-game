import React from "react";
import photoGallery from "./PhotoGallery";
// import HeaderBar from "./HeaderBar";

class PhotoCard extends React.Component {
    state = {
        clicked: false
    };

    handleClick = () => {
        photoGallery.shuffleArray(photoGallery.imgArray);
        if (this.clicked) {
            console.log("loser click!" + this.clicked);
            // HeaderBar.youLose();
        }
        else {
            console.log("new click!" + this.clicked);
            this.setState({ clicked: true });
        }
    };

    render() {
        return (
            <div id="game-board">
                {photoGallery.imgArray.map(picture =>
                    <img src={picture} alt="game piece" className="game-piece" clicked="false"
                        data-id={(picture.split("$")[1])} onClick={this.handleClick} />
                )}
            </div>
        );

    };

}


export default PhotoCard;