import '../../App.css';
import '../../App.tsx';
import Carousel from '../../components/Carousel';

const Home: React.FC = () => {
  const tutorials = [
    { title: 'Tutoriel 1', description: 'Description du tutoriel 1' },
    { title: 'Tutoriel 2', description: 'Description du tutoriel 2' },
    { title: 'Tutoriel 3', description: 'Description du tutoriel 3' },
  ];

  const cvs = [
    { title: 'CV 1', description: 'Description du CV 1' },
    { title: 'CV 2', description: 'Description du CV 2' },
    { title: 'CV 3', description: 'Description du CV 3' },
  ];

  return (
    <>
      <p className="p-[4rem] text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu rhoncus lacus. Sed non purus nulla. Duis id ornare ligula. Integer nec enim dui. Nunc iaculis massa vel efficitur pharetra. Nullam ut efficitur nulla. Ut ac imperdiet magna. Duis semper, urna id vestibulum rhoncus, nisi odio fringilla leo, in malesuada felis mauris ut nisl.
      </p>
      <h2 className="text-center text-2xl font-bold mb-4">Tutoriels</h2>
      <Carousel items={tutorials} />
      <h2 className="text-center text-2xl font-bold mt-10 mb-4">CV</h2>
      <Carousel items={cvs} />
    </>
  );
}

export default Home;
