import Board from "./board"
import { useState } from "react"
import { calculatorWinner } from "../helper"

const Game=()=>{
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculatorWinner(board)

    const handleClick = i => {
        console.log(i);
        const boardCopy = [...board];
        if(winner || boardCopy[i]) return;
        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }
    
    const jumpTo = () => {
        
    }
    
    const renderMoves = () => {
        
    }
    return (
        <Board squares={board} onClick={handleClick}/>
    )
}

export default Game