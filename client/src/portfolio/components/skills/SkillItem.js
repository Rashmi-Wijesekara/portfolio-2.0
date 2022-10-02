import React from 'react'

const SkillItem = (props) => {
	const title = props.skill
	const items = props.items

	return (
		<div className="skill-item bg-boxBg w-72 p-5 my-5 mx-auto md:gap-x-2">
			<div className="font-poppins text-white font-light text-center mb-6">
				{title}
			</div>
			<div className="flex flex-wrap gap-4 justify-center">
				{items.map((item) => (
					<div
						key={item.name}
						className="bg-white skill-icon-wrapper cursor-pointer flex items-center justify-center w-16 h-16 p-2
							hover:scale-110 transform duration-300"
					>
						<img
							src={require(`../../../assets/portfolio/skills/${item.icon}.svg`)}
							alt={item.icon}
							title={item.name}
							className=""
						/>
					</div>
				))}
			</div>
		</div>
	);
}

export default SkillItem