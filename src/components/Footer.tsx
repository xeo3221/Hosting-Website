export const Footer = () => {
  const footerLinks = ["Terms and Conditions", "Services", "Contact", "FAQ"];
  return (
    <div className="flex w-full flex-col items-center justify-between gap-3 bg-slate-800 px-10 py-3 md:flex-row md:gap-0">
      <span className="z-50 cursor-pointer text-3xl font-bold text-white">
        Hostify
      </span>
      <div className="flex items-center gap-5">
        {footerLinks.map((link) => (
          <a
            href="#"
            className="text-sm font-medium text-white no-underline transition-all duration-300 hover:text-violet-300"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};
