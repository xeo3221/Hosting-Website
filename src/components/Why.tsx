import hardware from "../assets/images/hardware.jpg";

export const Why = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gray-800 lg:flex-row">
      <div className="flex w-full items-center justify-center p-8 sm:w-1/2 sm:p-0">
        <div className="m-6 flex flex-col gap-4 text-balance">
          <span className="tracking-wider text-indigo-200">INTRODUCTION</span>
          <div className="text-2xl font-bold text-white sm:text-3xl md:text-3xl">
            Why Choose us?
          </div>
          <p className="text max-w-xl text-justify font-extralight leading-8 text-gray-200 md:text-base">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            reiciendis. Laudantium possimus sint dolorem obcaecati eaque aperiam
            adipisci cupiditate iusto consectetur nam. Blanditiis voluptate
            impedit modi? Voluptate voluptatem sed fugiat, quibusdam iure animi
            a itaque dolorum iste, aperiam minus? Earum nihil laboriosam
            voluptas? Necessitatibus accusamus recusandae, dignissimos mollitia
            neque rerum.
          </p>
          <a href="#" className="mt-7 text-indigo-200">
            Learn More
          </a>
        </div>
      </div>
      <img src={hardware} alt="hardware" className="w-full lg:w-1/2" />
    </div>
  );
};
