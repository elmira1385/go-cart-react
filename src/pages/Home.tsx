import BestSellers from "../components/ui/BestSellers";
import Hero from "../components/ui/Hero";
import JoinNewsletter from "../components/ui/JoinNewsletter";
import LatestProducts from "../components/ui/LatestProducts";
import Slider from "../components/ui/Slider";
import Specifications from "../components/ui/Specifications";

const Home = () => {
  return (
    <div className="flex flex-col gap-24 p-6">
      <Hero />
      <Slider />
      <LatestProducts />
      <BestSellers />
      <Specifications />
      <JoinNewsletter />
    </div>
  );
};

export default Home;
