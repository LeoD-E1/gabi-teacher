import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Fa from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Presentation = ({ data }) => {
	return (
		<div className='theme-container-v2 flex justify-center items-center'>
			<div className='max-w-xl md:max-w-3xl'>
				<h2 className='text-3xl md:text-5xl py-3 text-smoothBlack'>
					{' '}
					Bienvenido a Gabiteacher{' '}
				</h2>
				<div>
					<p className='text-xl text-marineBlue'>
						Todo lo que necesita saber para mejorar su inglés está a su alcance,
						desde cualquier dispositivo, cuando y donde quiera.
					</p>
				</div>
				<div className='py-3'>
					{data.map(log => (
						<div className='flex mb-3' key={log.id}>
							<div className='flex justify-center m-1'>
								<FontAwesomeIcon
									icon={Fa[log.icon]}
									className='text-orange text-4xl border-solid border-2 border-orange rounded-full p-5'
								/>
							</div>
							<div className='flex flex-col mb-3'>
								<h4 className='text-xl text-smoothBlack mb-3'>{log.title}</h4>
								<p className='text-lg text-gray'>{log.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

Presentation.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			title: PropTypes.string,
			icon: PropTypes.string,
			description: PropTypes.string,
		})
	),
};

export default Presentation;
