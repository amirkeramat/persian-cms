import React from 'react'
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import AddNewProduct from '../../components/AddNewProduct/AddNewProduct';
const Products = () => {
  return (
    <div>
        {/* <ErrorBox msg={'محصولی یافت نشد'}/> */}
        <AddNewProduct/>
      </div>
  )
}

export default Products