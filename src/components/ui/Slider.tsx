const items: string[] = [
  "Headphones",
  "Speakers",
  "Watch",
  "Earbuds",
  "Mouse",
  "Decoration",
];
const allItems: string[] = [...items, ...items, ...items];
const Slider = () => {
  return (
    <div className=" overflow-hidden relative w-full">
      <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-white to-transparent"></div>
      <div className="flex  gap-4 animate-marquee">
        {allItems.map((item, index) => (
          <button
            key={index}
            className="whitespace-nowrap rounded-lg bg-slate-100 px-5 py-2"
          >
            {item}
          </button>
        ))}
      </div>
      <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-linear-to-r from-transparent to-white"></div>
      
    </div>
  );
};

export default Slider;
