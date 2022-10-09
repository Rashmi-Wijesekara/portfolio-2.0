import React from "react";

const Front = (props) => {
	const project = props.project;

	return (
		<div className="bg-boxBg font-poppins pb-4 rounded-xl text-white w-72 md:w-80 h-96 mx-auto relative">
			<img className="w-full" alt="" src={project.image} />
			<div className="w-72 md:w-80 pl-5 my-5">
				<div className="font-semibold text-xl w-fit">
					{project.title}
				</div>

				<div
					className="bg-btnBg font-semibold px-3 py-2 rounded-lg my-3 w-fit text-bgDark shadow-xl absolute bottom-4
				cursor-pointer hover:drop-shadow-2xl hover:scale-110 transform duration-300 active:translate-y-2"
				>
					View Demo
				</div>
			</div>
		</div>
	);
};

export default Front;
