import React from "react";
import { useRouteError } from "react-router-dom";
import Logo2 from '../Images/Logo2.png';
import EmptyCart from "./EmptyCart";

const Error = () => {
  // const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <EmptyCart
        imgUrl={Logo2}
        text1="WELCOME TO OUR WEBSITE"
        text2="You can go to home page to view more restaurants"
        label="EXPLORE US"
      />
    </div>
  );
};

export default Error;
