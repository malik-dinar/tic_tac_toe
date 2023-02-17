import Board from "./board"
import { useState } from "react"
import { calculatorWinner } from "../helper"

const styles = {
    width: '200px',
    margin: '20px auto',
};

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
    
    // const jumpTo = () => {
        
    // }
    
    const renderMoves = () => (
        <button className="pulse" onClick={()=> setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )
    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={styles}>
                <p>{winner? 'Winner: '+winner : 'Next Player: '+ (xIsNext ? 'X':'O')}</p>
                {renderMoves()}
            </div>
        </> 
    )
}

export default Game