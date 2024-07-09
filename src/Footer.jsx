import React from "react";
import { GiCargoCrate } from "react-icons/gi";
import "./responsive/footer.scss"

const Footer = () => {
  return (
    <div>

     
      <section className="w-full flex justify-between items-start mt-[100px] text-white bg-gray-600 p-[20px] text-center" id="sc3">
        <div>
          <h1 className="text-2xl mb-[20px]">kontaktlar</h1>
          <p>Telefon: +998 78-777-88-99</p>
          <p>Elektron pochta manzili: info@chakana.uz</p>
          <p className="mb-[20px]">Manzil: 100096, Toshkent sh. Muqimi 43</p>
        </div>
        <div>
          <h1 className="text-2xl mb-[20px]">mijozlar uchun</h1>
          <p>Qanday sotib olish</p>
          <p>Mahsulotlarni qaytarish va almashtirish</p>
          <p>Yetkazib berish</p>
          <p className="mb-[20px]">Kreditga mahsulot sotib olish</p>
        </div>
        <div>
          <h1 className="text-2xl mb-[20px]">Yetkazib beruvchilar uchun</h1>
          <p>sotuvchilarga</p>
          <p className="mb-[20px]">Hamkorlik qilish</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
