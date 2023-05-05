import choose from "./../../../public/images/choose.png";

const items = [
  {
    title: "Innovative and Passionate",
    image: choose,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis assumenda, facilis eos voluptatem expedita vitae!",
  },
  {
    title: "Good Return on Investment",
    image: choose,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi provident delectus esse nulla natus incidunt modi consectetur earum beatae molestiae.",
  },
  {
    title: "Seamless Customer Support",
    image: choose,
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur consectetur exercitationem repellat? Quasi at architecto voluptatum hic sed possimus? Cupiditate accusamus ut at architecto?",
  },
];

export const WhyChooseUs = () => {
  return (
    <div className="mx-32 sm:mx-3 mt-20 border shadow">
      <div className="bg-primary h-72 w-full flex justify-center items-center">
        <h1 className="text-7xl font-semibold text-white sm:text-4xl">
          Why Choose US
        </h1>
      </div>
      <div className="grid grid-cols-3 p-5 gap-10 sm:grid-cols-1">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300"
          >
            <img src={item.image} className="h-20 w-20" />
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
