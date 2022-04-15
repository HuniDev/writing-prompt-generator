import Button from './Button';

function Display({ prompt, handleRef }) {
	return (
		<div className='is-flex is-justify-content-center is-align-items-center is-flex-direction-column pt-6 mx-3'>
			<div className='px-5 mx-5'>
				<h1 className='title is-4 has-text-white'>{prompt}</h1>
			</div>
			<Button onClick={handleRef} text={'Go Back'} />
		</div>
	);
}

export default Display;
