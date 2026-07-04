import CardHero, { type IProps } from "./CardHero";
import hero from "/images/heroImage.png"
const dataHero: IProps[] = [
  {
    title: "Best products",
    details: "View more",
    img: "/images/airpad.png",
    color:"bg-orange-200"
  },
  {
    title: "20% discounts",
    details: "View more",
    img: "/images/watchBand.png",
    color:"bg-blue-200"
  },
];
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
      <div className="flex flex-col sm:flex-row justify-center items-center bg-t-green-200 rounded-2xl">
        <div className="p-5 sm:p-16 flex flex-col gap-4 items-start">
          <div className="flex items-center gap-3 bg-t-green-300 text-t-green-600 pr-4 p-1 rounded-full text-xs sm:text-sm">
            <span className="bg-t-green-600 px-3 py-1  rounded-full text-white text-xs">
              NEWS
            </span>
            Free Shipping on Orders Above $50!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-right transition-all"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </div>
          <h2 className="text-3xl sm:text-5xl leading-[1.2] font-medium bg-linear-to-r from-t-slate-600 to-[#A0FF74] bg-clip-text text-transparent max-w-xs  sm:max-w-md">
            Gadgets you'll love. Prices you'll trust.
          </h2>
          <div className="text-t-slate-700 text-sm font-medium ">
            <p>Starts from</p>
            <p className="text-3xl">$4.90</p>
          </div>
          <button className="bg-t-slate-700 text-white text-sm py-2.5 px-7 sm:py-5 sm:px-12  rounded-md hover:bg-t-slate-900 hover:scale-103 active:scale-95 transition">
            LEARN MORE
          </button>
        </div>
        <img
          loading="lazy"
          decoding="async"
          data-nimg="1"
          className=" text-transparent"
          src={hero}
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center">
        {dataHero.map((item,index) => (
          <CardHero key={index} title={item.title} details={item.details} img={item.img} color={item.color}/>
        ))}
      </div>
    </div>
  );
};

export default Hero;
