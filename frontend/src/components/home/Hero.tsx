import { Button } from "@base-ui/react";
import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex min-h-[650px] items-center overflow-hidden bg-[#0B1020]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&w=2000&q=85)",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1020] via-[#0B1020]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded bg-amber-400/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
              Featured Movie
            </span>

            <span className="text-sm text-gray-400">2026 - Thriller</span>
          </div>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            THE LAST
            <span className="block text-amber-400">DOOMSDAY</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-gray-300 md:text-lg">
            When the world reaches its final hour, one decision can change
            everything. Experience the ultimate cinematic journey.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button
              onClick={() => navigate("/movies")}
              className="flex items-center gap-2 rounded-lg bg-amber-400 px-7 py-3.5 font-bold text-[#0B1020] transition hover:bg-amber-300"
            >
              <Play size={18} fill="currentColor" />
              Explore Movies
            </Button>

            <Button className="flex items-center gap-2 rounded-lg border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
              Learn More
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
