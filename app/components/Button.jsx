export const Button = ({ children }) => {
  return (
    <>
      <button className="w-fit h-[44px] p-2 rounded-md font-semibold bg-sky-500 hover:bg-sky-700 ">
        {children}
      </button>
    </>
  );
};
