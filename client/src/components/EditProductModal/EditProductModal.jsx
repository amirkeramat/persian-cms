import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CmsContext } from "../../contexts/CmsContext";
const EditProductModal = (props) => {
  const { showEditModal, setShowEditModal } = useContext(CmsContext);
  return ReactDOM.createPortal(
    <>
      {showEditModal && (
        <div className=' absolute inset-0 h-full w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-50 z-40'>
          <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <div className='grid grid-cols-2 gap-2'>
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
              <input type='text' name='' id='' />
            </div>
            <div className='flex justify-around w-full text-white '>
              <button className='bg-blue-900 w-[100px] p-2 rounded'>
                Edit
              </button>
              <button
                className='bg-purple-900 w-[100px] p-2 rounded'
                onClick={() => setShowEditModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-parent")
  );
};

export default EditProductModal;
