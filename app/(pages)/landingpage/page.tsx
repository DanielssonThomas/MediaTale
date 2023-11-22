import Hero from "@/components/LandingPage/Hero";
import Navigation from "@/components/Navigation";
const LandingPage = () => {
  return (
    <div className="flex flex-col w-full bg-[#EDEDED] dark:bg-[#1C1C1C]">
      <Navigation isLoggedIn={false} avatar_url={null} showLoginButton={true} />
      <div className="relative">
        <Hero />
      </div>
    </div>
  );
};

export default LandingPage;
