import React, { useContext } from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import { Transactions } from "../components/Transactions";
import { Context } from "../utils/Context";

const Home = () => {
  const { lightTheme } = useContext(Context);

  return (
    <div
      className={`flex flex-col w-full min-h-screen ${
        lightTheme ? "bg-gray-100" : "bg-gray-800"
      }`}
    >
      <Header />
      <div className="flex flex-col w-full py-4 items-center flex-1">
        <Summary />
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
