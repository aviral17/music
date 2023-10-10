// https://agneym.github.io/react-loading/

import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="w-full flex justify-center items-center flex-col">
    <img src={loader} alt="loader" className="w-32 h-32 object-contain" />
    <h1 className={`font-thin text-3xl text-yellow-50  mt-2`}>
      {title || "Loading..."}
    </h1>
  </div>
);

export default Loader;
