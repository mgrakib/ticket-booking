import BlogPage from "../../Components/HomePageCompo/BlogPage/BlogPage";

import GetTicketsThreeSteps from "../../Components/HomePageCompo/GetTicketsThreeSteps/GetTicketsThreeSteps";
import HeroSection from "../../Components/HomePageCompo/HeroSection/HeroSection";
import WhyBookWithUs from "../../Components/HomePageCompo/WhyBookWithUs/WhyBookWithUs";


const Home = () => {
    return (
        <div>
            <HeroSection />
            <WhyBookWithUs />
            <GetTicketsThreeSteps />
            <BlogPage />
           
        </div>
    );
};

export default Home;