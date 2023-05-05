/* eslint-disable react-hooks/exhaustive-deps */
import react, { useContext, useEffect } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import "./ProductTmp.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditProductModal from "../EditProductModal/EditProductModal";
const ProductTmp = () => {
  const { newProducts, setShowDeleteModal, setShowEditModal } =
    useContext(CmsContext);
 
  return (
    <div className='w-full overflow-x-auto p-0 md:p-12 rounded '>
      <table className=' border-collapse w-full table-auto'>
        <thead className='bg-blue-100 text-blue-900 border border-blue-950'>
          <tr>
            <th scope='col' className=' py-2'>
              عکس
            </th>
            <th scope='col' className=' py-2'>
              نام
            </th>
            <th scope='col' className=' py-2'>
              موجودی
            </th>
            <th scope='col' className=' py-2'>
              قیمت
            </th>
            <th>ویرایش و حذف</th>
          </tr>
        </thead>
        <tbody>
          {newProducts.map((newProduct) => (
            <>
              <tr
                key={newProduct.id}
                className='bg-gray-100 even:bg-gray-300 shadow shadow-black'>
                <td scope='col' className=''>
                  <img
                    className='inline w-[250px] h-[250px] object-contain mix-blend-multiply'
                    src={newProduct.img}
                    alt=''
                  />
                </td>
                <td scope='col' className='newProduct-name  '>
                  <h6>{newProduct.title}</h6>
                </td>
                <td scope='col' className=' '>
                  <h6>{newProduct.price}</h6>
                </td>
                <td scope='col' className=' '>
                  <h6>{newProduct.count}</h6>
                </td>
                <td className='space-y-2'>
                  <button
                    className='bg-blue-400 w-[100px] py-2'
                    onClick={() => setShowEditModal(true)}>
                    ویرایش
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className='bg-gray-800 text-white w-[100px] py-2'>
                    حذف
                  </button>
                </td>
              </tr>
              <EditProductModal {...newProduct} />
              <DeleteModal />
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTmp;
