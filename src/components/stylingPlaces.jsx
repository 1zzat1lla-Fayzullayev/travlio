import Wrapper from "../layout/wrapper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function StylingPlaces() {
  const places = [
    {
      image: "/card1.jpg",
      title: "Warwick Castle Trip",
      discount: "Discount 5%",
      price: "$142.50",
    },
    {
      image: "/card2.jpg",
      title: "London Eye Tour",
      discount: "Discount 10%",
      price: "$120.00",
    },
    {
      image: "/card3.jpg",
      title: "Stonehenge Visit",
      discount: "Discount 7%",
      price: "$95.00",
    },
    {
      image: "/card3.jpg",
      title: "Stonehenge Visit",
      discount: "Discount 7%",
      price: "$95.00",
    },
  ];

  return (
    <>
      <div className="bg-[#F7F9FC] mt-[100px] py-4">
        <Wrapper>
          <div className="text-center mb-8 relative mt-[100px]">
            <p className=" text-[#2C3F58] lora text-[17px] md:text-[20px]">
              Best Staying Places
            </p>
            <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">
              Top Staying Places
            </h2>
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {places.map((place, index) => (
              <SwiperSlide key={index}>
                <div className="w-full rounded-[10px] relative overflow-hidden mb-[50px]">
                  <div className="relative transition-all ease-in transform hover:scale-105">
                    <img
                      src={place.image}
                      alt={place.title}
                      className="rounded-[10px] object-cover min-[768px]:w-[400px] h-[350px]"
                    />
                    <div className="bg-[#00000063] absolute left-0 top-0 inset-0 rounded-[10px]"></div>
                  </div>
                  <div className="inline-block absolute bg-[#ff5722] py-[4px] px-[15px] rounded-[50px] top-[15px] right-[15px] font-[500] text-white text-[14px]">
                    {place.discount}
                  </div>
                  <div className="absolute bottom-[15px] left-[15px] text-white">
                    <h3 className="text-[20px] mb-[5px] font-[600]">
                      {place.title}
                    </h3>
                    <div className="tour_info_price">
                      <span className="tour_info_price_new">
                        <span
                          className="font-[500]"
                          data-amount={place.price.replace("$", "")}
                        >
                          <span className="currency_symbol">$</span>
                          {place.price.replace("$", "")}
                        </span>
                      </span>
                      <span> / ticket</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Wrapper>
      </div>
    </>
  );
}

export default StylingPlaces;
