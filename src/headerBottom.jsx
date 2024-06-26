import React from "react";
import { Link } from "react-router-dom";
import { TbCategory } from "react-icons/tb";
import { GiCardExchange } from "react-icons/gi";
import { FaShoppingBasket } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const HeaderBottom = () => {
  return (
    <div className=" fixed bottom-0 w-full bg-white h-[60px] flex justify-between items-center z-50 p-[10px] cursor-pointer">
      <Link to="/" className="block text-center">
      <FaHome className="text-[30px]"/>
        
      </Link>
      <Link to="/like" className="block text-center">
      <MdFavorite className="text-[30px]" />
        
      </Link>
      <Link to="/kirish" className="block text-center">
      <GiCardExchange className="text-[30px]"/>
        
      </Link>
      <Link to="/karzinka" className="block text-center">
      <FaShoppingBasket className="text-[30px]"/>
        
      </Link>
      <Link to="/kirish" className="block text-center">
        <button>
        <FaRegUser className="text-[30px]"/>
        </button>
      </Link>
    </div>
  );
};

export default HeaderBottom;
