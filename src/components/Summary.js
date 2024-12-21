import React, { useContext, useMemo } from "react";
import { Context } from "../utils/Context";

const Summary = () => {
  const { transactionList } = useContext(Context);

  const totalIncome = useMemo(() => {
    return transactionList
      .filter((transaction) => transaction.type === "income")
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [transactionList]);

  const totalExpenses = useMemo(() => {
    return transactionList
      .filter((transaction) => transaction.type === "expense")
      .reduce((acc, curr) => acc + curr.amount, 0);
  }, [transactionList]);

  const netBalance = useMemo(
    () => totalIncome - totalExpenses,
    [totalIncome, totalExpenses]
  );

  return (
    <div className="flex flex-col w-full px-4 sm:px-8">
      <h1 className="font-bold text-3xl pb-3 text-gray-700 dark:text-gray-100">
        Summary
      </h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div className="flex-1 bg-white dark:bg-gray-700 shadow-lg dark:shadow-md dark:shadow-gray-900 rounded-lg p-5 border dark:border-gray-600">
          <h2 className="font-semibold text-xl text-green-500 dark:text-green-400">
            Total Income
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-100">
            ₹{totalIncome > 0 ? totalIncome : 0}
          </p>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-700 shadow-lg dark:shadow-md dark:shadow-gray-900 rounded-lg p-5 border dark:border-gray-600">
          <h2 className="font-semibold text-xl text-red-500 dark:text-red-400">
            Total Expenses
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-100">
            ₹{totalExpenses > 0 ? totalExpenses : 0}
          </p>
        </div>

        <div className="flex-1 bg-white dark:bg-gray-700 shadow-lg dark:shadow-md dark:shadow-gray-900 rounded-lg p-5 border dark:border-gray-600">
          <h2 className="font-semibold text-xl text-blue-500 dark:text-blue-400">
            Net Balance
          </h2>
          <p className="text-2xl text-gray-700 dark:text-gray-100">
            ₹{netBalance}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
