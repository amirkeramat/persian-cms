import { SlClose } from "react-icons/sl";
import ReactDOM from "react-dom";
const ToastModal = ({ msg ,onClose}) => {
  return ReactDOM.createPortal(
    <div className='fixed z-50 bottom-0 right-[5vw]'>
      <div className='w-[400px] h-[100px] bg-blue-950 text-white text-2xl flex flex-col justify-between items-center rounded-2xl p-5'>
        <SlClose
          className='self-start cursor-pointer'
          onClick={() => onClose()}
        />
        <h6>{msg}</h6>
      </div>
    </div>,
    document.getElementById("modal-parent")
  );
};

export default ToastModal;
