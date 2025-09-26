export function StepThree() {
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
        <div className="flex flex-col">
          <label htmlFor="">Date of birth</label>
          <input
            type="date"
            className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
          />
          <label htmlFor="">Profile image</label>
          <input type="file" />
        </div>

        <div className="flex gap-6 mt-6">
          <input type="button" />
          <button
            type="submit"
            className="w-full h-[44px] p-2 rounded-md font-semibold bg-sky-500 hover:bg-sky-700 "
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
