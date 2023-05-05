/* eslint-disable react-hooks/exhaustive-deps */
import react, { useContext, useEffect, useState } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import "./ProductTmp.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditProductModal from "../EditProductModal/EditProductModal";
import DetailModal from "../DetailModal/DetailModal";
const ProductTmp = () => {
  const {
    products,
    setShowDeleteModal,
    setShowEditModal,
    setShowDetailModal,
    productId,
    setProductId,
    showEditModal,
    showDetailModal,
    showDeleteModal,
  } = useContext(CmsContext);
  const [ProductInfo, setProductInfo] = useState({});
  const deleteModalSubmitAction = () => {
    setShowDeleteModal(false);
    console.log(productId);
    // fetch(`http://localhost:3000/api/products/${productID}`)
  };
  const deleteModalCancelAction = () => {
    setShowDeleteModal(false);
  };
  const editModalSubmitAction = (edit) => {
    setShowEditModal(false);
    console.log("edit");
  };
  const editModalCancelAction = () => {
    setShowEditModal(false);
  };
  const closeDetailModal = () => {
    setShowDetailModal(false);
  };
  return (
    <div className='w-full overflow-x-auto p-0 md:p-12 rounded mt-5 '>
      <table className=' border-collapse w-full table-auto'>
        <thead className='bg-blue-100 text-blue-900 border border-blue-950'>
          <tr>
            <th scope='col' className=' p-4'>
              عکس
            </th>
            <th scope='col' className=' p-4'>
              نام
            </th>
            <th scope='col' className=' p-4'>
              موجودی
            </th>
            <th scope='col' className=' p-4'>
              قیمت
            </th>
            <th>ویرایش و حذف</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className='bg-gray-100 even:bg-gray-300 shadow shadow-black'>
              <td scope='col' className=''>
                <img
                  className='inline w-[250px] h-[250px] object-contain mix-blend-multiply'
                  src={product.img}
                  alt=''
                />
              </td>
              <td scope='col' className='newProduct-name  '>
                <h6>{product.title}</h6>
              </td>
              <td scope='col' className=' '>
                <h6>{product.price}</h6>
              </td>
              <td scope='col' className=' '>
                <h6>{product.count}</h6>
              </td>
              <td className='space-y-2'>
                <button
                  className='bg-blue-400 w-[50px] py-2 ms-1'
                  onClick={() => {
                    setShowEditModal(true), setProductInfo(product);
                  }}>
                  ویرایش
                </button>
                <button
                  onClick={() => {
                    setShowDeleteModal(true);
                    setProductId(product.id);
                  }}
                  className='bg-gray-800 text-white w-[50px] py-2 ms-1'>
                  حذف
                </button>
                <button
                  onClick={() => {
                    setShowDetailModal(true), setProductInfo(product);
                  }}
                  className='bg-gray-700 text-white w-[50px] py-2 ms-1'>
                  جزیات
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showEditModal && (
        <EditProductModal
          submitAction={editModalSubmitAction}
          cancelAction={editModalCancelAction}
          productInfo={ProductInfo}
        />
      )}
      {showDetailModal && (
        <DetailModal productInfo={ProductInfo} closeModal={closeDetailModal} />
      )}

      {showDeleteModal && (
        <DeleteModal
          submitAction={deleteModalSubmitAction}
          cancelAction={deleteModalCancelAction}
        />
      )}
    </div>
  );
};

export default ProductTmp;
