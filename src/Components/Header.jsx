import React, { useState } from "react";
import Logo2 from "../Images/Logo2.png";
// import icon from "../Images/icon.png";
import { Link } from "react-router-dom";
import "../index.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
// import HelpIcon from '@mui/icons-material/Help';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Dropdown from "./Dropdown";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [show,setShow] = useState(false);

  const changeCred = () => {
    //  if(login==="Login"){
    //   setLogin("Logout");
    //  }else{
    //   setLogin("Login");
    //  }
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };



  /**
   * ! SUBSCRIBING TO THE STORE BY USING useSelector hook...
   * !we are subscribing because we want to read data from cartSlice and want to show that data in header i.e we want to show the length of items   which is  present in cartSlice at icon section of header...
   */
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);


  const handleMenu = () =>{
    console.log(show);
    setShow(!show);
    console.log(show);
  }

  return (
    <>
    <div className="max-md:sticky max-md:top-0 max-md:z-[90] bg-white">
      <div className="flex justify-between p-4 shadow-xl max-md:justify-between">
        <div className="headerLogo">
          <img className="w-16" src={Logo2} />
        </div>

        <div className="hidden max-md:flex flex-col justify-start items-end rounded-lg p-6 mr-10 ">
          <MenuIcon onClick={handleMenu} />
         
        </div>

      



        {/* //links */}
        <div className="headerRight max-md:hidden max-lg:gap-16">
          <Link className="links" to="/">
            <HomeIcon />
            Home
          </Link>
          <Link className="links" to="/search">
            <SearchOutlinedIcon />
            Search
          </Link>
          <Link className="links" to="/offer">
            {" "}
            <LocalOfferIcon /> Offers
          </Link>

          <Link className="links" to="/cart">
            <ShoppingCartIcon />
            {cartItems.length} 
          </Link>

          <Button className="btnnew" variant="contained" onClick={changeCred}>
            {login}
          </Button>
        </div>
      </div>

      {show && <Dropdown show={show}/>}

      
      </div>
    </>
  );
};

export default Header;
