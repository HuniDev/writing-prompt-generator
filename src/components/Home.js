import Button from './Button';

function Home({ handleClick }) {
	return (
		<div>
			<div className='is-flex is-justify-content-center is-align-items-center is-flex-direction-column pt-6'>
				<h1 className='title is-2 has-text-white'>
					Get A <span className='has-text-danger'>Prompt</span>
				</h1>
				<Button onClick={handleClick} text={'Generate'} />
			</div>
			<h4 className='title is-5 has-text-grey myTag'>
				Made by <span className='has-text-grey-lighter'>Hunidev</span>
			</h4>
		</div>
	);
}

export default Home;
