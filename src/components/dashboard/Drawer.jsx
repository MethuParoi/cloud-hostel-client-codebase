import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { CgProfile } from "react-icons/cg";
import { MdFastfood, MdFoodBank, MdOutlineRateReview } from "react-icons/md";
import { FaHistory, FaUserFriends } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { PiBowlFood } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Drawer = () => {
  //fetch is admin from the server
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.get(`/user/check-admin/${user?.email}`).then((res) => {
      console.log(res);
      if (res.data.admin === true) {
        setIsAdmin(true);
      }
    });
  }, [axiosSecure, user?.email]);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const getLinkClass = (path) => {
    return location.pathname === path ? "bg-blue-700" : "";
  };

  return (
    <div className="drawer lg:drawer-open  absolute top-0 left-0 lg:relative md:w-[300px] z-40">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" drawer-button lg:hidden absolute top-4 left-4"
        >
          <GiHamburgerMenu className="text-2xl text-red-300" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#3282B8] text-gray-300 font-semibold text-xl min-h-full w-72 p-4">
          {/* Sidebar content here */}
          <>
            <li
              onClick={() => navigate("/")}
              className="flex items-center justify-center"
            >
              <img className="w-32 h-28" src={logo} alt="logo" />
              <p className="text-3xl mt-[-25px] mb-5 text-accentHover">
                Cloud Hostel
              </p>
            </li>
          </>
          {isAdmin ? (
            // admin menubar
            <>
              <li
                onClick={() => navigate("/dashboard/overview")}
                className={getLinkClass("/dashboard/overview")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <CgProfile className="text-red-300 text-3xl" />
                  Overview
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/profile")}
                className={getLinkClass("/dashboard/profile")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <CgProfile className="text-red-300 text-3xl" />
                  Admin Profile
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/manage-users")}
                className={getLinkClass("/dashboard/manage-users")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <FaUserFriends className="text-red-300 text-3xl" />
                  Manage Users
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/add-meal")}
                className={getLinkClass("/dashboard/add-meal")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <IoIosAddCircleOutline className="text-red-300 text-3xl" />
                  Add Meal
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/all-meals")}
                className={getLinkClass("/dashboard/all-meals")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <MdFastfood className="text-red-300 text-3xl" />
                  All Meals
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/all-reviews")}
                className={getLinkClass("/dashboard/all-reviews")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <MdOutlineRateReview className="text-red-300 text-3xl" />
                  All Reviews
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/serve-meals")}
                className={getLinkClass("/dashboard/serve-meals")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <MdFoodBank className="text-red-300 text-3xl" />
                  Serve Meals
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/upcoming-meals")}
                className={getLinkClass("/dashboard/upcoming-meals")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <PiBowlFood className="text-red-300 text-3xl" />
                  Upcoming Meals
                </div>
              </li>
            </>
          ) : (
            // user menubar
            <>
              <li
                onClick={() => navigate("/dashboard/overview")}
                className={getLinkClass("/dashboard/overview")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <CgProfile className="text-red-300 text-3xl" />
                  Overview
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/profile")}
                className={getLinkClass("/dashboard/profile")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <CgProfile className="text-red-300 text-3xl" />
                  My Profile
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/requested-meals")}
                className={getLinkClass("/dashboard/requested-meals")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <MdFastfood className="text-red-300 text-3xl" />
                  Requested Meals
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/my-reviews")}
                className={getLinkClass("/dashboard/my-reviews")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <MdOutlineRateReview className="text-red-300 text-3xl" />
                  My Reviews
                </div>
              </li>
              <li
                onClick={() => navigate("/dashboard/payment-history")}
                className={getLinkClass("/dashboard/payment-history")}
              >
                <div className="flex items-center justify-start gap-x-4">
                  <FaHistory className="text-red-300 text-3xl" />
                  Payment History
                </div>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
