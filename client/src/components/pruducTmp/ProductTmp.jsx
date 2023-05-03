import  { useContext } from "react";
import { CmsContext } from "../../contexts/CmsContext";
import "./ProductTmp.css";
const ProductTmp = () => {
  const CmsContextData = useContext(CmsContext);
  const newProductsData = CmsContextData.newProducts;
  return (
    <div className='w-full overflow-x-auto p-0 md:p-12 rounded '>
      <table className=' border-separate w-full table-auto'>
        <thead className='bg-blue-100 text-blue-900 border border-blue-950'>
          <tr>
            <th scope='col' className=' py-2'>
              عکس محصول
            </th>
            <th scope='col' className=' py-2'>
              نام محصول
            </th>
            <th scope='col' className=' py-2'>
              موجودی
            </th>
            <th scope='col' className=' py-2'>
              میران محبوبیت
            </th>
            <th scope='col' className=' py-2'>
              رنگبندی
            </th>
            <th scope='col' className=' py-2'>
              میران فروش محصول
            </th>
            <th scope='col' className=' py-2'>
              قیمت محصول
            </th>
            <th>
              ویرایش و حذف
            </th>
          </tr>
        </thead>
        <tbody>
          {newProductsData.map((newProduct) => (
            <tr
              key={newProduct.id}
              className='bg-gray-100 even:bg-gray-300 shadow shadow-black'>
              <td scope='col' className=''>
                <img
                  className='inline w-[60px] h-[60px] object-contain mix-blend-multiply'
                  src={newProduct.image}
                  alt=''
                />
              </td>
              <td scope='col' className='newProduct-name  '>
                <h6>{newProduct.name}</h6>
              </td>
              <td scope='col' className=' '>
                <h6>{newProduct.count}</h6>
              </td>
              <td scope='col' className=' '>
                <h6>{newProduct.rate}</h6>
              </td>
              <td scope='col' className=' '>
                <span>
                  {newProduct.colors.map((color, index) => (
                    <h6 key={index}>{color}</h6>
                  ))}
                </span>
              </td>
              <td scope='col' className=' '>
                <h6>{newProduct.salesRate}</h6>
              </td>
              <td scope='col' className=' '>
                <h6>{newProduct.price}</h6>
              </td>
              <td className="space-y-2">
                  <button className="bg-blue-400 w-[100px] py-2">ویرایش</button>
                  <button className="bg-gray-800 text-white w-[100px] py-2">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTmp;
