import Image from 'next/image';
import movies from '../lib/data';

import Link from 'next/link';

export const Cards = () => {
  return <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
    {movies.map((movie) => (<Link href={'./movies'} className="p-4 mx-auto" key={movie.title}>
      <Image
        src={movie.posterPath}
        alt={movie.title}
        width={300}
        height={450}
        className="rounded-lg"
      />
      
        <h2 className="text-xl text-black font-semibold">{movie.title}</h2>
        <p className="text-sm text-gray-600">Release Date: {movie.releaseDate}</p>
        <p className="text-sm text-gray-600">Rating: {movie.rating}</p>
      
    </Link>
    ))};
  </div>

}