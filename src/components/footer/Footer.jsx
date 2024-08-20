import React, { useReducer } from "react";
import { initialState, reducer } from "@/components/footer/reducer";

const Footer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="h-60 bg-slate-900 text-white">
      
    </div>
  );
};

export default Footer;
