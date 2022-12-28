import React from 'react';

function PlayerBtns(props){
    if(props.isPlayerTurn){
    return (
        <div>
            <button onClick={(e) => {props.playerMoves(e); props.checkForPlayerTurn()}} value='+1'>+1</button>
            <button onClick={(e) => {props.playerMoves(e); props.checkForPlayerTurn()}} value='-1'>-1</button>
            <button onClick={(e) => {props.playerMoves(e); props.checkForPlayerTurn()}} value='x2'>x2</button>
            <button onClick={(e) => {props.playerMoves(e); props.checkForPlayerTurn()}} value='/2'>/2</button>
        </div>
    )
    } else {
        return null
    }
}

export default PlayerBtns;