import React from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";


class App extends React.Component {

  state = {
    cards,
    height: "200px",
    width: "200px",
    score: 0,
    highscore: 0
  };
 


  render() {
    
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Memory Game</Header>
        {this.state.cards.map(card => (
          <Card

            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}


export default App;
