import React from "react";
import { ButtonWhite } from "../../components/.";
import githubIcon from "../../../assets/portfolio/github-icon.svg";
import figmaIcon from "../../../assets/portfolio/skills/figma.svg";

const Back = (props) => {
	const project = props.project;

	return (
		<div className="bg-boxBg font-poppins pb-4 rounded-xl text-white w-72 md:w-80 h-96 mx-auto relative">
			<img
				className="w-full opacity-25"
				alt=""
				src={project.image}
			/>
			<div className="w-72 md:w-80 px-5 my-5 absolute top-0">
				<div className="font-semibold text-xl">
					{project.title}
				</div>
				<div className="mt-3 text-sm">
					{project.description}
				</div>
			</div>

			<div className="px-5 absolute bottom-20">
				<div className="font-semibold text-[1rem] ">
					Technologies used :
				</div>
				<div className="flex flex-wrap gap-2 md:gap-3 my-3">
					{project.technologies.map((item) => (
						<div
							key={item}
							className="bg-white rounded-2xl text-bgDark font-medium px-3 py-0.5 text-sm"
						>
							{item}
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-row w-full absolute bottom-4 items-center justify-around">
				{project["live-link"] && (
					<div
						onClick={() => {
							window.open(project["live-link"]);
						}}
						className="bg-fontLightBlue font-semibold px-3 py-2 rounded-lg my-3 w-fit text-bgDark shadow-xl
				cursor-pointer hover:drop-shadow-2xl hover:scale-110 transform duration-300 active:translate-y-2"
					>
						View Demo
					</div>
				)}

				{project["repo-link"] && (
					<div className="height-[43px] py-1 bg-white rounded-lg">
						<ButtonWhite
							onClick={() => {
								window.open(project["repo-link"]);
							}}
							icon={githubIcon}
						/>
					</div>
				)}

				{project["design-link"] && (
					<div className="height-[43px] py-1">
						<ButtonWhite icon={figmaIcon} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Back;
