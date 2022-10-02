import './App.css';

// components
import {Navbar} from './portfolio/components/.'
// import {Sample} from './portfolio/components/.'

// containers
import HeroBanner from './portfolio/containers/HeroBanner'
import About from './portfolio/containers/About'
import Skills from './portfolio/containers/Skills'
import Projects from './portfolio/containers/Projects'

function App() {
  return (
		<>
		<Navbar />
		{/* <Sample /> */}

		<HeroBanner />
		<About />
		<Skills />
		<Projects />

		{/* <div className="bg__gradient mt-16 text-white p-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti iusto fuga debitis molestias, laudantium rem delectus blanditiis itaque! Minima saepe illo earum nemo culpa dignissimos numquam dolore obcaecati, eveniet sequi.</div> */}
		</>
	);
}

{/* <div className="sample-animate" data-aos="fade-up">
	hello world
</div> */}

export default App;
