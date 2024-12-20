import React, { useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { Context } from "../utils/Context";

const DetailedView = () => {
  const { id } = useParams();
  const { lightTheme, transactionList } = useContext(Context);

  const transaction = transactionList.find((item) => item.id === id);

  if (!transaction) {
    return (
      <div
        className={`flex flex-col w-full min-h-screen ${
          lightTheme ? "bg-gray-100" : "bg-gray-900"
        }`}
      >
        <Header />
        <p className="text-center mt-8 text-red-500 font-bold text-3xl flex-1">
          Transaction not found.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col w-full min-h-screen ${
        lightTheme ? "bg-gray-100" : "bg-gray-900"
      }`}
    >
      <Header />
      <div className="flex w-full items-center justify-center flex-1">
        <div
          className={`p-8 max-w-2xl w-full border rounded-2xl shadow-lg ${
            lightTheme
              ? "bg-white border-gray-300"
              : "bg-gray-800 border-gray-700"
          }`}
        >
          <h1
            className={`text-3xl font-semibold text-center mb-6 ${
              lightTheme ? "text-gray-900" : "text-white"
            }`}
          >
            Transaction Details
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className={`p-6 border rounded-xl shadow-md ${
                lightTheme
                  ? "bg-gray-50 text-gray-700"
                  : "bg-gray-700 text-white"
              }`}
            >
              <h2 className="text-lg font-medium">Transaction Name</h2>
              <p className="mt-2">{transaction.name}</p>
            </div>
            <div
              className={`p-6 border rounded-xl shadow-md ${
                lightTheme
                  ? "bg-gray-50 text-gray-700"
                  : "bg-gray-700 text-white"
              }`}
            >
              <h2 className="text-lg font-medium">Amount</h2>
              <p className="mt-2">₹{transaction.amount}</p>
            </div>
            <div
              className={`p-6 border rounded-xl shadow-md ${
                lightTheme
                  ? "bg-gray-50 text-gray-700"
                  : "bg-gray-700 text-white"
              }`}
            >
              <h2 className="text-lg font-medium">Type</h2>
              <p className="mt-2">
                {transaction.type === "income" ? "Income" : "Expense"}
              </p>
            </div>
            <div
              className={`p-6 border rounded-xl shadow-md ${
                lightTheme
                  ? "bg-gray-50 text-gray-700"
                  : "bg-gray-700 text-white"
              }`}
            >
              <h2 className="text-lg font-medium">Date/Time</h2>
              <p className="mt-2">
                {new Date(transaction.date).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedView;
