import "./App.css";
import React, { useContext } from "react";
import { DefaultContext } from "./context/DefaultContext";

// components
import { Navbar } from "./portfolio/components/.";
// import {Sample} from './portfolio/components/.'

// containers
import HeroBanner from "./portfolio/containers/HeroBanner";
import About from "./portfolio/containers/About";
import Skills from "./portfolio/containers/Skills";
import Projects from "./portfolio/containers/Projects";

function App() {
	const { currentPath, setCurrentPath_function } =
		useContext(DefaultContext);

		console.log(currentPath)
	return (
		<>
			<Navbar />
			<HeroBanner />
			<About />
			<Skills />
			<Projects />
		</>
	);
}

export default App;
