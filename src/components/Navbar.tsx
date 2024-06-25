import Button from "./Button";

const Navbar = () => {
  return (
    <main className="min-w-[1920px] h-[79] flex fixed text-white border-b border-neutral-900">
      <div className="w-[100%] h-[79px] flex absolute justify-between">
        <div className="relative left-[5rem] h-[40px] flex-none justify-center items-center top-[1.5rem] text-4xl font-bold">
          AGIES INET
        </div>
        <div className="relative px-32 top-[1.5rem] h-[40px] items-center">
          <ul className="flex relative justify-between items-center top-[25%]">
            <li className="flex px-16 font-normal	 ">Home</li>
            <li className="flex px-16 font-normal	 ">About Us</li>
            <li className="flex px-16 font-normal		">Courses</li>
            <li className="flex px-16 font-normal		">Tech Stack</li>
          </ul>
        </div>
        <div className="relative h-[40px] top-[1.5rem] right-[5rem]">
          <Button />
        </div>
      </div>
    </main>
  );
};

export default Navbar;
