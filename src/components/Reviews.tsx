import { Star } from "react-feather";
import user from "../assets/images/user.png";

export const Reviews = () => {
  const reviews = [
    {
      name: "Adam Smith",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: user,
      stars: 4,
    },
    {
      name: "Tom Johnson",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: user,
      stars: 5,
    },
    {
      name: "Peter Parker",
      comment: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      image: user,
      stars: 4,
    },
  ];

  return (
    <div className=" flex w-full flex-col items-center justify-center gap-16 px-8 py-16 md:px-20">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className=" text-center text-3xl font-bold text-indigo-200">
          What Our Customers Say
        </div>
        <p className=" max-w-2xl text-center text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          provident!
        </p>
      </div>
      <div className="md:px-18 flex w-full flex-col items-center justify-evenly gap-10 text-balance px-8 md:flex-row md:gap-3">
        {reviews.map(({ name, comment, image, stars }, index: number) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-center gap-4"
          >
            <img
              src={image}
              alt="user"
              className=" size-11 rounded-full border "
            />
            <div className=" text-center text-xl font-bold text-indigo-200">
              {name}
            </div>
            <div className=" text-center text-gray-300">{comment}</div>
            <div className=" flex items-center justify-center gap-2">
              {[...Array(Math.floor(stars))].map((_, index) => (
                <Star key={index} className="size-6" color={"#FFD700"} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
