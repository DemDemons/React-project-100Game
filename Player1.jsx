import React from 'react';
import Screen from './Screen';
import PlayerBtns from './PlayerBtns';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props.player };
        this.playerMoves = this.playerMoves.bind(this);
        this.checkIfCurrentNumberIsHundred = this.checkIfCurrentNumberIsHundred.bind(this);
        this.restart = this.restart.bind(this);
    }


    playerMoves(e) {
        let action = e.target.value


        switch (action) {
            case "+1":
                this.setState(prevState => {
                    return {
                        currentNumber: prevState.currentNumber + 1,
                        playerScore: prevState.playerScore + 1
                    }
                })
                break;
            case "-1":
                this.setState(prevState => {
                    return {
                        currentNumber: prevState.currentNumber - 1,
                        playerScore: prevState.playerScore + 1
                    }
                })
                break;
            case "x2":
                this.setState(prevState => {
                    return {
                        currentNumber: prevState.currentNumber * 2,
                        playerScore: prevState.playerScore + 1
                    }
                })
                break;
            case "/2":
                this.setState(prevState => {
                    return {
                        currentNumber: Math.floor(prevState.currentNumber / 2),
                        playerScore: prevState.playerScore + 1
                    }
                })
                break;

        }
        setTimeout(() => this.checkIfCurrentNumberIsHundred(), 10);
    }

    checkIfCurrentNumberIsHundred() {
        if (this.state.currentNumber == 100) {
            this.setState(() => {
                return { isHundred: false }
            })
        }
    }
    restart() {
        this.setState({ currentNumber: Math.floor(Math.random() * 99), isHundred: true , playerScore: 0})
    }

    render() {
        return (
            <div>
                {this.state.isHundred ?
                    <>
                        <Screen
                            currentNumber={this.state.currentNumber}
                            playerName={this.props.player.playerName}
                            playerScore={this.state.playerScore}
                            playererQuit={this.props.playerQuit}
                            isPlayerTurn={this.props.player.isPlayerTurn}
                        />
                        <PlayerBtns 
                        playerMoves={this.playerMoves} 
                        checkForPlayerTurn={this.props.checkForPlayerTurn} 
                        isPlayerTurn={this.props.player.isPlayerTurn}/>
                        <hr />
                        </> 
                        :
                         <>
                        <h1>{this.state.playerName} You Won!!!</h1>
                        <h1>This is your score!: {this.state.playerScore}</h1>
                        <button onClick={this.restart}>Rest your own game!</button>
                    </>
                }

            </div>
        )
    }
}


export default Player;