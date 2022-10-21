import "./App.css";
import React, { useContext, useEffect } from "react";
import { DefaultContext } from "./context/DefaultContext";

// components
import { Navbar } from "./portfolio/components/.";
// import {Sample} from './portfolio/components/.'

// containers
import HeroBanner from "./portfolio/containers/HeroBanner";
import About from "./portfolio/containers/About";
import Skills from "./portfolio/containers/Skills";
import Projects from "./portfolio/containers/Projects";
import Contact from "./portfolio/containers/Contact";
import Footer from "./portfolio/containers/Footer";

function App() {
	const { currentPath } = useContext(DefaultContext);

	console.log(currentPath);

	// auto scrolling at loading fixed
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Navbar />
			<HeroBanner />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
