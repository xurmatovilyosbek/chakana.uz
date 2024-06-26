import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "./ProductContext";
import { BasketContext } from "./karzinkaContext";
import { LikeContext } from "./likeContex";
import { FcLike } from "react-icons/fc";
import { Home } from "./Home";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { TbBasketPlus } from "react-icons/tb";
import { TbAlignBoxLeftStretch } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import Kategori from "./kategori";
import Phones from "./catigories/phones";
import Tv from "./catigories/Televizor";
import Kirmashin from "./catigories/Kirmashin";
import Klimat from "./catigories/klimat";
import Mashxur from "./catigories/mashur";
import App from "./homeSwiper";
import Afzallik from "./catigories/afzallik";
import HeaderBottom from "./headerBottom";

export const Card = () => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Home />
      <App />
      <Kategori />

      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Telefonlar va gadgetlar
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Phones />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Televizorlar
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Tv />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Kir mashinalari
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Kirmashin />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Klimat uskunalar
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Klimat />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px]">
        Mashxur brendlar
      </h1>
      <div className="flex items-center justify-center m-[30px]">
        <Mashxur />
      </div>
      <h1 className="font-semibold text-[30px] mt-[40px] ml-[30px] mb-[50px]">
        Bizning afzalliklarimiz
      </h1>
      <div>
        <Afzallik />
      </div>
    </div>
  );
};
