import React from "react";

const CommentConfirmModal = ({
  submitAction,
  cancelAction,
  showCommentConfirm,
}) => {
  return (
    <>
      {showCommentConfirm && (
        <div className=' fixed inset-0  w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
          <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <h1>ایا کامنت را تایید می نمایید؟</h1>
            <div className='delete-modal-buttons flex justify-evenly w-full text-white'>
              <button
                className='w-[100px] p-2 bg-blue-800 rounded-xl'
                onClick={() => submitAction()}>
                بله
              </button>
              <button
                className='w-[100px] p-2 bg-purple-700 rounded-xl'
                onClick={() => cancelAction()}>
                خیر
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CommentConfirmModal;
