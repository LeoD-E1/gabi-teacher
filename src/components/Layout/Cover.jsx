import PropTypes from 'prop-types';

const Cover = ({
	height,
	title,
	description,
	buttonText,
	actionBtn,
	imageUrl,
	align,
	justify,
}) => {
	return (
		<div
			className='hero-area'
			style={{
				backgroundImage: `url(${imageUrl})`,
				height,
				backgroundAttachment: 'fixed',
			}}
		>
			<div className='overlay'></div>
			<div className={`h-full relative flex items-${align} justify-${justify}`}>
				<div className='theme-container'>
					<div className={`sm:p-5 md:p-10 md:max-w-3xl`}>
						<h1 className='text-white font-bold text-4xl lg:text-5xl'>
							{title}{' '}
						</h1>
						<p className='my-8 text-white sm:text-xl lg:text-2xl'>
							{description}
						</p>
						<button className='btn-common' onClick={actionBtn}>
							{buttonText}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Cover.propTypes = {
	height: PropTypes.string,
	title: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string,
	actionBtn: PropTypes.func,
	imageUrl: PropTypes.string,
	align: PropTypes.string,
	justify: PropTypes.string,
};

export default Cover;
