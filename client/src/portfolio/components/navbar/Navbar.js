import React, { useRef } from "react";

import logo from "../../../assets/portfolio/logo.svg";
import {CVButton} from "../../components/."
import {ContactSide} from "../../components/."

const Navbar = () => {
	const mobileNavbar = useRef();

	// mobile navbar show and hide
	const mobileNavHandler = () => {
		mobileNavbar.current.classList.toggle("opacity-0");
		mobileNavbar.current.classList.toggle("w-0");
		mobileNavbar.current.classList.toggle("w-[70%]")
		// console.log(mobileNavbar.current.className)
	};

	const navigations = [
		{
			id: 1,
			title: "Blog",
			url: "/blog",
		},
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
						<a
							className="text-fontLightBlue font-poppins font-semibold my-3 ml-3 mx-auto cursor-pointer hover:scale-125 transform duration-300 active:translate-y-2"
							href={item.url}
							key={item.id}
						>
							{item.title}
						</a>
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
					<a
						className="text-fontLightBlue w-fit font-poppins font-semibold my-3 ml-3"
						href={item.url}
						key={item.id}
					>
						{item.title}
					</a>
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
