import react,{ useContext } from "react";
import { CmsContext } from "../../contexts/CmsContext";
const AddNewProduct = () => {

  const CmsContextData = useContext(CmsContext);
  const checkBoxHandler = (e) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      CmsContextData.setProductData((prv) => ({
        ...prv,
        colors: [...prv.colors, e.target.value],
      }));
    } else {
      let colors = CmsContextData.productData.colors.filter(
        (color) => color !== e.target.value
      );
      CmsContextData.setProductData((prv) => ({ ...prv, colors: colors }));
    }
  };

  const fromSubmitHandler = (e) => {
    let checkBox = document.querySelectorAll(".checkBox");
    e.preventDefault();
    if (CmsContextData.productData) {
      let newProduct = {
        id: CmsContextData.newProducts.length + 1,
        name: CmsContextData.productData.name,
        price: CmsContextData.productData.price,
        image: CmsContextData.productData.image,
        count: CmsContextData.productData.count,
        rate: CmsContextData.productData.rate,
        salesRate: CmsContextData.productData.salesRate,
        colors: CmsContextData.productData.colors,
      };
      CmsContextData.setNewProducts([...CmsContextData.newProducts, newProduct]);
      CmsContextData.setProductData({
        name: "",
        price: "",
        image: "",
        count: "",
        rate: "",
        salesRate: "",
        colors: [],
      });
      checkBox.forEach((box) => (box.checked = false));
    }else{
      alert('مقادیر مورد نیاز را پر کنید')
    }
  };
  return (
    <div className='addNewProduct text-black mt-5 p-5'>
      <h1 className=' font-extrabold text-3xl mb-5'>افزودن محصول جدید</h1>
      <form
        className='block space-y-2 md:grid md:grid-cols-2 md:space-y-0 md:gap-4 p-2 h-full'
        onSubmit={(e) => fromSubmitHandler(e)}>
        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='نام محصول را وارد نمایید'
            value={CmsContextData.productData.name}
            onChange={(e) =>
              CmsContextData.setProductData((prv) => ({
                ...prv,
                name: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='قیمت محصول را وارد نمایید'
            value={CmsContextData.productData.price}
            onChange={(e) =>
              CmsContextData.setProductData((prv) => ({
                ...prv,
                price: e.target.value,
              }))
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
            value={CmsContextData.productData.count}
            onChange={(e) =>
              CmsContextData.setProductData((prv) => ({
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
            value={CmsContextData.productData.image}
            onChange={(e) =>
              CmsContextData.setProductData((prv) => ({
                ...prv,
                image: e.target.value,
              }))
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
            value={CmsContextData.productData.rate}
            onChange={(e) =>
              CmsContextData.setProductData((prv) => ({
                ...prv,
                rate: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group'>
          <input
            type='text'
            placeholder='میزان فروش محصول را وارد نمایید'
            value={CmsContextData.productData.salesRate}
            onChange={(e) =>
              CmsContextData.setProductData((prv) => ({
                ...prv,
                salesRate: e.target.value,
              }))
            }
            className='bg-gray-300 p-2 w-full rounded placeholder-black'
          />
        </div>

        <div className='addProduct-from-group col-span-2 flex justify-start items-center bg-gray-200 '>
          <h6 className=''>رنگبندی :</h6>
          <div className='flex items-center justify-start bg-gray-200 flex-auto'>
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
          <button type='submit' className='w-full bg-blue-500 p-2 rounded-2xl'>
            افزودن محصول
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewProduct;
