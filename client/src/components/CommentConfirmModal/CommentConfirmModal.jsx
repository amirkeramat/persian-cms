import ReactDOM from 'react-dom'
const CommentConfirmModal = ({
  submitConfirm,
  cancelConfirm,
  title
}) => {
  return ReactDOM.createPortal(
    <div className=' fixed inset-0  w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
      <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
        <h1>{title}</h1>
        <div className='delete-modal-buttons flex justify-evenly w-full text-white'>
          <button
            className='w-[100px] p-2 bg-blue-800 rounded-xl'
            onClick={() => submitConfirm()}>
            بله
          </button>
          <button
            className='w-[100px] p-2 bg-purple-700 rounded-xl'
            onClick={() => cancelConfirm()}>
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-parent")
  );
};

export default CommentConfirmModal;
