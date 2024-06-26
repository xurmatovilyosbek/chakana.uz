import { useConst } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BasketContext } from "./karzinkaContext";

export let Dynamig = () => {
  const {getBasketData} = useContext(BasketContext)

  let params = useParams();
  let [data, setData] = useState(null);
  let exit = useNavigate();

  useEffect(() => {
    const response = async () => {
      try {
        let res = await axios.get(
          `https://72af288291cb91cd.mokky.dev/phones/${params.id}`
        );
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    response();
  }, [params.id]);
  // console.log(data);
  return (
    <div className="flex items-center justify-center pt-[90px]">
      {data ? (
        <div className="flex items-center justify-center flex-col p-[10px]">
          <button
            onClick={() => exit(-1)}
            className="w-[200px] h-[35px] mt-[40px] rounded-2xl text-[#fff] bg-[#800000]"
          >
            exit
          </button>
          <img src={data.img} alt="" />
          <h1 className="mt-[20px]">{data.name}</h1>
          <p>{data.price}</p>

          <button onClick={()=>getBasketData(data)} className="w-[200px] h-[35px] mt-[40px] rounded-2xl text-[#fff] bg-[#001380]">
            buy
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
