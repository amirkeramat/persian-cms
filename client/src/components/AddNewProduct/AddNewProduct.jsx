import React, { useState } from "react";

const AddNewProduct = () => {

  const [newProducts, setNewProducts] = useState([]);

  const [productData,setProductData] = useState({
      name:'',price:'',image:'',count:'',rate:'',salesRate:'',colors:[]
  })
  const checkBoxHandler = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setProductData((prv) => ({
        ...prv,
        colors:[...prv.colors,e.target.value],
      }));
    } else {
      let colors = productData.colors.filter((color) => color !== e.target.value);
      setProductData(prv=>({...prv,colors:colors}));
    }
  };

  const fromSubmitHandler = (e) => {
    let checkBox = document.querySelectorAll(".checkBox");
    e.preventDefault();
    if (productData) {
      let newProduct = {
        id: newProducts.length + 1,
        name:productData.name,
        price:productData.price,
        image:productData.image,
        count:productData.count,
        rate:productData.rate,
        salesRate:productData.salesRate,
        colors:productData.colors,
      };
      setNewProducts([...newProducts, newProduct]);
      setProductData({
        name: "",
        price: "",
        image: "",
        count: "",
        rate: "",
        salesRate: "",
        colors: [],
      });
      checkBox.forEach((box) => (box.checked = false));
    }
  };
  return (
    <div className='addNewProduct text-black mt-5 p-5'>
      <h1 className=' font-extrabold text-3xl mb-5'>افزودن محصول جدید</h1>
      <form
        className='addNewProduct-from-wrap bg-white grid grid-cols sm:grid-cols-2 gap-4 p-4 text-lg font-bold rounded-2xl'
        onSubmit={(e) => fromSubmitHandler(e)}>
        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='نام محصول را وارد نمایید'
            value={productData.name}
            onChange={(e) =>
              setProductData((prv) => ({ ...prv, name: e.target.value }))
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
              setProductData((prv) => ({ ...prv, price: e.target.value }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='number'
            min={1}
            max={100}
            placeholder='موجودی محصول را وارد نمایید'
            value={productData.count}
            onChange={(e) =>
              setProductData((prv) => ({ ...prv, count: e.target.value }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='آدرس عکس محصول را وراد نمایید'
            value={productData.image}
            onChange={(e) =>
              setProductData((prv) => ({ ...prv, image: e.target.value }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='number'
            min={1}
            max={10}
            placeholder='میزان محبوبت محصول را وارد نمایید'
            value={productData.rate}
            onChange={(e) =>
              setProductData((prv) => ({ ...prv, rate: e.target.value }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='میزان فروش محصول را وارد نمایید'
            value={productData.salesRate}
            onChange={(e) =>
              setProductData((prv) => ({ ...prv, salesRate: e.target.value }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group col-span-2 flex justify-start items-center bg-gray-200 '>
          <h6 className=''>رنگبندی :</h6>
          <div className='flex items-center justify-evenly bg-gray-200 flex-auto'>
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
        </div>

        <div className='addProduct-from-group col-span-2 text-center'>
          <button type='submit' className='w-[50%] bg-blue-500 p-2 rounded-2xl'>
            افزودن محصول
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
