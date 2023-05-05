import icon from "./../../../public/images/icon.png";

const items = [
  {
    title: "Web development",
    icon: icon,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam velit distinctio doloribus eos consequatur nostrum ullam molestiae officiis asperiores!",
  },
  {
    title: "Mobile development",
    icon: icon,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam velit distinctio doloribus eos consequatur nostrum ullam molestiae officiis asperiores!",
  },
  {
    title: "Digital marketing",
    icon: icon,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam velit distinctio doloribus eos consequatur nostrum ullam molestiae officiis asperiores!",
  },
  {
    title: "Graphic design",
    icon: icon,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima magnam velit distinctio doloribus eos consequatur nostrum ullam molestiae officiis asperiores!",
  },
];

export const WhatWeDo = () => {
  return (
    <div className="z-20 sm:mt-10">
      <h1 className="text-secondary text-8xl text-center z-20 font-semibold sm:text-5xl">
        What We Do ?
      </h1>
      <div className="h-96 w-full bg-primary mt-12"></div>
      <div className="grid grid-cols-4 sm:grid-cols-1 gap-10 mx-32 sm:mx-0 -mt-48 sm:w-full sm:px-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:selection:w-full"
          >
            <img src={item.icon} className="h-20 w-20" />
            <h1 className="text-2xl">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
