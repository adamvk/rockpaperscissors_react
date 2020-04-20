import React from 'react';
import Game from "./Game";
import Animation from "./Animation";
import { Container, Header } from "semantic-ui-react";

class App extends React.Component {
  state = {
    objects: [
      { id: 1,
        name: "rock",
        chosen: false
      },
      { id: 2,
        name: "paper",
        chosen: false
      },
      { id: 3,
        name: "scissors",
        chosen: false
      }
    ],
    userHasChosen: false,
    userChoice: null,
    userScore: 0,
    computerScore: 0,
    gameComplete: false
  };

  handleClick = (id) => {
    this.setState({
      objects: this.state.objects.map( object => {
        if (object.id === id) {
          this.setState({ userHasChosen: true });
          this.setState({ userChoice: object.name });
          return { ...object, chosen: !object.chosen }
        }
        return object
      })
    });
  };

  getComputerChoice = () => {
    let int = Math.floor(Math.random() * this.state.objects.length + 1);
    if (int === 1) {
      return "rock";
    } else if (int === 2) {
      return "paper";
    } else if (int === 3) {
      return "scissors";
    };
  };

  playAgainClick = (userWins, computerWins) => {
    this.setState({
      userHasChosen: false,
      userChoice: null,
      gameComplete: false
    })
    if (userWins) {
      this.setState({ userScore: this.state.userScore+1 })
    } else if (computerWins) {
      this.setState({ computerScore: this.state.computerScore+1 })
    }
  };

  restartClick = () => {
    this.setState({
      userHasChosen: false,
      userChoice: null,
      userScore: 0,
      computerScore: 0,
      gameComplete: false
    })
  };

  incUserScore = () => {
    this.setState({ 
      userScore: this.state.userScore+1,
      gameComplete: true
    });
  }

  incComputerScore = () => {
    this.setState({ 
      computerScore: this.state.computerScore+1,
      gameComplete: true
    });
  }

  render() {
    const { userHasChosen, userChoice, userScore, computerScore } = this.state;

    return(
      <Container style={{ marginTop: "25px", }}>
        <Header as="h2">
          Rock, Paper, Scissors
        </Header>
        <p><b>User score:</b> {userScore}
        <br />
        <b>Computer score:</b> {computerScore}</p>
        <hr />
        { 
          !userHasChosen ?
            <Game
              handleClick = {this.handleClick}
            />
          : 
            <Animation
              userChoice = {userChoice}
              computerChoice = {this.getComputerChoice()}
              playAgainClick = {this.playAgainClick}
              restartClick = {this.restartClick}
              incUserScore = {this.incUserScore}
              incComputerScore = {this.incComputerScore}
              gameComplete = {this.gameComplete}
            />
        }
      </Container>
    )
  };
};

export default App;
