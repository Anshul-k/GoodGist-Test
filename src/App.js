import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DetailedView from "./pages/DetailedView";
import { Context } from "./utils/Context";
import { useEffect, useState } from "react";

function App() {
  const [transactionList, setTransactionList] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Context.Provider
      value={{
        transactionList,
        setTransactionList,
        theme,
        setTheme,
        toggleTheme,
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
