import choose from "./../../../public/images/choose.png";

const strategies = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque assumenda cupiditate, commodi voluptas in ducimus maxime quod cum. Rerum facere vero libero eveniet ipsum",
    image: choose,
  },
  {
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque assumenda cupiditate, commodi voluptas in ducimus maxime quod cum. Rerum facere vero libero eveniet ipsum",
    image: choose,
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque assumenda cupiditate, commodi voluptas in ducimus maxime quod cum. Rerum facere vero libero eveniet ipsum",
    image: choose,
  },
  {
    title: "Lorem ipsum dolor sit",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam atque assumenda cupiditate, commodi voluptas in ducimus maxime quod cum. Rerum facere vero libero eveniet ipsum",
    image: choose,
  },
];

export const MarketingStrategies = () => {
  return (
    <>
      <h2 className="text-5xl font-semibold text-primary sm:mt-10">
        Wont to boost your business growth ?
      </h2>
      <h2 className="text-7xl font-semibold text-primary mt-10 sm:text-5xl">
        The <b className="text-secondary">SOLUTION</b> is here...
      </h2>
      <p className="text-gray-600 text-xl mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores
        optio ipsam, deserunt beatae cupiditate, similique est qui facilis
        quidem possimus vel voluptatum rerum asperiores incidunt aperiam nemo
        suscipit minus excepturi ducimus dolorem? Quod harum eum amet incidunt
        labore consectetur doloribus laboriosam, quo quae, et dicta quis fugit.
        Omnis, repudiandae modi libero veniam adipisci officia ex? Autem facere
        nulla cumque!
      </p>
      <div className="grid grid-cols-2 gap-10 mt-10 sm:grid-cols-1">
        {strategies.map((item, index) => (
          <div
            key={index}
            className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300"
          >
            <h2 className="mx-20 text-center -mt-8 bg-white border-primary border text-2xl rounded text-secondary py-2 uppercase sm:mx-5">
              {item.title}
            </h2>
            <img src={item.image} alt="" className="w-24 h-24" />
            <p className="text-gray-600 text-md hover:text-primary">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
