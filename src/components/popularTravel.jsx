/* eslint-disable react/prop-types */
import Wrapper from "../layout/wrapper";

const TravelCard = ({
  title,
  location,
  skidka,
  price,
  starCount,
  foiz,
  img,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= starCount) {
        stars.push(<i key={i} className="fa fa-star text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o text-yellow-400"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="relative w-full mb-8">
      <div className="overflow-hidden">
        <img
          src={img}
          className="w-full transition-all ease-in object-cover hover:scale-105 transform rounded-[10px] hover:rounded-[10px]"
          alt={title}
        />
      </div>
      <div className="bg-white shadow-xl mx-auto absolute left-0 right-0 bottom-[-50px] rounded-[5px] p-2 md:p-5 max-w-[350px] w-full transition-all ease-in transform">
        {foiz && <div className="tour_info_price_discount">{foiz}</div>}
        <div className="flex items-center gap-2">
          {renderStars()}
          <span>{starCount}</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-[16px] md:text-[17px] font-bold transition-all ease-in hover:text-[#ff5722] cursor-pointer">
              {title}
            </h4>
            <div className="flex items-center gap-2">
              <img src="/location.svg" className="w-[15px]" alt="Location" />
              <span className="text-gray-600 text-[14px] md:text-[16px]">{location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            {skidka && (
              <span className="line-through text-gray-500">{skidka}</span>
            )}
            <p className="font-bold">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function PopularTravel() {
  const travelData = [
    {
      title: "Warwick Castle Trip",
      location: "35 Whitefriars St, London",
      skidka: "$150",
      price: "$142.50",
      starCount: 5,
      foiz: "5% Off",
      img: "/card1.jpg",
    },
    {
      title: "Thames 24 Hour River Cruise",
      location: "95 Fleet St, London EC4Y 1DH",
      skidka: "$50",
      price: "$45",
      starCount: 4,
      foiz: "10% Off",
      img: "/card2.jpg",
    },
    {
      title: "Seine River Evening",
      location: "14-28 Rue de Choiseul, Paris",
      skidka: "$115",
      price: "$109.25",
      starCount: 5,
      foiz: "5% Off",
      img: "/card3.jpg",
    },
    {
      title: "New York City Sunset",
      location: "2538 95th St East Elmhurst, NY",
      skidka: "$100",
      price: "$90",
      starCount: 4,
      foiz: "10% Off",
      img: "/card4.jpg",
    },
    {
      title: "Manhattan Sky Tour",
      location: "31st Ave East Elmhurst, NY",
      skidka: "",
      price: "$60",
      starCount: 3,
      foiz: "",
      img: "/card5.jpg",
    },
    {
      title: "Inside Park Bike Tour",
      location: "84th St East Elmhurst, NY",
      skidka: "$95",
      price: "$90.25",
      starCount: 4,
      foiz: "5% Off",
      img: "/card6.jpg",
    },
  ];

  return (
    <>
      <Wrapper>
        <div className="text-center mb-8 relative mt-[100px]">
          <p className=" text-[#2C3F58] lora text-[17px] md:text-[20px]">Popular Travel Packages</p>
          <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">Top Cities for Travel</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {travelData.map((item, index) => (
            <TravelCard key={index} {...item} />
          ))}
        </div>
      </Wrapper>
    </>
  );
}

export default PopularTravel;