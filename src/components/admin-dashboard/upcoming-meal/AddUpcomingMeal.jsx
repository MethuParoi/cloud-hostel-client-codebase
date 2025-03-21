import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Loader from "../../ui/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../provider/AuthProvider";

const AddUpcomingMeal = ({ refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const food_id = Math.floor(Math.random() * 10000); //random 4 digit id
  const distributorName = user?.displayName;
  const distributorEmail = user?.email;
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  //post time
  useEffect(() => {
    reset({
      postTime: new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }),
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //upload image to imagebb
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGBB_API_KEY
  }`;

  const onSubmit = async (data) => {
    setIsLoading(true);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const mealImage = res.data.data.display_url;

    const mealData = {
      ...data,
      mealImage,
      food_id,
      distributorName,
      distributorEmail,
      rating: 0,
      likes: 0,
      reviewsCount: 0,
      subclass: "upcoming",
      isPublished: false,
    };

    try {
      const response = await axiosSecure.post(
        `meal/add-upcoming-meal`,
        mealData
      );
      if (response.status === 200) {
        toast.success("Meal added successfully!");
        refetch();
        document.getElementById("upcoming_meal_modal").close();
      }
    } catch (error) {
      toast.error("An error occurred while adding meal. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <dialog id="upcoming_meal_modal" className="modal">
      <div className="modal-box relative bg-gray-100">
        <button
          onClick={() => document.getElementById("upcoming_meal_modal").close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {isLoading && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30">
            <Loader />
          </div>
        )}
        <h3 className="font-bold text-lg lg:text-xl text-center mt-6 mb-5 border-b-2 border-gray-400 w-[250px] mx-auto text-red-300">
          Add Upcoming Meal
        </h3>
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 flex flex-col items-center"
          >
            {/* Meal Title */}
            <div className="flex flex-col items-center justify-between text-gray-600">
              <div className="relative mb-8">
                <label className="block mb-2 font-medium">Meal Title</label>
                <input
                  type="text"
                  placeholder="Enter meal title"
                  {...register("title", {
                    required: "Title is required",
                    minLength: {
                      value: 2,
                      message: "Title must be at least 2 characters",
                    },
                  })}
                  className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
                />
                {errors.title && (
                  <span className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.title.message}
                  </span>
                )}
              </div>
              {/* Meal Category */}
              <div className="relative mb-8">
                <label className="block mb-2 font-medium">Meal Category</label>
                <input
                  type="text"
                  placeholder="Enter meal category"
                  {...register("mealType", {
                    required: "Meal Category is required",
                  })}
                  className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
                />
                {errors.mealType && (
                  <span className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.mealType.message}
                  </span>
                )}
              </div>
            </div>

            {/* Meal Ingredients and Price */}
            <div className="flex flex-col text-gray-700">
              <div className="relative mb-8">
                <label className="block mb-2 font-medium">
                  Meal Ingredients
                </label>
                <input
                  type="text"
                  placeholder="Enter meal ingredients"
                  {...register("ingredients", {
                    required: "Ingredients are required",
                    minLength: {
                      value: 2,
                      message: "Ingredients must be at least 2 characters",
                    },
                  })}
                  className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
                />
                {errors.ingredients && (
                  <span className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.ingredients.message}
                  </span>
                )}
              </div>

              <div className="relative mb-8">
                <label className="block mb-2 font-medium">Meal Price</label>
                <input
                  type="number"
                  placeholder="Enter meal price"
                  {...register("price", {
                    required: "Meal Price is required",
                  })}
                  className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-10 px-2"
                />
                {errors.price && (
                  <span className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.price.message}
                  </span>
                )}
              </div>
            </div>

            {/* Meal Image and Description */}
            <div className="flex flex-col text-gray-600">
              <div className="relative mb-8">
                <label className="block mb-2 font-medium">Select Image</label>
                <input
                  {...register("image")}
                  type="file"
                  className="file-input w-[265px] max-w-xs bg-gray-200"
                />
              </div>

              <div className="relative mb-10">
                <label className="block mb-2 font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  placeholder="Enter a short description"
                  {...register("description", {
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  })}
                  className="input-field border-2 border-gray-400 rounded-lg shadow-lg h-20 px-2 text-gray-700"
                />
                {errors.description && (
                  <span className="text-red-500 absolute bottom-[-25px] left-0">
                    {errors.description.message}
                  </span>
                )}
              </div>
            </div>

            <div className="my-8">
              <button
                type="submit"
                className="mt-6 px-4 w-[310px] py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700"
              >
                Add Upcoming Meal
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default AddUpcomingMeal;
