

export interface IProps{
    title:string,
    details:string,
    img:string,
    color:string
}

const CardHero = ({title,details,img,color}:IProps) => {
  return (
    <div className={`flex items-center justify-between p-4 rounded-2xl ${color}`}>
      <div className="flex flex-col gap-2 items-start justify-start">
        <p className="text-3xl font-medium bg-linear-to-r from-t-slate-800 to-[#FFAD51] bg-clip-text text-transparent">
          {title}
        </p>
        <p className="flex items-center gap-1 ">
            {details}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right group-hover:ml-2 transition-all"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </p>
      </div>
      <img loading="lazy" width={150} height={150} src={img} alt="" />
    </div>
  );
};

export default CardHero;
