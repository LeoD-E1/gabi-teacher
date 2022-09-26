import { useState } from 'react';
import logo from '../../assets/img/logo-blanco.png';

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
			title: 'ingresar',
			link: '',
		},
		{
			id: 4,
			title: 'registrarme',
			link: '',
		},
	]);

	return (
		<header className='w-full flex justify-around items-center fixed z-10 p-4 border-b-2 border-gray'>
			<section className=''>
				<img src={logo} alt='Gabiteacher-Logo' className='max-h-10' />
			</section>
			<section>
				<nav className='hidden lg:flex'>
					<ul className='flex justify-around'>
						{navbar.map(obj => (
							<li key={obj.id} className='p-5 text-md font-sans text-white'>
								<a href={obj.link}>{obj.title.toUpperCase()}</a>
							</li>
						))}
					</ul>
				</nav>
			</section>
		</header>
	);
};

export default Navbar;
