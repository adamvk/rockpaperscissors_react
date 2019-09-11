import React from "react";
import { Container, Header, Button } from "semantic-ui-react";

class Results extends React.Component {


    render() {
        const { userWins, computerWins, tie } = this.props;

        return(
            <Container style={{ marginTop: "0px" }}>
                <img 
                    src={require(`./assets/space.png`)}
                />
                <br />
                <img 
                    src={require(`./assets/${this.props.userChoice}.png`)}
                />
                <img 
                    src={require(`./assets/${this.props.computerChoice}-left.png`)}
                />
                { userWins &&
                    <span>
                        <Header as="h2" color="green">
                            You won!
                        </Header>
                    </span>
                }
                { computerWins &&
                    <span>
                        <Header as="h2" color="red">
                            You lost!
                        </Header>
                    </span>
                }
                { tie &&
                    <Header as="h2" color="blue">
                        Tie!
                    </Header>
                }
                <br />
                <Button
                    onClick={this.props.playAgainClick}
                >
                    Play again
                </Button>
                <Button
                    onClick={this.props.playAgainClick}
                >
                    Restart
                </Button>
            </Container>
        )
    }
}

export default Results;