import React from "react";
import profilePic from "../../assets/portfolio/propic.svg";
import {ButtonWhite} from "../components/."
import todoListIcon from '../../assets/portfolio/todo-list.svg'
import githubIcon  from '../../assets/portfolio/github-icon.svg'

const HeroBanner = () => {
	return (
		<div className="font-poppins mt-20 text-white md:px-20 py-20">
			<div className="flex flex-col items-center md:flex-row-reverse">
				<div className="mb-10 md:mb-0 md:mx-auto">
					<img
						src={profilePic}
						alt="profile"
						className="w-50 mb-5 px-4 md:px-0"
					/>

					<div className="flex gap-3 justify-center">
						<ButtonWhite icon={todoListIcon} title="Projects" />
						<ButtonWhite icon={githubIcon} title="Github" />
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
							3rd year Software Engineering Undergraduate
						</li>
						<li className="text-lg md:text-xl">
							Frontend Developer
						</li>
					</ul>
					<div className="text-lg md:text-xl font-light my-4 md:my-6">
						based in Sri Lanka
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroBanner;
