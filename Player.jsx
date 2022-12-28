import React from 'react';
import Screen from './Screen';
import PlayerBtns from './PlayerBtns';


class Player extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.player;
        this.playerMoves = this.playerMoves.bind(this);
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
                // {this.state}
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
    }

    checkIfCurrentNumberIsHundred(){
        if(this.state.currentNumber === 100){
            this.setState(() => {
                return { isHundred: false }
            })
        }
    }

    render() {
        return (
            <div>
               {this.state.isHundred ?
               <>
                <Screen
                    currentNumber={this.state.currentNumber}
                    playerName={this.state.playerName}
                    playerScore={this.state.playerScore}
                    
                />
                <PlayerBtns playerMoves={this.playerMoves} /> </>: <h1></h1>}

            </div>
        )
    }
}


export default Player;