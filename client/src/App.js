import logo from './logo.svg';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				<div className="sample-animate text-red-600" data-aos="fade-up">
					hello world
				</div>
				<div className="sample-animate" data-aos="fade-up">
					hello world
				</div>
				<div className="sample-animate" data-aos="fade-up">
					hello world
				</div>
			</header>
		</div>
	);
}

export default App;
