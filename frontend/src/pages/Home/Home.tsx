import FeaturedCinemas from "@/components/home/FeaturedCinemas";
import HeroSection from "@/components/home/Hero";
import MovieShowcase from "@/components/home/MovieShowcase";

const Home = () => {
  return (
    <>
      <main className="min-h-screen bg-[#0B1020] text-white">
        <HeroSection />
        <MovieShowcase />
        <FeaturedCinemas />
      </main>
    </>
  );
};

export default Home;
