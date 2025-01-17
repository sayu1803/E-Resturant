import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);

    const handleHeartClick = () => {
        setIsHeartFilled(!isHeartFilled);
    };

    return (
        <div className="card card-compact bg-base-100 w-96 shadow-xl relative">
            <div 
                className={`absolute right-2 top-2 p-4 rounded-full cursor-pointer ${isHeartFilled ? "bg-red-500" : "bg-green-500"}`}
                onClick={handleHeartClick}
            >
                <FaHeart className={`h-5 w-5 absolute right-2  cursor-pointer  ${isHeartFilled ? "text-rose-500":"text-black"  }`} />
            </div>
            <Link to={`/menu/${item._id}`}>
                <figure>
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="hover:scale-105 transition-all duration-200 md:h-72" 
                    />
                </figure>
            </Link>

            <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.recipe}</p>
                <div className="card-actions justify-between items-center mt-2">
                    <h5 className="font-semibold">
                        <span className="text-sm text-red">₹</span>
                        {item.price}
                    </h5>
                    <button className="btn bg-green text-white">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
