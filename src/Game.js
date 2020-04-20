import React from "react";
import { Container } from "semantic-ui-react";

const Game = ({ handleClick }) => (
  <Container style={{ marginTop: "0px", }}>
      Make your choice!
      <div>
        <img 
          src={require('./assets/rock.png')}
          alt="Rock"
          onClick={() => handleClick(1) }
        />
        <img 
          src={require('./assets/paper.png')}
          alt="Paper"
          onClick={() => handleClick(2) } 
        />
        <img 
          src={require('./assets/scissors.png')}
          alt="Scissors"
          onClick={() => handleClick(3) }
        />
      </div>
  </Container>
);

export default Game;