import React from 'react'
import Square from '../Square/Square'
import './Board.css'

interface Props {
	board: string[];
}

const Board:React.FC<Props> = (props) => {
	const {board} = props;
	return (
		<>
			<div className='board'>
				{board.map((square,idx) => {
					return(
						<>
							<Square val={square} index={idx}/>
						</>
					)
				})}
			</div>	
		</>
	)
}

export default Board