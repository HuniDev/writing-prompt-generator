import Axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [prompt, setPrompt] = useState([]);

	useEffect(() => {
		const getPrompt = async () => {
			try {
				await Axios({
					method: 'get',
					url: 'promptapi.herokuapp.com/api/random',
				})
					.then(data => setPrompt(data))
					.then(console.log(prompt));
			} catch (error) {
				console.error(error);
			}
		};
		getPrompt();
	});

	return (
		<div className='App'>
			<div className='is-flex is-justify-content-center is-align-items-center is-flex-direction-column pt-6'>
				<h1 className='title is-2 has-text-white'>
					Get A <span className='has-text-danger'>Prompt</span>
				</h1>
				<div className='mt-4 is-#282c34'>
					<button className='button is-light is-rounded is-large mt-5'>
						Generate
					</button>
				</div>
			</div>
			<h4 className='title is-5 has-text-grey myTag'>
				Made by <span className='has-text-grey-lighter'>Hunidev</span>
			</h4>
		</div>
	);
}

export default App;
