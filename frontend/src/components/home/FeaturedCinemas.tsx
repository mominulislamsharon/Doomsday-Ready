import { MapPin, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const cinemas = [
  {
    name: "Star Cineplex",
    location: "Bashundhara City, Dhaka",
    screens: 6,
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
  },
  {
    name: "Blockbuster Cinemas",
    location: "Jamuna Future Park, Dhaka",
    screens: 7,
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800",
  },
  {
    name: "Lion Cinemas",
    location: "Sony Square, Dhaka",
    screens: 3,
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800",
  },
];

const FeaturedCinemas = () => {
  return (
    <div className="bg-[#0B1020] px-5 py-20 text-white md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Find Your Cinema
            </p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Featured <span className="text-amber-400">Cinemas</span>
            </h2>
            <p className="mt-3 max-w-xl text-sm text-gray-400 md:text-base">
              Discover popular cinemas and get ready for your next movie
              experience.
            </p>
          </div>

          <Button
            variant="outline"
            className="w-fit border-amber-400/40 bg-transparent text-amber-400 hover:bg-amber-400 hover:text-black"
          >
            View All Cinemas <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* card */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cinemas.map((cinema) => (
            <div
              key={cinema.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#121A2D] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={cinema.image}
                  alt={cinema.name}
                  className="h-full w-full object-cover transition-transform duration-500 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121A2D] to-transparent" />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold">{cinema.name}</h3>

                <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  {cinema.location}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center gap-2 text-sm text-gray-400">
                    <Building2 className="h-4 w-4 text-amber-400" />
                    {cinema.screens} Screens
                  </span>

                  <button className="flex items-center gap-1 text-sm font-semibold text-amber-400 transition-colors hover:text-amber-300">
                    Explore <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCinemas;
