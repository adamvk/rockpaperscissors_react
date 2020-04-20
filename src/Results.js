import React from "react";
import { Container, Header, Button } from "semantic-ui-react";

class Results extends React.Component {
    state = {
        scoreGiven: false
    };

    incUserScore = () => {
        if (!this.props.gameComplete && !this.state.scoreGiven) {
            this.props.incUserScore();
            this.setState({ scoreGiven: true });
        };
    };

    incComputerScore = () => {
        if (!this.props.gameComplete && !this.state.scoreGiven) {
            this.props.incComputerScore();
            this.setState({ scoreGiven: true });
        };
    };

    renderResults = (userWins, computerWins, tie) => (
        <>
            <img src={require(`./assets/space.png`)} alt="Space" />
            <br />
            <img src={require(`./assets/${this.props.userChoice}.png`)} alt="User's choice" />
            <img src={require(`./assets/${this.props.computerChoice}-left.png`)} alt="Computer's choice" />
            <span>
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
                    <span>
                        <Header as="h2" color="blue">
                            Tie!
                        </Header>
                    </span>
                }
                <br />
                <Button
                    onClick={() => this.props.playAgainClick(userWins, computerWins)}
                >
                    Play again
                </Button>
                <Button
                    onClick={this.props.restartClick}
                >
                    Restart
                </Button>
            </span>
        </>
    );

    render() {
        const { userWins, computerWins, tie } = this.props;

        return(
            <Container style={{ marginTop: "0px" }}>
                { this.renderResults(userWins, computerWins, tie) }
            </Container>
        );
    };
};

export default Results;