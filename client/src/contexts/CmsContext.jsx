import { createContext, useState } from "react";

export const CmsContext = createContext(null);

const CmsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [showMenu, setShowMenu] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [productID, setProductID] = useState(null);
  const [showToastModal, setShowToastModal] = useState(false);
  const [isActive, setIsActive] = useState("صفحه اصلی");
  const [isAddNewProduct, setIsAddNewProduct] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
    const [pageCount, setPageCount] = useState(null);

  const value = {
    products,
    setProducts,
    showMenu,
    setShowMenu,
    showDeleteModal,
    setShowDeleteModal,
    showEditModal,
    setShowEditModal,
    showDetailModal,
    setShowDetailModal,
    productID,
    setProductID,
    showToastModal,
    setShowToastModal,
    isActive,
    setIsActive,
    isAddNewProduct,
    setIsAddNewProduct,
    currentPage,
    setCurrentPage,
    pageNumbers,
    setPageNumbers,
    pageCount,
    setPageCount,
  };
  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
};

export default CmsContextProvider;
