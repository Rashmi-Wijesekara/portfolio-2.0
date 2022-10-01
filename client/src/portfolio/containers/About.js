import React from "react";
import profilePic from "../../assets/portfolio/propic.svg";

const About = () => {
	return (
		<div className="bg__gradient font-poppins mt-20 text-white px-20 py-20">
			<div className="flex flex-col items-center md:flex-row-reverse">
				<div className="mb-10">
					<img
						src={profilePic}
						alt="profile"
						className="w-50"
					/>
				</div>
				<div className="">
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

export default About;
