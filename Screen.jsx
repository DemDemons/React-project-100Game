import React from 'react';


function Screen(props) {
    
    return (
        <div className={props.isPlayerTurn ? 'thisTurn' : null }>
            <h2>Player name --- {props.playerName}</h2>
            <h2>Current number --- {props.currentNumber}</h2>
            <h2>Amount of actions taken --- {props.playerScore}</h2>
            {props.isPlayerTurn ? <button onClick={() => props.playererQuit(props.playerName)}>Quit</button> : null}
        </div>
    )
}

export default Screen;