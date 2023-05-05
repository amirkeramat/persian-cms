import React, { useContext } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import ReactDOM from "react-dom";
const DetailModal = ({ closeModal, productInfo }) => {
  const { showDetailModal } = useContext(CmsContext);
  let { popularity, sale, colors } = productInfo;
  return ReactDOM.createPortal(
    <>
      {showDetailModal && (
        <div className=' fixed inset-0  w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
          <div className='w-[50%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <h1>جزیات محصول</h1>
            <table>
              <thead>
                <tr>
                  <th>میزان محبوبت</th>
                  <th>میزان فروش</th>
                  <th>رنگبندی</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{popularity}</td>
                  <td>{sale}</td>
                  <td>{colors}</td>
                </tr>
              </tbody>
            </table>
            <div className='delete-modal-buttons flex justify-evenly w-full text-white'>
              <button
                className='w-[100px] p-2 bg-blue-800 rounded-xl'
                onClick={() => closeModal()}>
                بستن
              </button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-parent")
  );
};

export default DetailModal;
