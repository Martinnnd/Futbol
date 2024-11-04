// components/Juegos.jsx
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Juegos = () => {
  /* const juegos = [
    {
      id: 1,
      name: 'Futbol 11 America',
      image: 'https://i.ibb.co/306SDQw/6a2f-1.png',
      href: '/FutbolAmerica',
    },
    {
      id: 2,
      name: 'Futbol 11 Ascenso',
      image: 'https://i.ibb.co/RvDtjZJ/countries.png',
      href: '/FutbolAscenso',
    },
    {
      id: 3,
      name: 'Futbol 11 Primera',
      image: 'https://i.ibb.co/Dr1rrCp/clubs.png',
      href: '/FutbolPrimera',
    },
    {
      id: 4,
      name: 'Futbol 11 Leyendas',
      image: 'https://i.ibb.co/7phGW85/6a2f.png',
      href: '/FutbolLeyendas',
    },
  ];
 */
  /* {
    Id: 2,
    Name: "Futbol 11 Ascenso",
    Image: "https://i.ibb.co/RvDtjZJ/countries.png",
    Href: "/FutbolAscenso",
  }, */

  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const getGames = async () => {
      try {
        const response = await fetch('/api/games');
        if (!response.ok) throw 'Error en server';
        const data = await response.json();
        setJuegos(data);
      } catch (error) {
        console.log(error);
      }
    };

    getGames();
  }, []);

  console.log(juegos);
  return (
    <div className='mt-8 flex flex-row gap-8 flex-wrap justify-center'>
      {juegos?.map((juego) => (
        <a key={juego.game_id} href={juego.url}>
          <div className='bg-mi-color-personalizado w-52 border border-mi-tercer-personalizado rounded-2xl shadow-md overflow-hidden cursor-pointer transform transition duration-200 hover:scale-105 hover:border-mi-otrocolor-personalizado'>
            <div className='w-full h-48 relative rounded-3xl'>
              <Image src={juego.image} alt={juego.name} layout='fill' objectFit='contain' className='rounded-3xl' />
            </div>
            <div className='p-4 bg-mi-tercer-personalizado hover:bg-mi-otrocolor-personalizado transition-all hover:transition-all hover:text-mi-color-personalizado'>
              <h2 className='text-3xl font-semibold uppercase'>play</h2>
              <h3 className='text-lg font-semibold'>{juego.name}</h3>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Juegos;
