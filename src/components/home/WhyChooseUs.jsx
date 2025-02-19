import bgImg from "../../assets/hero/living.jpg";
const WhyChooseUsSection = () => {
  return (
    <div
      className="xl:max-w-[1300px] mx-auto flex md:flex-row items-center md:justify-around flex-col-reverse gap-y-8 md:gap-y-0 pt-6 pb-10 md:pt-10"
      id="donation-section"
    >
      <div className="w-[90vw] md:w-[40vw]">
        <p className="text-lg lg:text-xl font-bold text-accentHover nunitoSans-font mb-4 w-[320px] sm:w-full">
          Live life to the fullest
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-primary nanumMyeongjo-font mb-6 w-[320px] sm:w-full">
          Why Choose Us
        </h2>
        <p className="text-md lg:text-lg text-gray-600 w-[320px] sm:w-full">
          We believe in providing a comfortable and safe environment for all our
          borders. We offer a range of services to ensure that you have a
          comfortable and relaxing stay. From our friendly staff to our clean
          and well-maintained rooms, we strive to provide the best possible
          experience for you. Our team is dedicated to ensuring that you have a
          comfortable and enjoyable stay.
        </p>
        <div className="flex justify-start items-center mt-8">
          <button
            onClick={() =>
              window.open(
                "https://www.booking.com/hostels/index.html",
                "_blank"
              )
            }
            className="bg-secondary dark:bg-gray-500 dark:hover:bg-gray-600 hover:bg-blue-800 text-white text-2xl font-semibold px-5 py-2 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>

      <div className="w-[90vw] md:w-[40vw] relative">
        <img
          className="h-[350px] sm:h-[420px] w-[750px] rounded-xl object-cover"
          src={bgImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
