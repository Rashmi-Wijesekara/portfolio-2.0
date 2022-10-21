import React, {
	useContext,
	useRef,
	useEffect,
} from "react";
import { DefaultContext } from "../../context/DefaultContext";

import { ProjectCard } from "../components/.";
import projectsSamples from "../data/projects.json";
import { scrolling } from "../../functions/Scrolling";

const Projects = () => {
	const projectsData = projectsSamples.projects;

	const projectsRef = useRef();
	const { projects } =
		useContext(DefaultContext);

	useEffect(() => {
		scrolling(projectsRef);
	}, [projects]);

	return (
		<div ref={projectsRef} className="py-20">
			<div className="my-10">
				<div className="font-poppins text-center md:text-lg font-semibold text-fontLightBlue tracking-widest">
					MY WORKS
				</div>
				<div className="font-poppins text-center text-xl md:text-3xl font-semibold text-white md:mt-5">
					LATEST PROJECTS
				</div>
			</div>
			<div className="flex flex-wrap flex-row gap-5 md:mx-20">
				{projectsData.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</div>
		</div>
	);
};

export default Projects;
