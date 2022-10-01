import React from 'react'
import line from "../../../assets/portfolio/line.svg"
import github from "../../../assets/portfolio/github-link.svg"
import twitter from "../../../assets/portfolio/twitter-link.svg"
import linkedin from "../../../assets/portfolio/linkedin-link.svg"

const ContactSide = () => {

	const openLink = (link) => {
		window.open(link)
	}

	return (
		<div className="h-screen fixed top-[20%] z-10 hidden sm:block">
			<div className="flex-row gap-2 align-items-center">
				<img src={line} alt="" className="w-auto mx-auto" />
				<div className="font-poppins text-fontLightBlue font-bold -rotate-90 my-10">
					Say Hello
				</div>
				<img src={line} alt="" className="w-auto mx-auto" />
				<div className="">
					<img
						src={github}
						alt=""
						className="w-auto mx-auto my-2 cursor-pointer"
						onClick={() =>
							openLink(
								"https://github.com/Rashmi-Wijesekara"
							)
						}
					/>
					<img
						src={linkedin}
						alt=""
						className="w-auto mx-auto my-2 cursor-pointer"
						onClick={() =>
							openLink(
								"https://www.linkedin.com/in/rashmi-wijesekara-a1a1881b3/"
							)
						}
					/>
					<img
						src={twitter}
						alt=""
						className="w-auto mx-auto my-2 cursor-pointer"
						onClick={() =>
							openLink("https://twitter.com/Rashmi_W_")
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default ContactSide