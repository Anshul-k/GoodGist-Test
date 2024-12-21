import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Context } from "../utils/Context";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "25rem",
  maxWidth: "90%",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
};

export const Transactions = () => {
  const { transactionList, setTransactionList } = useContext(Context);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const transactionName = useRef();
  const transactionAmount = useRef();
  const typeOfTransaction = useRef();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = transactionName.current.value.trim();
    const amount = transactionAmount.current.value.trim();
    const type = typeOfTransaction.current.value;

    if (!name || !amount || !type) {
      setError("All fields are required.");
      return;
    }

    if (isNaN(amount) || Number(amount) <= 0) {
      setError("Amount must be a valid positive number.");
      return;
    }

    setError("");
    setTransactionList((prev) => [
      ...prev,
      {
        id: uuidv4(),
        name: name,
        amount: Number(amount),
        type: type,
        date: new Date(),
      },
    ]);

    handleClose();
  };

  const handleDelete = (id) => {
    setTransactionList((prev) =>
      prev.filter((transaction) => transaction.id !== id)
    );
  };

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactionList");
    if (storedTransactions) {
      setTransactionList(JSON.parse(storedTransactions));
    }
  }, [setTransactionList]);

  useEffect(() => {
    localStorage.setItem("transactionList", JSON.stringify(transactionList));
  }, [transactionList]);

  return (
    <div className="flex sm:w-2/3 w-full px-4 sm:px-8 flex-col pt-4 flex-1">
      <div className="flex justify-between">
        <h1 className="font-bold text-3xl sm:text-2xl pb-3 text-gray-700 dark:text-gray-100">
          Transactions
        </h1>
        <button
          onClick={handleOpen}
          type="button"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
        >
          Add Transaction
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          BackdropProps={{
            style: {
              backdropFilter: "blur(2px)",
            },
          }}
        >
          <Box sx={style}>
            <form
              className="flex flex-col gap-4 p-4 rounded-lg bg-white dark:bg-gray-800"
              onSubmit={handleSubmit}
            >
              <h1 className="text-lg font-semibold dark:text-gray-100">
                Fill the Details
              </h1>
              <div className="border-2 rounded-md p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                <input
                  className="outline-none w-full p-2 bg-transparent dark:placeholder-gray-400"
                  type="text"
                  placeholder="Transaction Name"
                  ref={transactionName}
                />
              </div>
              <div className="border-2 rounded-md p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100">
                <input
                  className="outline-none w-full p-2 bg-transparent dark:placeholder-gray-400"
                  type="text"
                  placeholder="Transaction Amount"
                  ref={transactionAmount}
                />
              </div>
              <select
                ref={typeOfTransaction}
                className="border-2 rounded-md p-2 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              >
                <option value="">Select Type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
              {error && (
                <Typography
                  variant="body2"
                  color="error"
                  className="text-red-500 dark:text-red-400"
                >
                  {error}
                </Typography>
              )}
              <button
                type="submit"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Add Transaction
              </button>
            </form>
          </Box>
        </Modal>
      </div>
      <div className="flex flex-col w-full mt-6">
        {transactionList.length === 0 && (
          <p className="text-center flex-1 text-lg font-bold text-gray-700 dark:text-gray-100">
            No Transactions found, please add a new Transaction.
          </p>
        )}
        {transactionList.length > 0 && (
          <div className="flex flex-col pb-5 gap-4 overflow-y-auto max-h-96">
            {transactionList.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-2 rounded-lg shadow-lg p-4 bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex">
                  <h2 className="font-semibold text-base sm:text-lg text-gray-900 dark:text-gray-100">
                    {item.name}
                  </h2>
                </div>
                <div className="flex gap-3 sm:gap-4 items-center">
                  <p className="font-semibold text-base sm:text-lg text-green-600 dark:text-green-400">
                    ₹{item.amount}
                  </p>
                  <p
                    className={`font-semibold sm:text-lg text-base ${
                      item.type === "income"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {item.type === "income" ? "Income" : "Expense"}
                  </p>
                  <Link
                    to={`/view/${item.id}`}
                    className="text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-lg text-sm py-1 px-3 focus:outline-none"
                  >
                    View
                  </Link>
                  <DeleteIcon
                    onClick={() => handleDelete(item.id)}
                    className="cursor-pointer text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-600"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
