import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import Display from './components/Display';

function App() {
	const [prompt, setPrompt] = useState([]);
	const [show, setShow] = useState(false);

	function handleClick() {
		setShow(!show);
	}

	function handleRef() {
		window.location.reload();
	}

	useEffect(() => {
		const getPrompts = async () => {
			try {
				Axios.get('https://promptapi.herokuapp.com/api/random').then(res => {
					let prompts = res.data[0].prompt;
					setPrompt(prompts);
				});
			} catch (error) {
				console.error(error);
			}
		};
		getPrompts();
	}, []);
	console.log(prompt);

	return (
		<div className='App'>
			{show ? (
				<Display prompt={prompt} handleRef={handleRef} />
			) : (
				<Home handleClick={handleClick} />
			)}
		</div>
	);
}

export default App;
