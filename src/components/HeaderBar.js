import React from "react";

class HeaderBar extends React.Component {
    state = {
        score: 0,
        topScore: 0
    }

    youLose = () => {
        console.log("current score " + this.score);
        if (this.score > this.topScore) {
            this.setState({ topScore: this.score });
        }
        this.setState({ score: 0 });
    }

    render() {
        return (
            <div id="header-bar">
                <div id="title">Clicky Game</div>
                <div id="instructions">Click an image to begin!</div>
                <div id="scoreboard">Score: {HeaderBar.score} || Top Score: {HeaderBar.score}</div>
            </div>
        )
    }
}

export default HeaderBar;