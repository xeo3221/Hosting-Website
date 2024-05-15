import banner from "../assets/images/banner.png";

export const Banner = () => {
  return (
    <div className="flex h-[60vh] w-full flex-col items-center justify-center gap-16 px-8 py-16 md:h-[65vh] md:px-20">
      <div
        className="relative grid h-full w-full place-items-center rounded-xl bg-cover bg-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="z-50 max-w-3xl text-center text-4xl font-bold md:text-6xl">
          Best Way To Make Sure Your Business Is Successfull And Safe
        </div>
        <div className="absolute left-0 top-0 z-20 h-full w-full rounded-xl bg-black opacity-50"></div>
      </div>
    </div>
  );
};
