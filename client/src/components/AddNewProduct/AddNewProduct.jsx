import react, { useState } from "react";
const AddNewProduct = () => {
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
  const newProduct = {
    title: productData.title,
    price: productData.price,
    count: productData.count,
    img: productData.img,
    popularity: productData.popularity,
    sale: productData.sale,
    colors: productData.colors
  };
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
    // let checkBox = document.querySelectorAll(".checkBox");
    // checkBox.forEach((box) => (box.checked = false));
    if (!Object.values(newProduct).includes("")) {
      console.log(newProduct);
      fetch("http://localhost:8000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      // resetData();
    } else {
      alert("مقادیر مورد نیاز را پر کنید");
    }
  };
  return (
    <div className='addNewProduct text-black mt-5 p-0 md:p-5'>
      <h1 className=' font-extrabold text-3xl mb-5'>افزودن محصول جدید</h1>
      <form action="#" className='grid grid-cols-1  md:grid-cols-2 gap-2 md:gap-4'>
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

        {/* <div className='addProduct-from-group md:col-span-2  flex justify-start items-center bg-gray-200 '>
          <h6 className=''>رنگبندی :</h6>
          <div className='flex items-center justify-start bg-gray-200 flex-auto flex-wrap'>
            <div className='p-2 rounded-xl flex items-center'>
              <label htmlFor='black'>مشکی</label>
              <input
                className='checkBox ms-2'
                type='checkbox'
                id='black'
                value={"مشکی"}
                onChange={(e) => {
                  checkBoxHandler(e);
                }}
              />
            </div>
            <div className='p-2 rounded-xl flex items-center'>
              <label htmlFor='blue'>آبی</label>
              <input
                className='checkBox'
                type='checkbox'
                id='blue'
                value={"آبی"}
                onChange={(e) => {
                  checkBoxHandler(e);
                }}
              />
            </div>
            <div className='p-2 rounded-xl flex items-center'>
              <label htmlFor='silver'>نقره ای</label>
              <input
                className='checkBox ms-2'
                type='checkbox'
                id='silver'
                value={"نقره ای"}
                onChange={(e) => {
                  checkBoxHandler(e);
                }}
              />
            </div>
            <div className='p-2 rounded-xl flex items-center'>
              <label htmlFor='peach'>هلویی</label>
              <input
                className='checkBox ms-2'
                type='checkbox'
                id='peach'
                value={"هلویی"}
                onChange={(e) => {
                  checkBoxHandler(e);
                }}
              />
            </div>
            <div className='p-2 rounded-xl flex items-center'>
              <label htmlFor='other'>سایر</label>
              <input
                className='checkBox ms-2'
                type='checkbox'
                id='other'
                value={"سایر"}
                onChange={(e) => checkBoxHandler(e)}
              />
            </div>
          </div>
        </div> */}

        <div className='addProduct-from-group md:col-span-2 text-center'>
          <button
            onClick={fromSubmitHandler}
            className='w-full bg-blue-500 p-2 rounded-2xl'>
            افزودن محصول
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
