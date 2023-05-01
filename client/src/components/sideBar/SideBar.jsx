import React, { useState } from "react";
import {
  AiOutlineHome,
  BiCommentDetail,
  MdProductionQuantityLimits,
  FiUsers,
  SlBasketLoaded,
  BsCurrencyDollar,
  HiOutlineHomeModern,
} from "../../icons/icons";
import { Link } from "react-router-dom";
const SideBar = () => {
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
  const [isActive, setIsActive] = useState("صفحه اصلی");
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
    <div className='sticky flex-1   top-[60px] right-0 overflow-y-auto bg-blue-900 h-screen text-white text-xl px-2'>
      <h1 className=' text-base text-center'>به داشبود  خوش آمدید</h1>
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
