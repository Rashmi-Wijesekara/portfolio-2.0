import React, { useState } from "react";
import { Front, Back } from "../../components/.";
import ReactCardFlip from "react-card-flip";

const ProjectCard = (props) => {
	const [flipped, setFlipped] = useState(false);
	const project = props.project;

	const flip = () => {
		setFlipped(!flipped);
	};

	return (
		<div
			data-aos="flip-left"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
			className="w-80 h-96 mx-auto"
		>
			<ReactCardFlip isFlipped={flipped}>
				<div
					className="w-80 cursor-pointer"
					onMouseEnter={flip}
					onClick={flip}
				>
					<Front project={project} key={project.id} />
				</div>
				<div
					className="w-80 cursor-pointer"
					onMouseLeave={flip}
					onClick={flip}
				>
					<Back project={project} key={project.id} />
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default ProjectCard;
