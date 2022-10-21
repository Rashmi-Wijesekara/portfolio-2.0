import React, { useRef, useContext } from "react";
import { DefaultContext } from "../../../context/DefaultContext";

import logo from "../../../assets/portfolio/logo.svg";
import { CVButton } from "../../components/.";
import { ContactSide } from "../../components/.";

const Navbar = () => {
	const mobileNavbar = useRef();
	const {
		setAbout_function,
		setSkills_function,
		setProjects_function,
		setContact_function,
	} = useContext(DefaultContext);

	// mobile navbar show and hide
	const mobileNavHandler = () => {
		mobileNavbar.current.classList.toggle("opacity-0");
		mobileNavbar.current.classList.toggle("w-0");
		mobileNavbar.current.classList.toggle("w-[70%]");
		// console.log(mobileNavbar.current.className)
	};

	const navigations = [
		// {
		// 	id: 1,
		// 	title: "Blog",
		// 	url: "/blog",
		// },
		{
			id: 2,
			title: "About",
			url: "/about",
		},
		{
			id: 3,
			title: "Skills",
			url: "/skills",
		},
		{
			id: 4,
			title: "Projects",
			url: "/projects",
		},
		{
			id: 5,
			title: "Contact",
			url: "/contact",
		},
	];

	const navbarScrollHandler = (name) => {
		if (name === "About") {
			setAbout_function();
		} else if (name === "Contact") {
			setContact_function();
		} else if (name === "Projects") {
			setProjects_function();
		} else if (name === "Skills") {
			setSkills_function();
		} else if (name === "Blog") {
			console.log(name);
		}
	};

	return (
		<>
			<div className="backdrop-blur-lg fixed z-10 left-0 right-0 top-0 flex flex-row border-b-4 border-darkBlue py-2 md:mx-14">
				{/* logo */}
				<img src={logo} alt="logo" />

				{/* mobile hamburger menu icon */}
				<svg
					className="w-6 h-6 text-fontLightBlue md:hidden m-4 ml-auto cursor-pointer"
					// x-show="!showMenu"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="3"
					viewBox="0 0 24 24"
					stroke="currentColor"
					onClick={mobileNavHandler}
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>

				{/* desktop navbar */}
				<div className="hidden md:flex my-auto w-[80%] px-5 ml-auto">
					{navigations.map((item) => (
						<div
							className="text-fontLightBlue font-poppins font-semibold my-3 ml-3 mx-auto cursor-pointer hover:scale-125 transform duration-300 active:translate-y-2"
							// href={item.url}
							key={item.id}
							onClick={() =>
								navbarScrollHandler(item.title)
							}
						>
							{item.title}
						</div>
					))}
					<div className="ml-auto">
						<CVButton />
					</div>
				</div>
			</div>

			{/* mobile navbar popup */}
			<div
				ref={mobileNavbar}
				className="bg__gradient fixed left-0 z-30 top-18 opacity-0 h-screen flex flex-col p-4 text-white md:hidden w-0 transition-[width] duration-1000"
			>
				{navigations.map((item) => (
					<div
						className="text-fontLightBlue w-fit font-poppins font-semibold my-3 ml-3"
						// href={item.url}
						key={item.id}
						onClick={() => {
							navbarScrollHandler(item.title)
							mobileNavHandler()
						}}
					>
						{item.title}
					</div>
				))}

				<div className="mt-2 w-fit">
					<CVButton />
				</div>
			</div>

			{/* say hello fixed element */}
			<div className="">
				<ContactSide />
			</div>
		</>
	);
};

export default Navbar;
