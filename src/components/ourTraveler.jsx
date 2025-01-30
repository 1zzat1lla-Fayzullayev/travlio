import { Swiper, SwiperSlide } from "swiper/react";
import Wrapper from "../layout/wrapper";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function OurTraveler() {
  const users = [
    {
      image: "/user1.jpg",
      name: "John Doe",
      job: "Designer",
      desc: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non.",
      rating: 5,
    },
    {
      image: "/user2.jpg",
      name: "Lori Ramos",
      job: "Frontend Developer",
      desc: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non.",
      rating: 4,
    },
    {
      image: "/user3.jpg",
      name: "Dominikus Yuri",
      job: "UI – UX Designer",
      desc: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non.",
      rating: 5,
    },
    {
      image: "/user4.jpg",
      name: "Peter Hawkins",
      job: "Content Writer",
      desc: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non.",
      rating: 3,
    },
    {
      image: "/user5.jpg",
      name: "Deanna Rose",
      job: "Marketing",
      desc: "Faucibus tristique felis potenti ultrices ornare rhoncus semper hac facilisi Rutrum tellus lorem sem velit nisi non.",
      rating: 4,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<i key={i} className="fa fa-star text-yellow-400"></i>);
      } else {
        stars.push(<i key={i} className="fa fa-star-o text-yellow-400"></i>);
      }
    }
    return stars;
  };

  return (
    <>
      <Wrapper>
        <div className="text-center mb-8 relative mt-[100px]">
          <p className="text-[#2C3F58] lora text-[17px] md:text-[20px]">
            What Our Clients Saying
          </p>
          <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">
            Our Traveler Says
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
          {users.map((user, index) => (
            <SwiperSlide key={index}>
              <div className="w-full rounded-[10px] relative flex flex-col items-center text-center p-4 mb-[50px] select-none user_card transition-all ease-in">
                <div className="relative transition-all ease-in transform">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="rounded-[50%] object-cover w-[80px] h-[80px] transition-all ease-in user_img"
                  />
                </div>

                <div className="text-black mt-4">
                  <h3 className="text-[20px] mb-[5px] font-[600]">
                    {user.name}
                  </h3>
                  <p className="text-[#666]">{user.job}</p>
                  <div className="flex justify-center my-2">
                    {renderStars(user.rating)}
                  </div>
                  <p className="text-[#666]">{user.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
}

export default OurTraveler;
