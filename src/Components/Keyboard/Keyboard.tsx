import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../Redux/store'
import {setBoard, decreasePos, increaseRow} from '../../Redux/boardSlice'
import './Keyboard.css'
import Key from '../Key/Key'
import wordList from '../../words.json'

const Keyboard:React.FC = () => {
	const words = wordList.words;
	const position = useSelector((state:RootState) => state.board.position);
	const board = useSelector((state:RootState) => state.board.board);
	const row = useSelector((state:RootState) => state.board.row);
	const correctWord = useSelector((state:RootState) => state.board.correctWord)
	const dispatch = useDispatch();
	const rows: string[] = [
		"q w e r t y u i o p", 
		"a s d f g h j k l", 
		"z x c v b n m"
	];

// Convert array letter to string
	const array:number[] = [5,4,3,2,1];
	let array5Word:string[] = [];
	{array.map(num => {
		let letter = array5Word.push(board[position - num]);
		return [...array5Word, letter] 
	})}
	const result = (array5Word.join('')).toLowerCase();
// End

	const handleDelete = () => {
		if(Math.floor((position - 1) / 5) < row) return;
		const newBoard = [...board];
		newBoard[position - 1] = '';
		dispatch(decreasePos())
		dispatch(setBoard(newBoard));
	}

	const handleEnter = () => {
		if(words.includes(result)) {
			if (position !== 0 && position % 5 === 0) {
				dispatch(increaseRow())
				return;
			}
		} 

		if(!words.includes(result)) {
			alert('Not in Word List');
		}

		if(position === 30 && words.includes(result)) {
			alert('Correct Word: ' + correctWord)
		}
	}
	return (
		<>
			<div className='keyboard-container'>
        		{rows.map((item, idx) => {
        		return (
        			<div className='row'>
        				{idx === 2 && (
	        					<span 
	        				        className='letter-row' 
	        				        onClick= {() => handleEnter()}
	        				    >
	        				        Enter
	        				    </span>
        				    )
        				}
        				{item.split(" ").map((letter, idx) => {
        					return (
        						<div className='letter-row'>
        							<Key letter={letter.toUpperCase()}/>
        							{letter === 'm' && <span onClick={() => handleDelete()}>Backspace</span>}
        						</div>
        					)
        				})}
        			</div>
        		)
        	})}
			</div>
		</>
		
	)
}

export default Keyboard