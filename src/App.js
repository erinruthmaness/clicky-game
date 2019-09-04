import React from 'react';
import PhotoCard from "./components/PhotoCard";
import HeaderBar from "./components/HeaderBar";
import photoGallery from "./components/PhotoGallery";
import './App.css';


class App extends React.Component {
  state = {
    photoArray: photoGallery,
    clickedArray: [],
    score: 0,
    topScore: 0
  };

  handleClick = (event) => {
    const clickedPic = event.target.id;
    this.shuffleArray();
    let alreadyClicked = this.state.clickedArray;
    if (alreadyClicked.indexOf(clickedPic) === -1) {
      alreadyClicked.push(clickedPic)
      this.setState({ clickedArray: alreadyClicked });
      this.setState({ score : (this.state.score + 1)})
    }
    else {
      this.youLose();
    }
  };

  shuffleArray = function () {
    for (let i = photoGallery.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [photoGallery[i], photoGallery[j]] = [photoGallery[j], photoGallery[i]];
    }
    this.setState({ photoArray: photoGallery });
  };

  youLose = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    this.setState({ score: 0 });
  };

  render() {
    return (
      <div>
        <HeaderBar
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <div id="game-board">
          {this.state.photoArray.map(picture =>
            <PhotoCard
              source={picture.url}
              key={picture.id}
              id={picture.id}
              handleClick={this.handleClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
