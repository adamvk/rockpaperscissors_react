import React from "react";
import Results from "./Results";
import { Container } from "semantic-ui-react";

class Animation extends React.Component {
    state = {
        showWhiteSpace: false,
        count: 0,
        userWins: false,
        computerWins: false,
        tie: false
    };

    componentDidMount() {
        this.ticker = setInterval(() => this.tick(), 500);
    };

    componentWillUnmount() {
        clearInterval(this.ticker);
    };

    tick = () => {
        this.setState({ showWhiteSpace: !this.state.showWhiteSpace })
        this.setState({ count: this.state.count+1 })
    };

    userWins = (userChoice, computerChoice) => {
        if ((userChoice === "rock" && computerChoice === "scissors") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissors" && computerChoice === "paper")) {
            return true;
        }
        return false;
    };

    computerWins = (userChoice, computerChoice) => {
        if ((userChoice === "rock" && computerChoice === "paper") ||
            (userChoice === "paper" && computerChoice === "scissors") ||
            (userChoice === "scissors" && computerChoice === "rock")) {
            return true;
        }
        return false;
    };

    decideResult = () => {
        if (this.userWins(this.props.userChoice, this.props.computerChoice)) {
            this.state.userWins = true;
        } else if (this.computerWins(this.props.userChoice, this.props.computerChoice)) {
            this.state.computerWins = true;
        } else {
            this.state.tie = true;
        }
    };

    givePoint = (userWins, computerWins, tie) => {
        if (userWins) {
            this.props.incUserScore();
            return;
        } else if (computerWins) {
            this.props.incComputerScore();
            return;
        }
    };

    render() {
        const { showWhiteSpace, count, userWins, computerWins, tie } = this.state;

        return (
            <Container style={{ marginTop: "0px", }}>
                { this.decideResult() }
                <br />
                { count<7 ?
                    <span>
                        { showWhiteSpace &&
                            <div>
                                <img src={require('./assets/space.png')} alt="Space" />
                                <img src={require('./assets/space.png')} alt="Space" />
                            </div>
                        }
                        <div>
                            <img src={require('./assets/rock.png')} alt="Rock" />
                            <img src={require('./assets/rock-left.png')} alt="Rock" />
                        </div>
                    </span>
                :
                    <Results 
                        userChoice = {this.props.userChoice}
                        computerChoice = {this.props.computerChoice}
                        computerWins = {computerWins}
                        userWins = {userWins}
                        tie = {tie}
                        playAgainClick = {this.props.playAgainClick}
                        restartClick = {this.props.restartClick}
                        incUserScore = {this.props.incUserScore}
                        incComputerScore = {this.props.incComputerScore}
                        gameComplete = {false}
                    />
                }
            </Container>
        );
    };
};

export default Animation;