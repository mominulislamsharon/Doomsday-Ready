import { Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// json data show iamge
const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi / Adventure",
    duration: "2h 49m",
    rating: "8.7",
    image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 2,
    title: "Inception",
    genre: "Action / Sci-Fi",
    duration: "2h 28m",
    rating: "8.8",
    image: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    genre: "Action / Crime",
    duration: "2h 32m",
    rating: "9.0",
    image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Dune: Part Two",
    genre: "Sci-Fi / Drama",
    duration: "2h 46m",
    rating: "8.5",
    image: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
];

const MovieShowcase = () => {
  return (
    <div className="bg-[#0B1020] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Discover Your Next Favorite
            </p>
            <h1 className="text-3xl font-bold md:text-4xl">
              Now <span className="text-amber-400">Showing</span>
            </h1>
            <p className="mt-3 text-gray-400">
              Explore the latest movies on the big screen.
            </p>
          </div>

          <Button
            className="hidden gap-2 border-white/20 text-white hover:bg-white/10 hover:text-white sm:flex"
            variant="outline"
          >
            View All <ArrowRight size={16} />
          </Button>
        </div>

        {/* card */}

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-7">
          {movies.map((movie) => (
            <article key={movie.id} className="group">
              <div className="relative overflow-hidden rounded-xl bg-white/5">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/75 px-2.5 py-1.5 text-sm font-semibold text-amber-400 backdrop-blur">
                  <Star size={14} fill="currentColor" />
                  {movie.rating}
                </div>

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                  <Button className="w-full bg-amber-400 font-bold text-[#0B1020] hover:bg-amber-300">
                    Book Tickets
                  </Button>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="truncate text-lg font-bold text-white">
                  {movie.title}
                </h3>

                <p className="mt-1 text-sm text-gray-400">{movie.genre}</p>

                <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
                  <Clock size={14} />
                  {movie.duration}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieShowcase;
