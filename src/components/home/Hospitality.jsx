import bgImg from "../../assets/hero/hospitality.jpg";
const HospitalitySection = () => {
  return (
    <div
      className="xl:max-w-[1300px] mx-auto flex md:flex-row items-center md:gap-x-10 md:justify-around flex-col gap-y-8 md:gap-y-0 py-10"
      id="donation-section"
    >
      <div className="w-[90vw] md:w-[40vw] relative">
        <img
          className="h-[350px] sm:h-[420px] w-[750px] rounded-xl object-cover"
          src={bgImg}
          alt=""
        />
      </div>
      <div className="w-[90vw] md:w-[40vw]">
        <p className="text-lg lg:text-xl font-bold text-accentHover nunitoSans-font mb-4 w-[320px] sm:w-full">
          Live with Comfort
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-primary nanumMyeongjo-font mb-6 w-[320px] sm:w-full">
          Where Every Stay is a Hug of Hospitality
        </h2>
        <p className="text-md lg:text-lg text-gray-600 w-[320px] sm:w-full">
          We believe in providing a comfortable and safe environment for all our
          borders. We offer a range of services to ensure that you have a
          comfortable and relaxing stay. From our friendly staff to our clean
          and well-maintained rooms, we strive to provide the best possible
          experience for you.
        </p>
        <div className="flex justify-start items-center mt-8">
          <button
            onClick={() =>
              window.open(
                "https://www.booking.com/hostels/index.html",
                "_blank"
              )
            }
            className="bg-secondary hover:bg-blue-800  dark:bg-gray-500 dark:hover:bg-gray-600 text-white text-2xl font-semibold px-5 py-2 rounded-lg"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalitySection;
