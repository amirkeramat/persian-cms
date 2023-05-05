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
    const [products, setProducts] = useState([]);
    const [showMenu,setShowMenu] = useState(true)
    const [showDeleteModal,setShowDeleteModal] = useState(false)
    const [showEditModal,setShowEditModal] = useState(false)
    const [showDetailModal,setShowDetailModal] = useState(false)
    const [productId,setProductId] = useState(null)
  const value = {
    productData,
    setProductData,
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
    productId,
    setProductId,
  };
  return <CmsContext.Provider value={value}>
    {children}
  </CmsContext.Provider>;
};

export default CmsContextProvider;
