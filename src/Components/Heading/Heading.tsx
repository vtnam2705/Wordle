import React from 'react'
import './Heading.css'

interface Props {
	type: string;
	text: string
}

const Heading:React.FC<Props> = (props) => {
	const {type, text} = props
	return (
		<div>
			<p className={`heading-${type}`}>{text}</p>
		</div>
	)
}

export default Heading