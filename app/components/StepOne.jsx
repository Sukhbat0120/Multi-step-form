import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export function StepOne() {
  const [errors, setErrors] = useState({
    FirstName: null,
    LastName: null,
    UserName: null,
  });
  const onClickButton = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    console.log(data.get("text"));
    console.log(event.target.FirstName.value);
    if (event.target.FirstName.value.lenght < 1) {
      setErrors({ ...errors, FirstName: "too short" });
    }
    if (event.target.LastName.value.lenght < 1) {
      setErrors({ ...errors, LastName: "too short" });
    }
    console.log(event.target.LastName.value);
    if (event.target.UserName.value.lenght < 1) {
      setErrors({ ...errors, UserName: "too short" });
    }
    console.log(event.target.UserName.value);
  };

  return (
    <>
      <div className="w-fit h-fit p-8 rounded-[8px] bg-gray-600  ">
        <img
          src="/pineconeLogo.png"
          alt="Logo"
          className="w-[60px] h-[60px] "
        />
        <h1 className="text-[26px] font-bold">Join Us! 😎</h1>
        <p className="text-[18px] text-gray-400 ">
          Please provide all current information accurately.
        </p>
        <form onSubmit={onClickButton}>
          <div className="flex flex-col">
            <label htmlFor="" className="">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              name="FirstName"
              placeholder="Write here..."
              type="text"
              className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
            />
            {errors.FirstName && (
              <p className="text-red-500">{errors.FirstName}</p>
            )}
            <label htmlFor="">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              name="LastName"
              placeholder="Write here..."
              type="text"
              className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
            />
            <label htmlFor="">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              name="UserName"
              placeholder="Write here..."
              type="text"
              className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
            />
          </div>

          <div className="flex gap-6 mt-6">
            <button
              type="submit"
              className="w-full h-[44px] p-2 rounded-md font-semibold bg-sky-500 hover:bg-sky-700 "
            >
              {currentIndex + 1}
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
