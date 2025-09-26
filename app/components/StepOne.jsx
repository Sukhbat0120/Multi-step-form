import { useState, useEffect } from "react";

export function StepOne({ onclick }) {
  const [errors, setErrors] = useState({});
  const [addStorage, setAddStorage] = useState(
    String(localStorage.getItem("text"))
  );

  useEffect(() => {
    localStorageAdd.setItem("FirstName");
  });
  const onClickButton = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const FirstName = data.get("FirstName");
    const LastName = data.get("LastName");
    const UserName = data.get("UserName");

    let newErrors = {};
    let isValid = true;

    if (FirstName.length < 1) {
      newErrors.FirstName = "too short";
      isValid = false;
    }

    if (LastName.length < 1) {
      newErrors.LastName = "too short";
      isValid = false;
    }
    if (UserName.length < 1) {
      newErrors.UserName = "too short";
      isValid = false;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      onclick();
    }
  };

  console.log(errors);
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
            {errors.LastName && (
              <p className="text-red-500">{errors.LastName}</p>
            )}
            <label htmlFor="">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              name="UserName"
              placeholder="Write here..."
              type="text"
              className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
            />
            {errors.UserName && (
              <p className="text-red-500">{errors.UserName}</p>
            )}
          </div>

          <div className="flex gap-6 mt-6">
            <button
              type="submit"
              className="w-full h-[44px] p-2 rounded-md font-semibold bg-sky-500 hover:bg-sky-700 "
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
