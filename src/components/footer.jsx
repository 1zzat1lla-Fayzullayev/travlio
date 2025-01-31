import Wrapper from "../layout/wrapper";

function Footer() {
  return (
    <div className="bg-[#252C41] ">
      <Wrapper>
        <section className="py-12">
          <div className="">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/5 px-4 mb-8">
                <div className="logo mb-6">
                  <a href="http://demoapus-wp1.com/travlio/">
                    <img
                      src="/logo_footer.png"
                      alt="Travlio Logo"
                      className="w-[150px]"
                    />
                  </a>
                </div>
                <div className="text-sm mb-2 text-[#858B9F] font-[600]">
                  Email:
                </div>
                <div className="text-sm mb-4 text-[#858B9F]">
                  hello@travlio.com
                </div>
                <div className="text-sm mb-2 text-[#858B9F] font-[600]">
                  Call:
                </div>
                <div className="text-sm mb-4 text-[#858B9F]">
                  +91 855 742 6789
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-400">
                    <img
                      src="/facebook-176-svgrepo-com.svg"
                      className="w-[20px]"
                    />
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <img
                      src="/twitter-154-svgrepo-com.svg"
                      className="w-[20px]"
                    />
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <img
                      src="/youtube-168-svgrepo-com.svg"
                      className="w-[20px]"
                    />
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <img
                      src="/linked-in-logo-of-two-letters-svgrepo-com.svg"
                      className="w-[20px]"
                    />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="w-full md:w-1/5 px-4 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">
                  Quick Links
                </h2>
                <ul className="text-sm text-[#858B9F]">
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/about/">About</a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/contact/">
                      Contact
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/my-account/">
                      My Account
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/confirmation/">
                      Confirmation
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/terms-conditions/">
                      Terms & Conditions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Categories */}
              <div className="w-full md:w-1/5 px-4 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">
                  Categories
                </h2>
                <ul className="text-sm text-[#858B9F]">
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/category/travel/">
                      Travel
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/category/lifestyle/">
                      Lifestyle
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/category/fashion/">
                      Fashion
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/category/destinations/">
                      Destinations
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/category/food-drink/">
                      Food & Drink
                    </a>
                  </li>
                </ul>
              </div>

              {/* Useful Links */}
              <div className="w-full md:w-1/5 px-4 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">
                  Useful Links
                </h2>
                <ul className="text-sm text-[#858B9F]">
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/categories/tour/">
                      Tour
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/categories/event/">
                      Event
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/categories/hostel/">
                      Hostel
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/categories/car/">
                      Car
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="http://demoapus-wp1.com/travlio/categories/hotel/">
                      Hotel
                    </a>
                  </li>
                </ul>
              </div>

              {/* Download Apps */}
              <div className="w-full md:w-1/5 px-4 mb-8">
                <h2 className="text-lg font-semibold mb-4 text-white">
                  Download Apps
                </h2>
                <div className="space-y-4">
                  <a
                    href="#"
                    className="flex items-center space-x-2 border border-[#353d56] p-3 transition-all ease-in hover:border-[#ffffff4d]"
                  >
                    <img src="/android.svg" className="w-[30px]" />
                    <div>
                      <div className="text-sm text-white">Google Play</div>
                      <div className="text-xs text-gray-400">Get It Now</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 border border-[#353d56] p-3 transition-all ease-in hover:border-[#ffffff4d]"
                  >
                    <img src="/app-store.svg" className="w-[30px]" />
                    <div>
                      <div className="text-sm text-white">App Store</div>
                      <div className="text-xs text-gray-400">
                        Now it Available
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Wrapper>
      {/* Bottom Section */}
      <section className="bg-[#1B2132] py-6">
        <Wrapper>
          <div className="flex flex-wrap -mx-4 items-center">
            <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
              <div className="text-sm text-center md:text-left text-[#858B9F]">
                © Copyright 2020 travlio – Powered By{" "}
                <a href="#" className="text-[#858B9F]">
                  ApusTheme
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="flex justify-center md:justify-end">
                <a href="#">
                  <img
                    src="http://demoapus-wp1.com/travlio/wp-content/uploads/2020/08/payment.svg"
                    alt="Payment Methods"
                    className="w-full h-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}

export default Footer;
