import { AiOutlineBell } from "react-icons/ai";
import { BsSun } from "react-icons/bs";
const TopBar = () => {
  return (
    <div className='top=bar bg-gray-200 h-[75px] shadow-md shadow-gray-600 w-full'>
      <div className='topBar-container flex justify-between items-center p-2'>
        <div className='topBar-right flex items-center'>
          <img
            src='/images/1.jpg'
            className='w-[60px] rounded-full  me-5'
            alt=''
          />
          <span className='flex flex-col'>
            <h3>امیر کرامت</h3>
            <h4>برنامه نویس فرانت اند</h4>
          </span>
        </div>
        <div className='topBar-left flex items-center flex-[4] justify-end'>
          <div className='relative'>
            <input
              type='text'
              name=''
              id=''
              className='p-2 rounded-2xl w-[300px]'
              placeholder='جست و جو بکنید....'
            />
            <button className=' bg-blue-900 w-[100px] rounded-xl py-2 text-white absolute left-0 top-0'>
              جستجو
            </button>
          </div>
          <button className=' bg-blue-900  rounded-xl py-2 px-2  text-white flex justify-center items-center text-2xl ms-5'>
            <BsSun />
          </button>
          <button className=' bg-blue-900  rounded-xl py-2 px-2 text-white flex justify-center items-center text-2xl ms-5'>
            <AiOutlineBell />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
