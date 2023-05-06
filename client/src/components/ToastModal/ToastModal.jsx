import React, { useContext } from "react";
import { SlClose } from "react-icons/sl";
import { CmsContext } from "../../contexts/CmsContext";
import ReactDOM from "react-dom";
const ToastModal = ({ msg }) => {
  const { showToastModal, setShowToastModal } = useContext(CmsContext);
  return ReactDOM.createPortal(
    <>
      {showToastModal && (
        <div className='fixed z-50 bottom-0 right-[5vw]'>
          <div className='w-[400px] h-[100px] bg-blue-950 text-white text-2xl flex justify-between items-center rounded-2xl p-5'>
            <SlClose
              className='self-start cursor-pointer'
              onClick={() => setShowToastModal(false)}
            />
            <h6>{msg}</h6>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-parent")
  );
};

export default ToastModal;
