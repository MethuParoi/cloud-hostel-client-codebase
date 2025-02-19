import { SiComma } from "react-icons/si";
import img1 from "../../assets/hero/testimonials_01.jpg";
import img2 from "../../assets/hero/testimonials_02.jpg";

const Testimonials = () => {
  return (
    <div
      className="xl:max-w-[1300px] mx-auto flex lg:flex-row items-center lg:gap-x-10 md:justify-around flex-col-reverse gap-y-6 lg:gap-y-0 py-16 dark:text-gray-200"
      id="donation-section"
    >
      <div className="w-[90vw] lg:w-[34vw]">
        <div className="flex justify-start">
          <SiComma className="text-5xl text-gray-500" />
          <SiComma className="text-5xl text-gray-500 ml-[-15px]" />
        </div>
        <p className="text-lg text-gray-600  bg-gray-200 p-5 rounded-xl lg:line-clamp-6 xl:line-clamp-none">
          This hostel creates a warm and welcoming atmosphere. The staffs are
          very friendly, and the rooms are comfortable. I would recommend this
          hostel to anyone looking for a great place to stay.
        </p>
        <div className="flex justify-end items-center mt-5">
          <div className="flex flex-col items-end">
            <p className="text-gray-700 dark:text-gray-200 font-semibold mr-3 text-2xl">
              Ann Peterson
            </p>
            <p className="nunitoSans-font text-secondary dark:text-gray-400 font-semibold text-3xl mr-3">
              Border
            </p>
          </div>
          <img
            className="w-16 h-16 rounded-full border-4 border-secondary"
            src={img1}
            alt=""
          />
        </div>
      </div>
      <div className="w-[90vw] lg:w-[32vw]">
        <div className="flex justify-start">
          <SiComma className="text-5xl text-gray-500" />
          <SiComma className="text-5xl text-gray-500 ml-[-15px]" />
        </div>
        <p className="text-lg text-gray-600  bg-gray-200 p-5 rounded-xl lg:line-clamp-6 xl:line-clamp-none">
          I had a great experience at this hostel. The staff was friendly and
          helpful, and the rooms were clean and comfortable. I would definitely
          recommend this hostel to anyone looking for a place to stay in the
          area.
        </p>
        <div className="flex justify-end items-center mt-5">
          <div className="flex flex-col items-end">
            <p className="text-gray-700 dark:text-gray-200 font-semibold mr-3 text-2xl">
              John Doe
            </p>
            <p className="nunitoSans-font text-secondary dark:text-gray-400 font-semibold text-3xl mr-3">
              Border
            </p>
          </div>
          <img
            className="w-16 h-16 rounded-full border-4 border-secondary"
            src={img2}
            alt=""
          />
        </div>
      </div>

      <div className="w-[90vw] lg:w-[40vw] lg:ml-10">
        <p className="text-lg lg:text-xl font-bold text-accentHover nunitoSans-font mb-4 w-[320px] sm:w-full">
          testimonials
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold text-primary nanumMyeongjo-font mb-6 w-[320px] sm:w-full">
          What People Say <span className="xl:block">About Us</span>
        </h2>
        <p className="text-md lg:text-lg text-gray-600 w-[320px] sm:w-full">
          Our hostel has received many positive reviews from our guests. Here
          are some testimonials from people who have stayed with us.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
