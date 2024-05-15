import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";

export const Companies = () => {
  const icons = [
    "cibApple",
    "cibGithub",
    "cibAmazon",
    "cibWhatsapp",
    "cibWordpress",
  ];
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8 px-8 pb-16 pt-8 sm:px-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className=" text-center text-3xl font-bold text-indigo-200">
          Long Term Trusted Companies
        </div>
        <p className=" max-w-2xl text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          ratione velit repudiandae enim consectetur nisi necessitatibus dolor
          dolorem voluptatibus.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-evenly gap-3 pb-4 sm:gap-6">
        {icons.map((cibIcon) => (
          <CIcon
            icon={icon[cibIcon]}
            fill="white"
            className="size-8 cursor-pointer rounded-full hover:fill-slate-400 sm:size-12"
          />
        ))}
      </div>
    </div>
  );
};
