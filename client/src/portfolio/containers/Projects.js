import React from 'react'
import {ProjectCard} from '../components/.'
import projects from '../data/projects.json'

const Projects = () => {
	const projectsData = projects.projects

	return (
		<div className="flex flex-wrap flex-row gap-5 md:mx-20">
			{
				projectsData.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))
			}
		</div>
	)
}

export default Projects