import React, { useContext } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import { Context } from "../utils/Context";

const DetailedView = () => {
  const { id } = useParams();
  const { transactionList } = useContext(Context);

  const transaction = transactionList.find((item) => item.id === id);

  if (!transaction) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
        <Header />
        <p className="text-center mt-8 text-red-500 font-bold text-3xl flex-1">
          Transaction not found.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex w-full items-center justify-center flex-1 p-4">
        <div className="p-6 sm:p-8 max-w-3xl w-full border rounded-3xl shadow-2xl bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-3xl font-semibold text-center mb-6 text-indigo-600 dark:text-indigo-400">
            Transaction Details
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-4 sm:p-6 border rounded-xl shadow-md bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
              <h2 className="text-lg font-medium text-blue-600 dark:text-blue-400">
                Transaction Name
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                {transaction.name}
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-xl shadow-md bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
              <h2 className="text-lg font-medium text-green-600 dark:text-green-400">
                Amount
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                ₹{transaction.amount}
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-xl shadow-md bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
              <h2 className="text-lg font-medium text-yellow-600 dark:text-yellow-400">
                Type
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
                {transaction.type === "income" ? "Income" : "Expense"}
              </p>
            </div>
            <div className="p-4 sm:p-6 border rounded-xl shadow-md bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
              <h2 className="text-lg font-medium text-purple-600 dark:text-purple-400">
                Date/Time
              </h2>
              <p className="mt-2 text-gray-800 dark:text-gray-200">
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
