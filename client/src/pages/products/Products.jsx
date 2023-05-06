import React from "react";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";
import ProductTmp from "../../components/productTmp/ProductTmp";
import Pagination from "../../components/Pagination/Pagination";
const Products = () => {
  return (
    <div>
      <AddNewProduct />
      <ProductTmp />
      <Pagination />
    </div>
  );
};

export default Products;
