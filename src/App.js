import React from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";


class App extends React.Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
    return true;
  }

  counter = id => {
    this.state.cards.find((match, i) => {
      if (match.id === id) {
        if (cards[i].count === 0) {
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render() {

    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>
          <h1>Memory Game</h1>
        </Header>

        <div className="container">
          <div className="row">
            {this.state.cards.map(card => (
              <Card
                counter={this.counter}
                id={card.id}
                key={card.id}
                image={card.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}


export default App;
