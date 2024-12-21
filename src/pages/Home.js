import React from "react";
import Header from "../components/Header";
import Summary from "../components/Summary";
import { Transactions } from "../components/Transactions";

const Home = () => {
  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-800">
      <Header />
      <div className="flex flex-col w-full py-4 items-center flex-1">
        <Summary />
        <Transactions />
      </div>
    </div>
  );
};

export default Home;
