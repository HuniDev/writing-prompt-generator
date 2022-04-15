function Button({ onClick, text }) {
	return (
		<div className='mt-4 is-#282c34'>
			<button
				onClick={onClick}
				className='button is-light is-rounded is-large mt-5'
			>
				{text}
			</button>
		</div>
	);
}

export default Button;
