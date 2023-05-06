import React, { useContext, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { CiMenuKebab } from "react-icons/ci";
import {
  AiOutlineHome,
  BiCommentDetail,
  MdProductionQuantityLimits,
  FiUsers,
  SlBasketLoaded,
  BsCurrencyDollar,
  HiOutlineHomeModern,
} from "../../icons/icons";
import { CmsContext } from "../../contexts/CmsContext";
import { Link } from "react-router-dom";
const SideBar = () => {
  const { showMenu, setShowMenu } = useContext(CmsContext);
  const [menuItem] = useState([
    { id: 1, title: "صفحه اصلی", icon: <AiOutlineHome />, href: "/" },
    {
      id: 2,
      title: "وب سایت",
      icon: <HiOutlineHomeModern />,
      href: "/website",
    },
    { id: 3, title: "محصولات", icon: <BiCommentDetail />, href: "/products" },
    {
      id: 4,
      title: "کامنت ها",
      icon: <MdProductionQuantityLimits />,
      href: "/comments",
    },
    { id: 5, title: "کاربران", icon: <FiUsers />, href: "/users" },
    { id: 6, title: "سفارشات", icon: <SlBasketLoaded />, href: "/orders" },
    {
      id: 7,
      title: "تخفیف ها",
      icon: <BsCurrencyDollar />,
      href: "/discounts",
    },
  ]);

  const [isActive, setIsActive] = useState('صفحه اصلی');
  const MenuTemp = ({ item }) => {
    return (
      <li
        className={`flex items-center py-2 rounded duration-500
        ${isActive === item.title && "bg-blue-700 shadow-md shadow-blue-600"}`}>
        {item.icon}
        <Link
          onClick={() => setIsActive(item.title)}
          to={item.href}
          className='ms-2'>
          {item.title}
        </Link>
      </li>
    );
  };

  return (
    <div
      className={`fixed z-30 md:sticky  duration-700 top-0 right-0  h-screen bg-blue-900  text-white text-xl overflow-y-auto  ${
        showMenu ? " w-[200px] md:w-[200px] p-2 " : "w-0 right-[-200px] p-0"
      }`}>
      <span className='flex p-2'>
        <BiMenuAltRight
          className=' cursor-pointer'
          onClick={() => setShowMenu((prv) => !prv)}
        />
        <h1 className='text-sm text-center'>به داشبود خوش آمدید</h1>
      </span>
      <div className='h-[2px] bg-white w-full mt-2 mb-2'></div>
      <ul className='space-y-5 font-bold'>
        {menuItem.map((item) => (
          <MenuTemp key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
