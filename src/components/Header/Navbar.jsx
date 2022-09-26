import { useState } from 'react';
import logo from '../../assets/img/logo-blanco.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
	const [navbar] = useState([
		{
			id: 0,
			title: 'inicio',
			link: '',
		},
		{
			id: 1,
			title: 'aprender',
			link: '',
		},
		{
			id: 2,
			title: 'contacto',
			link: '',
		},
		{
			id: 3,
			title: 'nosotros',
			link: '',
		},
		{
			id: 5,
			title: 'ingresar',
			link: '',
		},
		{
			id: 5,
			title: 'registrarme',
			link: '',
		},
	]);

	return (
		<header className='w-full fixed z-10 p-4 border-b-2 border-gray'>
			<div className='theme-container flex justify-between items-center'>
				<section>
					<img src={logo} alt='Gabiteacher-Logo' className='max-h-10' />
				</section>
				<section>
					<nav className='hidden lg:flex'>
						<ul className='flex justify-around'>
							{navbar.map(obj => (
								<li
									key={obj.id}
									className='mx-3 text-md font-sans border-b-2 border-b-trasparent text-white font-bold hover:border-b-orange hover:border-b-2 hover:transition-all'
								>
									<a href={obj.link}>{obj.title.toUpperCase()}</a>
								</li>
							))}
						</ul>
					</nav>
					<div className='lg:hidden flex m-1'>
						<button onClick={() => console.log('menu')}>
							<FontAwesomeIcon icon={faBars} className='text-orange text-2xl' />
						</button>
					</div>
				</section>
			</div>
		</header>
	);
};

export default Navbar;
