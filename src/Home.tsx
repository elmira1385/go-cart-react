import Hero from "./components/ui/Hero"
import Slider from "./components/ui/Slider"

const Home = () => {
  return (
    <div className='flex flex-col gap-10 p-6'>
    <Hero/>
    <Slider/>
    </div>
  )
}

export default Home