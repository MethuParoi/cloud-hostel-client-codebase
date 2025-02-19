import img1 from "../../assets/hero/hostel-room-1.jpg";
import img2 from "../../assets/hero/hostel-room-2.png";
import img3 from "../../assets/hero/hostel-room-3.jpg";
import img4 from "../../assets/hero/living.jpg";

const Features = () => {
  return (
    <div className="xl:max-w-[1300px] mx-auto mt-10 mb-20">
      <h2 className="text-3xl font-semibold text-center border-b-2 border-gray-500 w-[320px] mx-auto">
        Choose Your Room
      </h2>

      <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:grid-rows-2 my-10 gap-y-6 sm:gap-8 justify-items-center px-4">
        {/* item-1 */}
        <div
          onClick={() =>
            window.open("https://www.booking.com/hostels/index.html", "_blank")
          }
          className="col-span-2 row-span-2 relative group cursor-pointer md:h-[700px]"
        >
          <img src={img1} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary bg-opacity-20 group-hover:bg-opacity-35 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white absolute bottom-5 md:bottom-14 md:left-10 left-5">
              Double Room with Balcony
            </h3>
          </div>
        </div>
        {/* item-2 */}
        <div
          onClick={() =>
            window.open("https://www.booking.com/hostels/index.html", "_blank")
          }
          className=" relative group cursor-pointer md:h-[330px]"
        >
          <img src={img2} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary bg-opacity-20 group-hover:bg-opacity-35 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white absolute bottom-5 left-5">
              Bunker Room
            </h3>
          </div>
        </div>
        {/* item-3 */}
        <div
          onClick={() =>
            window.open("https://www.booking.com/hostels/index.html", "_blank")
          }
          className=" relative group cursor-pointer md:h-[330px]"
        >
          <img src={img3} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary bg-opacity-20 group-hover:bg-opacity-35 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white absolute bottom-5 left-5">
              Double Room
            </h3>
          </div>
        </div>
        {/* item-4 */}
        <div
          onClick={() =>
            window.open("https://www.booking.com/hostels/index.html", "_blank")
          }
          className="col-span-2 relative group cursor-pointer md:h-[330px] w-full"
        >
          <img src={img4} alt="img" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary bg-opacity-20 group-hover:bg-opacity-35 transition duration-300"></div>
          {/* text */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-white absolute bottom-5 md:bottom-14 md:left-10 left-5">
              Living Room
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
