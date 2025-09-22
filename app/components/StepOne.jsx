export function StepOne() {
  return (
    <>
      <div className="w-fit h-fit rounded-[8px] bg-gray-600  ">
        <img
          src="/pineconeLogo.png"
          alt="Logo"
          className="w-[60px] h-[60px] "
        />
        <h1 className="text-[26px]">Join Us! 😎</h1>
        <p className="text-[18px] ">
          Please provide all current information accurately.
        </p>
        <div className="">
          <label htmlFor="">First name</label>
          <input type="text" className="w-[87px] h-[20px] rounded-2" />
          <label htmlFor="">Last name</label>
          <input type="text" />
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
      </div>
    </>
  );
}
