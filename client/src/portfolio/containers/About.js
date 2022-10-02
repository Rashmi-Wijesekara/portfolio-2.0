import React from 'react'
import img from '../../assets/portfolio/about-image.svg'

const About = () => {
	return (
		<div className="flex flex-col md:flex-row md:mx-20 md:my-10">
			<div data-aos="flip-left" className="mx-10 md:mx-0 md:w-1/2">
				<img src={img} alt="banner" className="w-full" />
			</div>
			<div data-aos="fade-left" className="my-10 md:my-auto md:ml-10">
				<div className="font-poppins text-center md:text-left md:text-lg font-semibold text-fontLightBlue tracking-widest">
					ABOUT ME
				</div>
				<div className="font-poppins text-center md:text-left text-xl md:text-3xl font-semibold text-white md:mt-5">
					I'm Rashmi Wijesekara
				</div>
				<div className="text-lightPara font-poppins font-light text-xs sm:text-sm max-w-lg px-5 md:px-0 mx-auto md:mx-0 mt-5 md:mt-10">
					<div className="mb-5">
						I started my coding journey in 2020, when I
						started doing my degree in Software Engineering.
						Since then, I prefer to keep learning, continue
						challenging myself, and do interesting things
						that matter.
					</div>
					<div className="">
						I am interested in web development and hope to
						become a frontend web developer.
					</div>
				</div>
			</div>
		</div>
	);
}

export default About