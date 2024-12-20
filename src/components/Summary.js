import React, { useContext, useEffect } from "react";
import { Context } from "../utils/Context";

const Summary = () => {
  const { lightTheme, transactionList } = useContext(Context);

  useEffect(() => {
    console.log("Transaction List:", transactionList);
  }, [transactionList]);

  const totalIncome = transactionList
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactionList
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  return (
    <div className="flex w-2/3 flex-col">
      <h1
        className={`font-bold text-3xl pb-3 ${
          lightTheme ? "text-gray-700" : "text-gray-50"
        }`}
      >
        Summary
      </h1>
      <div className="flex space-x-4">
        <div className="flex-1 bg-white shadow-lg rounded-lg p-5">
          <h2 className="font-semibold text-xl text-green-500">Total Income</h2>
          <p className="text-2xl text-gray-700">
            ₹{totalIncome > 0 ? totalIncome : 0}
          </p>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-5">
          <h2 className="font-semibold text-xl text-red-500">Total Expenses</h2>
          <p className="text-2xl text-gray-700">
            ₹{totalExpenses > 0 ? totalExpenses : 0}
          </p>
        </div>
        <div className="flex-1 bg-white shadow-lg rounded-lg p-5">
          <h2 className="font-semibold text-xl text-blue-500">Net Balance</h2>
          <p className="text-2xl text-gray-700">₹{netBalance}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
