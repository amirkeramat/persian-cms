import React, { useContext } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import ReactDOM  from "react-dom";
const DeleteModal = () => {
  const { showDeleteModal, setShowDeleteModal,  } = useContext(CmsContext);
  const deleteButtonHandler = (action) => {
    if (action === "yes") {
      setShowDeleteModal(false);
    } else {
      setShowDeleteModal(false);
    }
  };
  return ReactDOM.createPortal (
    <>
      {showDeleteModal && (
        <div className=' absolute inset-0 h-full w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-50 z-40'>
          <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <h1>آیا از حذف اطمینان دارید؟</h1>
            <div className='delete-modal-buttons flex justify-evenly w-full text-white'>
              <button
                className='w-[100px] p-2 bg-blue-800 rounded-xl'
                onClick={() => deleteButtonHandler("yes")}>
                بله
              </button>
              <button
                className='w-[100px] p-2 bg-purple-700 rounded-xl'
                onClick={() => deleteButtonHandler("no")}>
                خیر
              </button>
            </div>
          </div>
        </div>
      )}
    </>,document.getElementById("modal-parent")
  );
};

export default DeleteModal;
