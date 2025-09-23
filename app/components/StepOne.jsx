import { Button } from "./Button";
import { Input } from "./Input";

export function StepOne() {
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
          <label htmlFor="">First name</label>
          <Input></Input>
          <label htmlFor="">Last name</label>
          <Input></Input>
          <label htmlFor="">Username</label>
          <Input></Input>
        </div>

        <div className="flex gap-6 mt-6">
          <Button>Back</Button>
          <Button>Continue</Button>
        </div>
      </div>
    </>
  );
}
