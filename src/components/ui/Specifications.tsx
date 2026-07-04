
import { LuSend } from "react-icons/lu";
import SectionOfSpecification from "./SectionOfSpecification";
import { WiTime4 } from "react-icons/wi";
import { FaHeadphones } from "react-icons/fa";

const section = [
  {
    id:1,
    title: "Free Shipping",
    bgCard: "bg-green-50",
    borderCard: "border-t-green-200",
    description:
      "Enjoy fast, free delivery on every order ,reliable doorstep.",
    bgIcon: "bg-t-green-500",
    Icon: <LuSend />,
  },
  {
    id:2,
    title: "7 Days easy Return",
    bgCard: "bg-orange-50",
    borderCard: "border-orange-200",
    description: "Change your mind? No worries. Return any item within 7 days.",
    bgIcon: "bg-orange-500",
    Icon: <WiTime4 />,
  },
  {
    id:3,
    title: "24/7 Customer Support",
    bgCard: "bg-purple-50",
    borderCard: "border-purple-200",
    description:"We're here for you. Get expert help with our customer support.",
    bgIcon: "bg-purple-500",
    Icon: <FaHeadphones />,
  },
];
const Specifications = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col  justify-center items-center pt-4 sm:gap-4 gap-4">
        <h1 className="text-t-slate-900 text-2xl font-medium">
          Our Specifications
        </h1>
        <div className="flex flex-col text-center gap-3 sm:gap-5">
          <p className="text-t-slate-600 ">
            We offer top-tier service and convenience to ensure your shopping
            experience is smooth, secure and completely hassle-free.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10">{section.map((item)=>(
        <SectionOfSpecification key={item.id} bgCard={item.bgCard} bgIcon={item.bgIcon} borderCard={item.borderCard} title={item.title} description={item.description}>{item.Icon}</SectionOfSpecification>
      ))}</div>
    </div>
  );
};

export default Specifications;
