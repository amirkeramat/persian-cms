import React, { useContext,useEffect } from "react";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";
import ProductTmp from "../../components/pruducTmp/ProductTmp";
import { CmsContext } from "../../contexts/CmsContext";
const Products = () => {
  const {newProducts,setNewProducts}= useContext(CmsContext);
   useEffect(() => {
     fetch("http://localhost:3000/api/products")
       .then((res) => res.json())
       .then((data) =>{
        setNewProducts(data)
        console.log(data);
       } 
       )
   }, []);
  return (
    <div>
      <AddNewProduct />
      {/* <ProductTmp /> */}
      {newProducts.length > 0 ? (
        <ProductTmp />
      ) : (
        <ErrorBox msg={"محصولی یافت نشد"} />
      )}
      
    </div>
  );
};

export default Products;
