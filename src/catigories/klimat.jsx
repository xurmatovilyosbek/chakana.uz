import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../ProductContext";
import { BasketContext } from "../karzinkaContext";
import { LikeContext } from "../likeContex";
import { FcLike } from "react-icons/fc";
import { Home } from "../Home";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbBasketPlus } from "react-icons/tb";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import Kategori from "../kategori";

const Klimat = () => {
  const [product] = useContext(ProductContext);
  const { getBasketData } = useContext(BasketContext);
  const { getLikedData } = useContext(LikeContext);

  return (
    <div id="klimat" className="flex overflow-x-auto gap-3 scroll-mt-[20px]">
      {product.map(item => {
        if (item.tip == "klimat") {
          return (  
            <div
              key={item.id}
              className="w-[200px] relative text-center p-[10px] rounded-2xl border-gray-300 border-[1px] hover:border-red-500 transition-all"
            >
              <button
                id="likeq"
                className="absolute top-[10px] bg-white right-[10px] border-gray-200 border-[1px] p-[6px] rounded-lg hover:border-red-500 transition-all"
                onClick={() => getLikedData(item)}
              >
                <MdOutlineFavoriteBorder />
              </button>
              <button
                id="like"
                className="bg-white absolute rotate-[-90deg] top-[50px] right-[10px] translate-[260deg] border-gray-200 border-[1px] p-[6px] rounded-lg hover:border-red-500 transition-all"
              >
                <TbAlignBoxLeftStretch />
              </button>
              <Link to={`/Card/${item.id}`}>
                <img className="p-[10px] max-w-[170px]" src={item.img} alt={item.name} />
                <h1 className="text-[15px] text-left">{item.name}</h1>
                <div className="flex gap-[2px] w-[70px] mt-[5px]">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h2 className="text-[16px] text-left mt-[5px]">{`${item.price.toLocaleString()} so'm`}</h2>
                <h1 className=" bg-red-200 text-red-700 rounded-lg mt-[5px]">
                  {"oyiga " +
                    parseInt(item.price / 12).toLocaleString() +
                    " so`mdan"}
                </h1>
                <hr className="mt-[20px]" />
              </Link>
              <div className=" flex items-center justify-between">
                <div>1 ta Taklif</div>
                <div>
                  <button
                    onClick={() => getBasketData(item)}
                    className="p-2 tetx-[30px] transition-all hover:scale-110"
                  >
                    <TbBasketPlus className="text-[25px]" />
                  </button>
                  {/* Uncomment if implementing like functionality */}
                  {/* <button onClick={() => toggleLike(item.id)} className="p-2 w-[100px] m-[10px] rounded-2xl">
                    {likedItems.includes(item.id) ? <FcLike /> : <MdFavoriteBorder />}
                  </button> */}
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Klimat;