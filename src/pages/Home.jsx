import React from 'react';
import bg from '../assets/img/knowledge-1052014_1920.jpg';
import Cover from '../components/Layout/Cover';

function Home() {
  const coverData = {
    title: 'Build in your way but with our experts',
    description:
      'Odio incidunt nam itaque sed eius modi error totam sit illum. Voluptas doloribus asperiores quaerat aperiam.',
    buttonText: 'Get Started!',
    action: () => console.log('Start'),
    imageUrl: bg,
    height: '100vh',
    align: 'start',
  };
  return <Cover {...coverData} />;
}

export default Home;
