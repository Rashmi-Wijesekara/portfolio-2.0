import React from 'react'
import {ProjectCard} from '../components/.'
import projects from '../data/projects.json'

const Projects = () => {
	const projectsData = projects.projects

	return (
		<div className="my-40">
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
}

export default Projects