import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
// import {clearCart} from '../utils/cartSlice';
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

import CartItemList from "./CartItemList";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const item = useSelector((store) => store.cart.items);
  // console.log(item);
  const totalPrice = useSelector((store) => store.cart.sum);
  // const {quantity} = item?.card;
  // console.log(item);

  const dispatch = useDispatch();

  const clearWholeCart = () => {
    dispatch(clearCart());
  };

  // let sum = 0;

  // item.map((ele) => {
  //   // sum = sum + ele?.card?.info?.price ? ele?.card?.info?.price : ele?.card?.info?.defaultPrice ;
  //   if (ele.card.info.price) {
  //     sum = sum + ele?.card?.info?.price;
  //   } else {
  //     sum = sum + ele?.card?.info?.defaultPrice;
  //   }
  // });

  if (item.length === 0) {
    return (
      <EmptyCart
        imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        text1="Your cart is empty"
        text2="You can go to home page to view more restaurants"
        label="SEE RESTAURANTS NEAR YOU"
      />
    );
  }

  return (
    
    <div className="fullpage max-lg:flex justify-center max-lg:w-[100%] max-lg:flex-wrap max-lg:m-0 p-0 ">
      <div className="CartPageDesign  max-lg:flex justify-center max-lg:w-[100%] max-lg:flex-wrap max-lg:m-0 p-0">
        <div className="leftSide max-lg:w-[95%] max-lg:mt-2 mb-2">
          <div className="leftsidetitle">
            <div className="leftsidetitlename">
              Cart ({item.length}Products)
            </div>
            <div className="clearCartButton max-lg:mr-4 max-sm:mr-8">
              <Button
                className="clear"
                variant="contained"
                onClick={clearWholeCart}
              >
                Clear Cart
              </Button>
            </div>
          </div>

          <div className="orderListHeader max-lg:hidden">
            <h2>PRODUCT</h2>
            <h2>NAME</h2>
            <h2>QUANTITY</h2>
            <h2>REMOVE</h2>
          </div>

          <hr className="bg-black h-1" />

          <div>
            {item.map((ele, index) => {
              return (
                <CartItemList
                  key={index}
                  id={index}
                  ele={ele}
                  // quantity={quantity}
                />
              );
            })}
          </div>
        </div>

        <div className="rightSide max-lg:w-[66%] max-lg:mb-14 max-sm:h-[500px]">
          <h3 className="promotitle">PROMO CODE</h3>
          <input type="text" className="promocode max-sm:w-[80%]" placeholder="Enter Code" />
         <div className="ml-4 mb-4">
          <Button variant="contained">APPLY</Button>
          </div>
            <div className="max-md:pt-4">
          <hr className="line" />
          </div>
          <div className="paymentDetail">
            <h4 className="sub">Subtotal</h4>
            <h6 className="discount">Discount </h6>
            <h3 className="totalPrice">Total</h3>
            <h4 className="var1">Rs.{totalPrice / 100}</h4>
            <h5 className="var2">
              {totalPrice / 100 > 1000 ? "Rs.250 OFF" : "ABOVE RS.1000"}
            </h5>
            <h3 className="var3">
              Rs.
              {totalPrice / 100 > 1000
                ? totalPrice / 100 - 250
                : totalPrice / 100}
            </h3>
          </div>
          <Link to="/placed">
            <Button className="placeOrder" variant="contained">
              PLACE ORDER
            </Button>
          </Link>

          {/* <p className="font-semibold text-sm">WE ACCEPT:</p>
            <img src={PaymentLogo} alt="payment" /> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
