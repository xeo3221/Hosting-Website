import { User } from "react-feather";
import bg from "../assets/images/bg.jpg";

export const Header = () => {
  const navArray = ["Hosting", "Domains", "About", "Contact"];
  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center px-8 py-10 sm:h-full md:px-20"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute left-0 top-0 z-20 h-full w-full bg-black opacity-35"></div>
      <div className="flex w-full items-center justify-between">
        <div className="z-50 cursor-pointer text-xl font-bold text-white sm:text-3xl">
          Hostify
        </div>
        <div className="z-50 mx-4 hidden items-center gap-16 sm:flex">
          {navArray.map((nav, index: number) => (
            <a
              key={index}
              href="#"
              className="text-xl font-medium text-white no-underline transition-all duration-300 hover:text-violet-300"
            >
              {nav}
            </a>
          ))}
        </div>
        <User className="z-50 size-5 cursor-pointer text-white sm:hidden" />
      </div>
      <div className=" mt-36 flex w-full flex-col items-center justify-center gap-10 md:mt-[200px]">
        <div className=" z-50 text-center text-4xl font-bold text-white sm:max-w-[900px] sm:text-7xl">
          High Quality Cloud Hosting And Domain Services
        </div>
        <p className="text-md z-50 text-center font-extralight text-white sm:max-w-lg sm:text-2xl">
          Host your website in fastest servers and gain user's trust with ease
          and speed
        </p>
      </div>
    </div>
  );
};
