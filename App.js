import React from 'react';
import './App.css';
import Player from './Components/Player1';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerArr: [],
      startGame: false
    }
    this.createPlayer = this.createPlayer.bind(this);
    this.startGame = this.startGame.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.playerQuit = this.playerQuit.bind(this);
    this.checkForPlayerTurn = this.checkForPlayerTurn.bind(this);
  }

  createPlayer() {
    const playerName = prompt('Enter a player name');
    if (playerName.length <= 0) {
      return alert('The name you enterd is not valid nigga, please enter a new name. To add a new name please press the new player button');
    }
    let newPlayersArr = [...this.state.playerArr];
    let player = {
      currentNumber: Math.floor(Math.random() * 99),
      playerName: playerName,
      playerScore: 0,
      isHundred: true,
      isPlayerTurn: false
    }
    newPlayersArr.push(player);
    this.setState(() => {
      return {
        playerArr: newPlayersArr
      }
    })

  }

  startGame() {
    let newPlayersArr = [...this.state.playerArr];
    newPlayersArr[0].isPlayerTurn = true;
    this.setState({
      playerArr: newPlayersArr
    })

    if (this.state.playerArr.length > 0) {
      this.setState({ startGame: true });
    }
  }

  resetGame() {
    this.setState({ startGame: false, playerArr: []});
  }


  playerQuit(playerName) {
    let playerIndex;
    let newPlayersArr = JSON.parse(JSON.stringify(this.state.playerArr));
    for (let i = 0; i < newPlayersArr.length; i++) {
      if (newPlayersArr[i].playerName === playerName) {
        playerIndex = i;
        if (i === newPlayersArr.length - 1) {
          newPlayersArr[0].isPlayerTurn = true
        } else {
          newPlayersArr[i + 1].isPlayerTurn = true
        }
      }
    }
    newPlayersArr.splice(playerIndex, 1);
    this.setState(() => {
      return {
        playerArr: newPlayersArr
      }
    })
  }


  checkForPlayerTurn() {
    let newPlayersArr = [...this.state.playerArr];
    for (let i = 0; i < this.state.playerArr.length; i++) {
      if (this.state.playerArr[i].isPlayerTurn === true) {
        newPlayersArr[i].isPlayerTurn = false;
        this.setState(() => {
          return { playerArr: newPlayersArr }
        })
        if (i === this.state.playerArr.length - 1) {
          newPlayersArr[0].isPlayerTurn = true;
          this.setState(() => {
            return { playerArr: newPlayersArr }
          })
          return
        }
        newPlayersArr[i + 1].isPlayerTurn = true
        this.setState(() => {
          return { playerArr: newPlayersArr }
        })
        console.log(this.state.playerArr);
        break;
      }
    }
  }


  render() {
    let players = this.state.playerArr.map((player, index) => <Player player={player} key={index} playerQuit={this.playerQuit} checkForPlayerTurn={this.checkForPlayerTurn} />)
    return (
      <div className="App game">
        <ul>
          <h2>Players:</h2>
          {this.state.playerArr.map((player) => <li key={Math.random()}>{player.playerName}</li>)}
        </ul>
        <div>
          <h1>Welcome to the game!!!</h1>
          {this.state.startGame ? null : <button onClick={this.createPlayer}>Add player</button>}
          {this.state.startGame ? null : <button onClick={this.startGame}>Start game!</button>}
          <button onClick={this.resetGame}>Rest the game!</button>
          {this.state.startGame && players}
        </div>
      </div>
    );
  }
}


export default App;
