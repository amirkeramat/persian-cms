import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { CmsContext } from "../../contexts/CmsContext";
const EditProductModal = ({ submitAction, cancelAction, productInfo }) => {
  const { showEditModal } = useContext(CmsContext);
  const [editProduct, setEditProduct] = useState(productInfo);
  return ReactDOM.createPortal(
    <>
      {showEditModal && (
        <div className=' fixed inset-0 h-full w-full border border-black flex justify-center items-center bg-gray-900 bg-opacity-80 z-40'>
          <div className='w-[75%] delete-modal-container flex flex-col space-y-5 items-center p-10 bg-gray-300 rounded-xl z-50'>
            <form className='grid  grid-cols-2 gap-2 w-full'>
              <label htmlFor=''>
                نام:
                <input
                  value={editProduct.title}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({ ...prv, title: e.target.value }))
                  }
                />
              </label>

              <label
                htmlFor='
              '>
                قیمت:
                <input
                  value={editProduct.price}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({ ...prv, price: e.target.value }))
                  }
                />
              </label>
              <label htmlFor=''>
                عکس:
                <input
                  value={editProduct.img}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({ ...prv, img: e.target.value }))
                  }
                />
              </label>
              <label htmlFor=''>
                موجودی:
                <input
                  value={editProduct.count}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({ ...prv, count: e.target.value }))
                  }
                />
              </label>
              <label htmlFor=''>
                میزان فروش:
                <input
                  value={editProduct.sale}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({ ...prv, sale: e.target.value }))
                  }
                />
              </label>
              <label htmlFor=''>
                میزان محبوبت:
                <input
                  value={editProduct.popularity}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({
                      ...prv,
                      popularity: e.target.value,
                    }))
                  }
                />
              </label>
              <label htmlFor=''>
                تعداد رنگ:
                <input
                  value={editProduct.colors}
                  className='w-full p-2'
                  type='text'
                  name=''
                  id=''
                  onChange={(e) =>
                    setEditProduct((prv) => ({
                      ...prv,
                      colors: e.target.value,
                    }))
                  }
                />
              </label>
              <div className='flex justify-around w-full col-span-2 text-white '>
                <button
                  onClick={(e) => submitAction(editProduct, e)}
                  type='submit'
                  className='bg-blue-900 w-full p-2 rounded'>
                  Edit
                </button>
                <button
                  className='bg-purple-900 w-full p-2 rounded'
                  onClick={() => cancelAction()}>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>,
    document.getElementById("modal-parent")
  );
};

export default EditProductModal;
