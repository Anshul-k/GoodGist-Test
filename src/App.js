import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailedView from "./pages/DetailedView";
import { Context } from "./utils/Context";
import { useState } from "react";

function App() {
  const [transactionList, setTransactionList] = useState([]);
  const [lightTheme, setLightTheme] = useState(true);

  const totalIncome = transactionList
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactionList
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const netBalance = totalIncome - totalExpenses;

  return (
    <Context.Provider
      value={{
        transactionList,
        setTransactionList,
        lightTheme,
        setLightTheme,
        totalIncome,
        totalExpenses,
        netBalance,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:id" element={<DetailedView />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
