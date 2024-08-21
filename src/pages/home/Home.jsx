import React, { createContext, useState } from "react";
import Child from "./Child";
import { useStateValue } from "@/context";
import Products from "@/components/products/Products";
import { useFetch } from "@/hooks/useFetch";

export const Context = createContext();
const Home = () => {
  const [limit, setLimit] = useState(4);
  const { data: payload, loading } = useFetch("/products");

  return (
    <div>
      <h2 className="text-center text-4xl">Home</h2>
      <Products title={"New product"} data={payload?.products} />
      <div className="flex items-center justify-center ">
      </div>

      <Context.Provider value={(limit, setLimit)}>
        <Child />
      </Context.Provider>
    </div>
  );
};

export default Home;
