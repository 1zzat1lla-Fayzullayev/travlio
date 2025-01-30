import { useState } from "react";
import Wrapper from "../layout/wrapper";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CSSTransition } from "react-transition-group";

function Header() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [adults, setAdults] = useState(0);
  const [youth, setYouth] = useState(0);
  const [children, setChildren] = useState(0);
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [totalGuests, setTotalGuests] = useState(0);

  const handleDateClick = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    if (start && end) {
      setShowDatePicker(false);
    }
  };

  const handleGuestClick = () => {
    setShowGuestPicker(!showGuestPicker);
  };

  const handleApplyGuests = () => {
    setTotalGuests(adults + youth + children);
    setShowGuestPicker(false);
  };

  return (
    <div className="relative h-[70vh] lg:h-screen 2xl:h-[70vh] bg-cover bg-center bg-no-repeat header-bg">
      <div className="absolute inset-0 bg-[#0F1F44] opacity-60"></div>
      <Wrapper>
        <div className="relative flex flex-col items-center justify-center h-full pt-[200px] 2xl:pt-[350px]">
          <h1 className="text-white text-[25px] md:text-[30px] lg:text-[50px] font-semibold text-center">
            Ready to start your exciting journey.
          </h1>
          <p className="text-white mt-4 text-center max-w-lg">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium
          </p>

          <form className="mt-8 bg-white rounded-lg shadow-lg flex gap-4 items-center justify-between flex-col lg:flex-row w-full lg:w-auto">
            <div className="lg:border-r lg:border-r-[#e9edf5] lg:border-b-none border-b-[#e9edf5] p-6">
              <div className="flex items-center gap-2 rounded-lg p-2 w-full sm:w-auto">
                <img src="/location.svg" className="w-[25px]" />
                <select className="bg-transparent focus:outline-none">
                  <option>All Destinations</option>
                  <option>Amsterdam</option>
                  <option>London</option>
                  <option>New York</option>
                  <option>Paris</option>
                </select>
              </div>
            </div>

            <div className="lg:border-r lg:border-r-[#e9edf5] lg:border-b-none border-b-[#e9edf5] p-6">
              <div
                className="flex items-center gap-2 rounded-lg w-full sm:w-auto cursor-pointer"
                onClick={handleDateClick}
              >
                <img src="/date.svg" className="w-[25px]" />
                <span className="focus:outline-none">
                  {startDate
                    ? `${startDate.toLocaleDateString()}`
                    : "Date from"}
                </span>
              </div>
            </div>

            <div className="lg:border-r lg:border-r-[#e9edf5] lg:border-b-none border-b-[#e9edf5] p-6">
              <div
                className="flex items-center gap-2 rounded-lg w-full sm:w-auto cursor-pointer"
                onClick={handleDateClick}
              >
                <img src="/date.svg" className="w-[25px]" />
                <span className="focus:outline-none">
                  {endDate ? `${endDate.toLocaleDateString()}` : "Date to"}
                </span>
              </div>
            </div>

            <div className="p-6">
              <div
                className="relative rounded-lg flex items-center p-2 cursor-pointer"
                onClick={handleGuestClick}
              >
                <img src="/user-icon.svg" className="w-[25px]" />
                <span>Guest {totalGuests}</span>
              </div>

              {showGuestPicker && (
                <div className="absolute bg-white border border-[#ddd] p-4 shadow-lg top-[100%] lg:right-[285px] left-0 lg:left-[58%] right-0 lg:max-w-[200px] w-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span>{adults}</span>

                      <span>Adult</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setAdults(Math.max(0, adults - 1))}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </button>
                        <button
                          onClick={() => setAdults(adults + 1)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{youth}</span>

                      <span>Youth</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setYouth(Math.max(0, youth - 1))}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </button>
                        <button
                          onClick={() => setYouth(youth + 1)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>{adults}</span>

                      <span>Children</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setChildren(Math.max(0, adults - 1))}
                          className="bg-gray-200 px-2 rounded"
                        >
                          -
                        </button>
                        <button
                          onClick={() => setChildren(adults + 1)}
                          className="bg-gray-200 px-2 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleApplyGuests}
                    className="bg-[#263547] text-white px-4 py-2 rounded-[5px] mt-4 w-full"
                  >
                    Apply
                  </button>
                </div>
              )}
            </div>

            <div className="w-full lg:w-[200px] h-[70px] lg:h-[90px] cursor-pointer rounded-r-lg">
              <button className="bg-[#ff5722] cursor-pointer rounded-lg lg:rounded-none lg:rounded-r-lg text-white transition w-full h-full">
                Search
              </button>
            </div>
          </form>

          <CSSTransition
            in={showDatePicker}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="absolute top-[100%] bg-white border border-[#ddd] p-4 rounded-lg shadow-lg">
              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                monthsShown={2}
                dropdownMode="select"
                dayClassName={(date) =>
                  date < new Date(new Date().setHours(0, 0, 0, 0))
                    ? "line-through text-[#999] cursor-not-allowed pointer-events-none"
                    : ""
                }
                minDate={new Date()}
              />

              <div className="flex justify-between flex-col gap-3 lg:flex-row gap-0 items-center mt-4 mx-[25px]">
                <div className="flex items-center gap-2">
                  <img src="/time.svg" alt="" className="w-5 h-5" />
                  <span className="text-gray-700 font-semibold">Start at</span>
                  <select className="border p-2 rounded-md">
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i}>{`${
                        i < 10 ? `0${i}` : i
                      }:00`}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <img src="/time.svg" alt="" className="w-5 h-5" />
                  <span className="text-gray-700 font-semibold">End at</span>
                  <select className="border p-2 rounded-md">
                    {Array.from({ length: 24 }, (_, i) => (
                      <option key={i} value={i}>{`${
                        i < 10 ? `0${i}` : i
                      }:00`}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-center items-center py-4 mt-4 bg-white border-t border-[#ddd]">
                <button
                  className="bg-[#e44343] font-[500] rounded-[3px] py-[10px] px-[20px] text-white mr-2"
                  onClick={() => {
                    setStartDate(null);
                    setEndDate(null);
                    setShowDatePicker(false);
                  }}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#263547] font-[500] rounded-[3px] py-[10px] px-[20px] text-white"
                  onClick={() => setShowDatePicker(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </CSSTransition>
        </div>
      </Wrapper>
    </div>
  );
}

export default Header;
