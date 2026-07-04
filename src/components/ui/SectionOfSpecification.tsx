interface ICard {
  title: string;
  bgCard: string;
  borderCard: string;
  description: string;
  bgIcon: string;
  children: React.ReactNode;
}
const SectionOfSpecification = ({
  title,
  bgCard,
  borderCard,
  description,
  bgIcon,
  children,
}: ICard) => {
  return (
    <div
      className={`${bgCard} border ${borderCard} relative flex flex-col justify-center items-center text-center p-10 gap-4 rounded-xl`}
    >
      <h1 className="text-t-slate-900 text-xl font-medium">{title}</h1>
      <p className=" text-t-slate-800">{description}</p>
      <i
        className={`absolute -top-5 text-2xl text-white ${bgIcon} p-2 rounded-lg`}
      >
        {children}
      </i>
    </div>
  );
};

export default SectionOfSpecification;
