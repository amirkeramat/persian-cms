import { Comments, Products, Users, Orders, Discounts, Home } from "../pages/index";

let routs = [
    {path:'/',element:<Home/>},
    {path:'/products',element:<Products/>},
    {path:'/comments',element:<Comments/>},
    {path:'/users',element:<Users/>},
    {path:'/orders',element:<Orders/>},
    {path:'/discounts',element:<Discounts/>},
]

export default routs