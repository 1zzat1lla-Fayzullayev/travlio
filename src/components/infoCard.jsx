import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import Wrapper from "../layout/wrapper";

function InfoCard() {
  return (
    <>
      <div className="bg-[#F4F5F7] p-10 min-[375px]:mt-[200px] min-[320px]:mt-[350px] md:mt-0">
        <Wrapper>
          <Swiper
            spaceBetween={20}
            slidesPerView="auto"
            breakpoints={{
              640: {
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
            <SwiperSlide>
              <div className="flex items-center gap-3">
                <img
                  src="/location-card.svg"
                  alt="Location Card"
                  className="w-[50px]"
                />
                <div>
                  <h4 className="text-[17px] font-[600] text-[#2c3f58]">
                    1,000+ Local Tours
                  </h4>
                  <p className="text-[#637082] text-[15px]">
                    Morbi semper fames lobortis ac hac
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center gap-3">
                <img
                  src="/shine.svg"
                  alt="Winter Destinations"
                  className="w-[50px]"
                />
                <div>
                  <h4 className="text-[17px] font-[600] text-[#2c3f58]">
                    Winter Destinations
                  </h4>
                  <p className="text-[#637082] text-[15px]">
                    Morbi semper fames lobortis ac hac
                  </p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="flex items-center gap-3">
                <img
                  src="/face.svg"
                  alt="Happy Travelers"
                  className="w-[50px]"
                />
                <div>
                  <h4 className="text-[17px] font-[600] text-[#2c3f58]">
                    98% Happy Travelers
                  </h4>
                  <p className="text-[#637082] text-[15px]">
                    Morbi semper fames lobortis ac hac
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </Wrapper>
      </div>
    </>
  );
}

export default InfoCard;
