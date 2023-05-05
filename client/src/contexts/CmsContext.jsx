import { createContext,useState } from "react";

export const CmsContext = createContext(null);

const CmsContextProvider = ({ children }) => {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    image: "",
    count: "",
    rate: "",
    salesRate: "",
    colors: [],
  });
    const [newProducts, setNewProducts] = useState([]);
    const [showMenu,setShowMenu] = useState(true)
    const [showDeleteModal,setShowDeleteModal] = useState(false)
    const [showEditModal,setShowEditModal] = useState(false)
  const value = {
    productData,
    setProductData,
    newProducts,
    setNewProducts,
    showMenu,
    setShowMenu,
    showDeleteModal,
    setShowDeleteModal,
    showEditModal,
    setShowEditModal,
  };
  return <CmsContext.Provider value={value}>
    {children}
  </CmsContext.Provider>;
};

export default CmsContextProvider;
