import HeroSection from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0B1020] text-white">
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
