import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '../../Redux/store'
import './Square.css'
import {motion} from 'framer-motion'

interface Props {
	val: string;
	index: number
}

const Square:React.FC<Props> = (props) => {
	const {val, index} = props;
	const [correct, setCorrect] = useState<boolean>(false);
	const [almost, setAlmost] = useState<boolean>(false);
	const [wrong, setWrong] = useState<boolean>(false);


	// const correctWord = useSelector((state.RootState) => state.board.correctWord);
	const correctWord = useSelector((state:RootState) => state.board.correctWord);
	const position = useSelector((state:RootState) => state.board.position);
	const row = useSelector((state:RootState) => state.board.row);
	

	let wordLastIndex = 4
	let correctPosition = (position - 1) % 5;
	const variants = {
		filled: {
			scale: [1.2,1],
			transition: {
				duration: 0.2 
			}
		},

		unfilled: {
			scale: [1.2,1],
			transition: {
				duration: 0.2 
			}
		}
	}

	useEffect(() => {
		if(correctWord[correctPosition] === val) {
			setCorrect(true);
		} else if (!correct && val !== '' && correctWord.includes(val)) {
			setAlmost(true);
		} else if(!correct && val !== '' && !correctWord.includes(val)){
			setWrong(true);
		}
		return () => {
			setWrong(false);
			setAlmost(false);
			setCorrect(false)
		}
	}, [val])

	const status:any = Math.floor(index/5) < row && (correct 
		? "correct" 
		: almost 
		? "almost" 
		: wrong 
		? "wrong" 
		: "");

	return (
		<motion.div animate={val ? 'filled' : 'unfilled'} variants={variants}>
			<div className='square' id={status}>
				{val}
			</div>
		</motion.div>
	)
}

export default Square