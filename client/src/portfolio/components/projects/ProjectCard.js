import React, {useState} from 'react'
import {Front, Back} from '../../components/.'
import ReactCardFlip from 'react-card-flip'

const ProjectCard = () => {
	const [flipped, setFlipped] = useState(false);

	const flip = () => {
		setFlipped(!flipped);
	}

	return (
		<ReactCardFlip
			isFlipped={flipped}
		>
			<div className="cursor-pointer" onMouseEnter={flip}>
				<Front />
			</div>
			<div className="cursor-pointer" onMouseLeave={flip}>
				<Back />
			</div>
		</ReactCardFlip>
	);
}

export default ProjectCard