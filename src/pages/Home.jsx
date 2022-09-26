import bg from '../assets/img/knowledge-1052014_1920.jpg';
import Navbar from '../components/Header/Navbar';
import Cover from '../components/Layout/Cover';

function Home() {
	const coverData = {
		title: 'Tu escuela de inglés online',
		description:
			'Capacitacion de inglés para personas que quieran aprender desde los básicos',
		buttonText: '¡Comenzar!',
		action: () => console.log('Start'),
		imageUrl: bg,
		height: '100vh',
		align: 'center',
		justify: 'start',
	};
	return (
		<>
			<Navbar />
			<Cover {...coverData} />
		</>
	);
}

export default Home;
