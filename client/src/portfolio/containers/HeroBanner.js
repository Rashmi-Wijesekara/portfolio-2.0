import React, {useContext} from "react";
import {DefaultContext} from "../../context/DefaultContext"

import profilePic from "../../assets/portfolio/propic.svg";
import { ButtonWhite } from "../components/.";
import todoListIcon from "../../assets/portfolio/todo-list.svg";
import githubIcon from "../../assets/portfolio/github-icon.svg";

const HeroBanner = () => {
	const {setProjects_function} = useContext(DefaultContext)

	// scroll into the projects section
	const projectScroller = () => {
		setProjects_function()
	}

	return (
		<div
			className="font-poppins mt-20 text-white md:px-20 py-20"
			data-aos="fade-right"
			data-aos-offset="300"
			data-aos-easing="ease-in-sine"
		>
			<div className="flex flex-col items-center md:flex-row-reverse">
				<div className="mb-10 md:mb-0 md:mx-auto">
					<img
						src={profilePic}
						alt="profile"
						className="w-50 mb-5 px-4 md:px-0 cursor-pointer hover:drop-shadow-2xl hover:scale-105 transform duration-300"
					/>

					<div className="flex gap-3 justify-center">
						<ButtonWhite
							icon={todoListIcon}
							title="Projects"
							onClick={() => projectScroller()}
						/>
						<ButtonWhite
							icon={githubIcon}
							title="Github"
							onClick={() => {
								window.open(
									"https://github.com/Rashmi-Wijesekara"
								);
							}}
						/>
					</div>
				</div>
				<div className="px-5 md:px-0 md:mx-auto">
					<div className="text-lg md:text-xl font-light">
						Hi, I'm
					</div>
					<div className="text-2xl whitespace-nowrap md:text-4xl my-3 md:my-5">
						Rashmi Wijesekara
					</div>
					<ul className="list-disc font-light">
						<li className="text-lg md:text-xl">
							Software Engineer
						</li>
						<li className="text-lg md:text-xl">
							Based in Sri Lanka
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
