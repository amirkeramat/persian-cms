import React, { useContext,useEffect } from "react";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";
import ProductTmp from "../../components/pruducTmp/ProductTmp";
import { CmsContext } from "../../contexts/CmsContext";
const Products = () => {
  const {products,setProducts}= useContext(CmsContext);
   useEffect(() => {
     fetch("http://localhost:8000/api/products")
       .then((res) => res.json())
       .then((data) =>{
        console.log(data);
        setProducts(data)
       } 
       )
   }, []);
  return (
    <div>
      <AddNewProduct />
      {products.length  ? (
        <ProductTmp />
      ) : (
        <ErrorBox msg={"محصولی یافت نشد"} />
      )}
      
    </div>
  );
};

export default Products;
