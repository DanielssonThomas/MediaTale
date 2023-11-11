import Hero from "@/components/LandingPage/Hero";
import Navigation from "@/components/Navigation";
const LandingPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Navigation isLoggedIn={false} avatar_url={null} />
      <Hero />
    </div>
  );
};

export default LandingPage;
