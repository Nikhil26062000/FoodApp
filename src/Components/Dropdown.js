import React from 'react'
import { Link } from "react-router-dom";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Dropdown = () => {
    const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='showdrop'>
          <div className=" max-md:w-[100%] h-[200px] bg-yellow-500 md:hidden">
        <ul className="flex flex-col justify-center items-center mx-auto ">
            <li className="mt-5">
            <Link className="hover:text-white" to="/">
            <HomeIcon />
            Home
          </Link>
            </li>
            <li className="mt-5">
            <Link className="hover:text-white" to="/search">
            <SearchOutlinedIcon />
            Search
          </Link>
            </li>
            <li className="mt-5">
            <Link className="hover:text-white" to="/offer">
           
            <LocalOfferIcon /> Offers
          </Link>
            </li>
            <li className="mt-5">
            <Link className="hover:text-white" to="/cart">
            <ShoppingCartIcon />
            {cartItems.length} items
          </Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Dropdown