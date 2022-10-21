import React, {
	useContext,
	useRef,
	useEffect,
} from "react";
import { DefaultContext } from "../../context/DefaultContext";
import { scrolling } from "../../functions/Scrolling";

import github from "../../assets/portfolio/github-link.svg"
import twitter from "../../assets/portfolio/twitter-link.svg"
import linkedin from "../../assets/portfolio/linkedin-link.svg"

const Contact = () => {
	const contactRef = useRef()
	const {contact} = useContext(DefaultContext)

	const openLink = (link) => {
		window.open(link);
	};

	useEffect(() => {
		scrolling(contactRef);
	}, [contact]);

	return (
		<div ref={contactRef} className="py-20">
			<div className="">
				<div className="font-poppins text-center md:text-lg font-semibold text-fontLightBlue tracking-widest">
					CONTACT
				</div>
				<div className="font-poppins text-center text-xl md:text-3xl font-semibold text-white md:mt-5">
					GET IN TOUCH
				</div>

				<div className="font-poppins text-center text-sm text-white my-10">
					Whether you have a question or just want to say
					hi, I'll try my best to get back to you!
				</div>

				<div className="flex flex-row w-fit mx-auto gap-8">
					<img
						src={github}
						alt=""
						className="w-auto mx-auto my-2 cursor-pointer hover:scale-90 hover:shadow-2xl transform duration-300 shadow-2xl"
						onClick={() =>
							openLink(
								"https://github.com/Rashmi-Wijesekara"
							)
						}
					/>
					<img
						src={linkedin}
						alt=""
						className="w-auto mx-auto my-2 cursor-pointer hover:scale-90 hover:shadow-2xl transform duration-300 shadow-2xl"
						onClick={() =>
							openLink(
								"https://www.linkedin.com/in/rashmi-wijesekara-a1a1881b3/"
							)
						}
					/>
					<img
						src={twitter}
						alt=""
						className="w-auto mx-auto my-2 cursor-pointer hover:scale-90 hover:shadow-2xl transform duration-300 shadow-2xl"
						onClick={() =>
							openLink("https://twitter.com/Rashmi_W_")
						}
					/>
				</div>
			</div>
		</div>
	);
}

export default Contact