import React, { useState } from "react";

import { useParams } from "react-router-dom";
import OffersCard from "./OffersCard";
import LongListsCards from "./LongListsCards";
import useMenuList from "../utils/useMenuList";
import Shimmer from "./Shimmer";

const DetailedCard = () => {
  const { resid } = useParams();

  // const [istrue, setIsTrue] = useState(true);
  const [showIndex, setShowIndex] = useState();

  const showChanges = (id) => {
    setShowIndex(id);
    
  };

  //Getting data from custom hook useMenuList in which data has been fetched by real API
  const resInfo = useMenuList(resid);

  // if (resInfo === null) return <About />;
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, areaName, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const offerCard =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
  const longList = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards;

  return (
    <div>
    <h1 className="text-3xl text-black font-black text-center underline mt-5">{name}</h1>
      <div className=" md:flex justify-center md:mt-2">
      
        <div className="max-md:flex justify-center gap-2 md:w-[20%]">
          
          <h5 className="text-center">{cuisines}</h5>
          <h3 className="text-center">{areaName}</h3>
        </div>
        <div className="md:w-[20%] ">
          <h3 className="text-center">{"⭐" + avgRating}</h3>
          <h6 className="text-green-700 font-black text-center">500k+</h6>
        </div>
      </div>

      <div className="">
        <div className="max-md:flex max-md:justify-center max-md:gap-2 mt-5 md:flex justify-center gap-4">
          <h4 className="text-red-700 font-semibold text-center">🕥 25min</h4>
          <h3 className="text-green-700 font-semibold text-center">💰 {costForTwoMessage}</h3>
        </div>

        <div className="max-md:flex justify-around flex-wrap mt-5 offerCards">
          {offerCard &&
            offerCard.map((ele, index) => {
              return (
                <OffersCard
                  key={index}
                  header={ele.info.header}
                  description={ele.info.description}
                  couponcode={ele.info.couponCode}
                />
              );
            })}
        </div>
      </div>

      <div className="cardCont3">
        {longList &&
          longList.map((ele, index) => {
            if (index === 0) {
              return null;
            } else {
              return (
                <LongListsCards
                  key={index}
                  totalData={ele}
                  id={index}
                  istrue={index == showIndex ? false : true}
                  icon={index == showIndex ? "⏫" : "🔽"}
                  accordionFunction={() => showChanges(index)}
                />
              );
            }
          })}
      </div>
    </div>
  );
};

export default DetailedCard;
