import bg from '../assets/img/knowledge-1052014_1920.jpg';
import bg2 from '../assets/img/books-1204029_1920.jpg';
import Navbar from '../components/Header/Navbar';
import Cover from '../components/Layout/Cover';
import Presentation from '../components/Layout/Presentation';

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

	const coverData2 = {
		title: 'Queremos ayudarte a ser mejor en ingles',
		description:
			'Aprender inglés es fácil pero no quiere decir que sea tan sencillo, tenes que aprender algo todos los días y practicarlo constantemente.',
		buttonText: '¡Comenzar!',
		action: () => console.log('Start'),
		imageUrl: bg2,
		height: '70vh',
		align: 'center',
		justify: '',
	};

	const PresData = [
		{
			id: 0,
			title: 'Sin Fronteras',
			icon: 'faComputer',
			description:
				'Aprende a través de cualquier dispositivo. El único requisito es tener acceso a Internet.',
		},
		{
			id: 1,
			title: 'Eficacia',
			icon: 'faCheck',
			description:
				'Estudios confirman que los estudiantes online superan a los estudiantes que tomaron cursos presenciales.',
		},
	];

	return (
		<>
			<Navbar />
			<Cover {...coverData} />
			<Presentation data={PresData} />
			<Cover {...coverData2} />
		</>
	);
}

export default Home;
