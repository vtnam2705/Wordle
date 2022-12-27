import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {RootState} from '../../Redux/store'
import {setBoard, increasePos} from '../../Redux/boardSlice'
import './Key.css'

interface Props {
	letter: string
}

const Key:React.FC<Props> = (props) => {
	const {letter} = props;
	const board = useSelector((state:RootState) => state.board.board);
	const position = useSelector((state:RootState) => state.board.position);
	const row = useSelector((state:RootState) => state.board.row);
	const dispatch = useDispatch();
	let currentRow = Math.floor(position/5); 
	const handleClick =  (key: string) => {
		if(position >= board.length) return;
		if(currentRow > row) return;
		const newBoard = [...board];
		newBoard[position] = letter;
		dispatch(setBoard(newBoard));
		dispatch(increasePos())
	}
	return (
		<div>
			<span 
				className='letter' 
				onClick={() => handleClick(letter)}
			>
				{letter}
			</span>
		</div>
	)
}

export default Key