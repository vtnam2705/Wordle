import React, {useState} from 'react';
import './App.css';
import {useSelector} from 'react-redux'
import Heading from '../src/Components/Heading/Heading'
import Board from '../src/Components/Board/Board'
import Keyboard from '../src/Components/Keyboard/Keyboard'
import {RootState} from '../src/Redux/store'


const App:React.FC = () => {
  const board = useSelector((state:RootState) => state.board.board)
  return (
    <div className="App">
      <Heading type="h1" text="Wordle"/>
      <div className="main-container">
        <div className="board-container">
          <Board board={board}/>
        </div>
        <div className='keyboard'>
          <Keyboard/>
        </div>
      </div>
    </div>
  )
}

export default App