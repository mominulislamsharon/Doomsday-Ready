import FeaturedCinemas from "@/components/home/FeaturedCinemas";
import HeroSection from "@/components/home/Hero";
import MovieShowcase from "@/components/home/MovieShowcase";
import Navbar from "@/components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0B1020] text-white">
        <HeroSection />
        <MovieShowcase/>
        <FeaturedCinemas></FeaturedCinemas>
      </main>
    </>
  );
};

export default Home;
