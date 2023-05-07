import react, { useState, useContext } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import ToastModal from "../../components/ToastModal/ToastModal";
const AddNewProduct = () => {
  const { isAddNewProduct, setIsAddNewProduct } = useContext(CmsContext);
  const [showToastModal, setShowToastModal] = useState(false);
  // const checkBoxHandler = (e) => {
  //   let isChecked = e.target.checked;
  //   if (isChecked) {
  //     setProductData((prv) => ({
  //       ...prv,
  //       colors: [...prv.colors, e.target.value],
  //     }));
  //   } else {
  //     let colors = productData.colors.filter(
  //       (color) => color !== e.target.value
  //     );
  //     setProductData((prv) => ({ ...prv, colors: colors }));
  //   }
  // };
  const [productData, setProductData] = useState({
    title: "",
    price: "",
    count: "",
    img: "",
    popularity: "",
    sale: "",
    colors: "",
  });

  const resetData = () => {
    setProductData({
      title: "",
      price: "",
      img: "",
      count: "",
      popularity: "",
      sale: "",
      colors: "",
    });
  };
  const fromSubmitHandler = (e) => {
    e.preventDefault();
    if (!Object.values(productData).includes("")) {
      console.log(productData);
      fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setIsAddNewProduct((prv) => !prv);
            setShowToastModal(true);
            setTimeout(() => {
              setShowToastModal(false);
            }, 3000);
          }
        });
      resetData();
    } else {
      alert("مقادیر مورد نیاز را پر کنید");
    }
  };

  const closeToastHandler = () => {
    setShowToastModal(false);
  };
  return (
    <div className='addNewProduct text-black mt-5 p-0 md:p-5'>
      <h1 className=' font-extrabold text-3xl mb-5'>افزودن محصول جدید</h1>
      <form
        action='#'
        className='grid grid-cols-1  md:grid-cols-2 gap-2 md:gap-4'>
        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='نام محصول را وارد نمایید'
            value={productData.title}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                title: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='قیمت محصول را وارد نمایید'
            value={productData.price}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                price: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='موجودی محصول را وارد نمایید'
            value={productData.count}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                count: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='آدرس عکس محصول را وراد نمایید'
            value={productData.img}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                img: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='میزان محبوبت محصول را وارد نمایید'
            value={productData.popularity}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                popularity: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='میزان فروش محصول را وارد نمایید'
            value={productData.sale}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                sale: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='تعداد رنگ را وارد نمایید'
            value={productData.colors}
            onChange={(e) =>
              setProductData((prv) => ({
                ...prv,
                colors: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>
        <div className='addProduct-from-group md:col-span-2 text-center'>
          <button
            onClick={fromSubmitHandler}
            className='w-full bg-blue-500 p-2 rounded-2xl'>
            افزودن محصول
          </button>
        </div>
      </form>
      {showToastModal && (
        <ToastModal
          msg='محصول مورد نظر با موفقیت ثبت گردید'
          onClose={closeToastHandler}
        />
      )}
    </div>
  );
};

export default AddNewProduct;
