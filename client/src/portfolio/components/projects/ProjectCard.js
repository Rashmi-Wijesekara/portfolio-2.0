import React, { useState } from "react";
import { Front, Back } from "../../components/.";
import ReactCardFlip from "react-card-flip";

const ProjectCard = () => {
	const [flipped, setFlipped] = useState(false);

	const flip = () => {
		setFlipped(!flipped);
	};

	return (
		<div className="w-80">
			<ReactCardFlip
				isFlipped={flipped}
				// cardStyles={{
				// 	front: {
				// 		width: "15rem"
				// 	},
				// 	back: {
				// 		width: "15rem"
				// 	}
				// }}
				// containerStyle={{
				// 	width: "15rem"
				// }}
			>
				<div
					className="w-80 cursor-pointer"
					onMouseEnter={flip}
				>
					<Front />
				</div>
				<div
					className="w-80 cursor-pointer"
					onMouseLeave={flip}
				>
					<Back />
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default ProjectCard;
