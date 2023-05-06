import { useContext, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
import { AiOutlineArrowDown } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import { CmsContext } from "../../contexts/CmsContext";
const TopBar = () => {
  const { showMenu, setShowMenu } = useContext(CmsContext);
  const [isShowBar, setIsShowBar] = useState(false);
  return (
    <div className='top-bar sticky top-0  bg-gray-300 shadow-md shadow-gray-600 w-full z-20 bg-opacity-95'>
      <div className='topBar-container flex flex-col flex-wrap  md:flex-row justify-between items-center p-0 md:p-2 '>
        <div className='topBar-right relative flex items-center flex-auto self-start'>
          <span className='flex text-blue-900 p-2 text-2xl items-center  w-[50px]'>
            <div onClick={() => setShowMenu((prv) => !prv)}>
              {showMenu ? (
                <BiMenuAltRight className=' cursor-pointer' />
              ) : (
                <CiMenuKebab className=' cursor-pointer' />
              )}
            </div>
          </span>
          <img
            src='/img/userPhoto.jpg'
            className='w-[60px] rounded-full  me-5'
            alt=''
          />
          <span className='flex flex-col'>
            <h3>امیر کرامت</h3>
            <h4>برنامه نویس فرانت اند</h4>
          </span>
        </div>
        <div className='topBar-left flex-1 '>
          <div className='block absolute top-[10px] left-0 md:hidden'>
            {!isShowBar ? (
              <AiOutlineArrowDown
                className='text-3xl cursor-pointer'
                onClick={() => setIsShowBar((prv) => !prv)}
              />
            ) : (
              <AiOutlineClose
                className='text-3xl cursor-pointer'
                onClick={() => setIsShowBar((prv) => !prv)}
              />
            )}
          </div>

          <div
            className={`topBar-left-container items-center
            justify-end mb-4 md:mb-0 md:flex  mt-5 md:mt-0   ${
              isShowBar ? "flex" : "hidden"
            }`}>
            <div className='relative'>
              <input
                type='text'
                name=''
                id=''
                className='p-1 md:p-2 rounded-2xl w-[200px] md:w-[300px]'
                placeholder='جست و جو بکنید....'
              />
              <button className=' bg-blue-900 w-[70px] md:w-[100px] rounded-xl py-1 md:py-2 text-white absolute left-0 top-0'>
                جستجو
              </button>
            </div>
            <button className=' bg-blue-900  rounded-xl py-2 px-2  text-white flex justify-center items-center text-sm md:text-2xl ms-5'>
              <BsSun />
            </button>
            <button className=' bg-blue-900  rounded-xl py-2 px-2 text-white flex justify-center items-center text-sm md:text-2xl ms-5'>
              <AiOutlineBell />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
