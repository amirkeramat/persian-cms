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
  };
  return <CmsContext.Provider value={value}>{children}</CmsContext.Provider>;
};

export default CmsContextProvider;
