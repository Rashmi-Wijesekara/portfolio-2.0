import React from 'react'
import {SkillItem} from '../components/.'
import skills from '../data/skills.json'

const Skills = () => {

	return (
		<div className="flex flex-wrap mx-2 sm:mx-10 md:mx-20 border-4 rounded-2xl border-white p-3 my-20 md:mt-40">
			<div className="w-48 my-auto md:pl-4 mx-auto md:mx-0">
				<div className="font-poppins text-center md:text-left md:text-lg font-semibold text-fontLightBlue tracking-widest">
					MY SKILLS
				</div>
				<div className="font-poppins text-center md:text-left text-xl md:text-3xl font-semibold text-white md:mt-5">
					SKILL SET
				</div>
			</div>
			{skills.skills.map((skill) => (
				<SkillItem
					key={skill.id}
					skill={skill.skill}
					items={skill.items}
				/>
			))}
		</div>
	);
}

export default Skills