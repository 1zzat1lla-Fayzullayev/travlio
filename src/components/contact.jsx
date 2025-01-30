
function Contact() {
  return (
    <section className="mt-[50px] w-full contact text-white flex items-center justify-center bg-[#FF5722] py-12">
      <div className="w-full flex justify-between max-w-[1200px] mx-auto px-[20px]">
        <div className="w-full flex justify-between">
          <div className="flex flex-col md:flex-row items-center justify-between w-full ">
            <div className="w-full text-center md:text-left">
              <h2 className="text-3xl font-[600] mb-1">
                Get New Jobs Notification!
              </h2>
              <p className="text-[15px]">
                Subscribe & get all related jobs notification.
              </p>
            </div>

            <div className="w-full mt-[10px] md:mt-0">
              <form className="flex flex-col md:flex-row">
                <input
                  type="email"
                  name="EMAIL"
                  placeholder="Enter your Email.."
                  className="w-full md:w-auto flex-grow px-4 py-5 focus:outline-none bg-white text-black"
                />
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-2 bg-[#141c26] text-white focus:outline-none"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
