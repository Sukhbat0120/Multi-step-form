export function StepTwo() {
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
          <label htmlFor="">Email</label>
          <input
            name="Email"
            placeholder="Write here..."
            type="email"
            className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
          />
          <label htmlFor="">Phone number</label>
          <input
            name="Phone"
            placeholder="Number here..."
            type="number"
            className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
          />
          <label htmlFor="">Password</label>
          <input
            name="Password"
            placeholder="Password here..."
            type="password"
            className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
          />
          <label htmlFor="">Confirm Password</label>
          <input
            name="Confirm"
            placeholder="Confirm password here..."
            type="password"
            className="w-[87px] h-[20px] rounded-md border-2 border-solid border-black w-[366px] mt-2 mb-1 h-[48px] "
          />
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
