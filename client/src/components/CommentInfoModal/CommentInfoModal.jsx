import ReactDom from "react-dom";
const CommentInfoModal = ({
  commentBody,
  onClose
}) => {
  return ReactDom.createPortal(
 
        <div className=' fixed inset-0  w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
          <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <button
              className='self-start  bg-blue-900 w-[100px] px-1 py-2 rounded-xl text-white'
              onClick={() =>onClose()}>
              بستن
            </button>
            <div className='bg-white h-[5px] w-full'></div>
            <h6 className="text-2xl">{commentBody}</h6>
            <div className='bg-white h-[5px] w-full'></div>
          </div>
        </div>
    ,document.getElementById("modal-parent")
  );
};

export default CommentInfoModal;
