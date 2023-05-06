/* eslint-disable react-hooks/exhaustive-deps */
import react, { useContext, useState, useEffect } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import "./ProductTmp.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditProductModal from "../EditProductModal/EditProductModal";
import DetailModal from "../DetailModal/DetailModal";
import ToastModal from "../ToastModal/ToastModal";
import ErrorBox from "../ErrorBox/ErrorBox";
const ProductTmp = () => {
  const {
    setShowDeleteModal,
    setShowEditModal,
    setShowDetailModal,
    showEditModal,
    showDetailModal,
    showDeleteModal,
    showToastModal,
    setShowToastModal,
    setIsActive,
    isAddNewProduct,
    currentPage,
    setPageCount,
  } = useContext(CmsContext);
  const [toastMsg, setToastMsg] = useState(null);
  const [ProductInfo, setProductInfo] = useState({});
  const [productID, setProductID] = useState(null);
  const [products, setProducts] = useState([]);
  let pageSize = 2;
  const getData = () => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setPageCount(Math.ceil(data.length / pageSize));
        let endIndex = currentPage * pageSize;
        let startIndex = endIndex - pageSize;
        setProducts(data.slice(startIndex, endIndex));
        setIsActive("محصولات");
      });
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, [currentPage]);
  // {'delete modal handlers'}
  useEffect(() => {
    getData();
  }, [isAddNewProduct]);
  const deleteHandler = (productId) => {
    setShowDeleteModal(true);
    setProductID(productId);
    setToastMsg("حذف با موفقیت انجام شد");
  };
  const deleteModalSubmitAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setShowDeleteModal(false);
        setShowToastModal(true);
        setTimeout(() => {
          setShowToastModal(false);
        }, 3000);
        getData();
      });
  };

  const deleteModalCancelAction = () => {
    setShowDeleteModal(false);
  };

  // {'edit modal handlers'}

  const editHandler = (product, productId) => {
    setShowEditModal(true), setProductInfo(product);
    setProductID(productId);
    setToastMsg("ویرایش با موفقیت انجام شد");
  };
  const editModalSubmitAction = (editedProduct, e) => {
    e.preventDefault();
    console.log(editedProduct);
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(editedProduct),
    }).then((res) => {
      console.log(res);
      setShowEditModal(false);
      setShowToastModal(true);
      setTimeout(() => {
        setShowToastModal(false);
      }, 3000);
      getData();
    });
  };

  const editModalCancelAction = () => {
    setShowEditModal(false);
  };

  const closeDetailModal = () => {
    setShowDetailModal(false);
  };

  // {'detail modal handlers'}
  const detailHandler = (product) => {
    setShowDetailModal(true), setProductInfo(product);
  };

  return (
    <>
      {products.length ? (
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
                  قیمت
                </th>
                <th scope='col' className=' p-4'>
                  موجودی
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
                      className='bg-blue-400 w-[50px] py-2 ms-1 rounded '
                      onClick={() => editHandler(product, product.id)}>
                      ویرایش
                    </button>
                    <button
                      onClick={() => deleteHandler(product.id)}
                      className='bg-gray-800 text-white w-[50px] py-2 ms-1 rounded '>
                      حذف
                    </button>
                    <button
                      onClick={() => detailHandler(product)}
                      className='bg-gray-700 text-white w-[50px] py-2 ms-1 rounded '>
                      جزیات
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <ErrorBox msg={"محصولی یافت نشد"} />
      )}
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
      {showToastModal && <ToastModal msg={toastMsg} />}
    </>
  );
};

export default ProductTmp;
