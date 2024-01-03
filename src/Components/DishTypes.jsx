import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function DishTypes({data}) {
    console.log(data); 
  var settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 5
  };

  var settings3 = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 5
  };

  var settings2 = {
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 5
  };
  return (
    <div >

    <div className="hidden lg:block">
    <Slider {...settings}>
    {data && data.map((ele)=> {
       return(
        <div key={ele.id} className="pt-6 px-2 outline-none rounded-full">
            <img className="w-44" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + ele.imageId} />
        </div>
       ) 
    })}
    </Slider>
    </div>
   

    <div className=" hidden max-md:block" >
    <Slider {...settings2}>
    {data && data.map((ele)=> {
       return(
        <div key={ele.id} className="pt-6 px-2 outline-none rounded-full">
            <img className="w-44" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + ele.imageId} />
        </div>
       ) 
    })}
    </Slider>
    </div>

    <div className=" hidden md:block lg:hidden" >
    <Slider {...settings3}>
    {data && data.map((ele)=> {
       return(
        <div key={ele.id} className="pt-6 px-2 outline-none rounded-full">
            <img className="w-44" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,c_fill/" + ele.imageId} />
        </div>
       ) 
    })}
    </Slider>
    </div>

    </div>
  );
}

