import Hero from "./components/ui/Hero"
import LatestProducts from "./components/ui/LatestProducts"
import Slider from "./components/ui/Slider"
import TamplateOfProducts from "./components/ui/TamplateOfProducts"

const Home = () => {
  return (
    <div className='flex flex-col gap-16 p-6'>
    <Hero/>
    <Slider/>
    <LatestProducts/>
    <TamplateOfProducts/>
    </div>
  )
}

export default Home