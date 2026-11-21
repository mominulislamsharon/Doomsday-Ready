import { MapPin, ArrowRight, Building2, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const cinemas = [
  {
    name: "Star Cineplex",
    location: "Bashundhara City, Dhaka",
    screens: 6,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
    tag: "Popular Choice",
  },
  {
    name: "Blockbuster Cinemas",
    location: "Jamuna Future Park, Dhaka",
    screens: 7,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
    tag: "Premium Experience",
  },
  {
    name: "Lion Cinemas",
    location: "Sony Square, Dhaka",
    screens: 3,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800",
    tag: "Entertainment Hub",
  },
];

const FeaturedCinemas = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#0B1020] px-5 py-20 text-white md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-400">
              Find Your Perfect Screen
            </p>

            <h2 className="text-3xl font-black md:text-4xl">
              Featured <span className="text-amber-400">Cinemas</span>
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
              Discover popular cinema destinations and make your next movie
              experience unforgettable.
            </p>
          </div>

          <Button
            onClick={() => navigate("/booking")}
            variant="outline"
            className="w-fit gap-2 border-amber-400/40 bg-transparent text-amber-400 transition hover:bg-amber-400 hover:text-[#0B1020]"
          >
            View All Cinemas
            <ArrowRight size={16} />
          </Button>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {cinemas.map((cinema) => (
            <article
              key={cinema.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121A2D] transition duration-300 hover:-translate-y-2 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-400/5"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={cinema.image}
                  alt={cinema.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121A2D] via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 rounded-md border border-amber-400/30 bg-black/60 px-3 py-1.5 text-xs font-semibold text-amber-400 backdrop-blur">
                  {cinema.tag}
                </span>

                <div className="absolute bottom-4 left-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-amber-300">
                    Cinema Destination
                  </p>
                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {cinema.name}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                  <span>{cinema.location}</span>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <Building2 className="h-4 w-4 text-amber-400" />
                    {cinema.screens} Screens
                  </span>

                  <button
                    onClick={() => navigate("/booking")}
                    className="flex items-center gap-2 text-sm font-bold text-amber-400 transition hover:text-amber-300"
                  >
                    <Ticket size={16} />
                    Explore
                    <ArrowRight
                      size={15}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCinemas;
