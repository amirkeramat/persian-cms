import React, { useContext } from "react";
import ErrorBox from "../../components/ErrorBox/ErrorBox";
import AddNewProduct from "../../components/AddNewProduct/AddNewProduct";
import ProductTmp from "../../components/pruducTmp/ProductTmp";
import { CmsContext } from "../../contexts/CmsContext";
const Products = () => {
  const CmsContextData = useContext(CmsContext);
  return (
    <div>
      <AddNewProduct />
      {/* <ProductTmp /> */}
      {CmsContextData.newProducts.length > 0 ? (
        <ProductTmp />
      ) : (
        <ErrorBox msg={"محصولی یافت نشد"} />
      )}
    </div>
  );
};

export default Products;
