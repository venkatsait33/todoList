import { useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import TodoList from "./TodoList";
import ErrorMsg from "./msg/ErrorMsg";
import SuccessMsg from "./msg/SuccessMsg";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, removeTodos } from "../reduxStore/TodoSlice";
import { motion } from "framer-motion";
function InputForm() {
  const dispatch = useDispatch();
  const todosItem = useSelector((state) => state.todos.todosList);
  const [todoValue, setTodoValue] = useState("");
  const [category, setCategory] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const options = [
    {
      _id: 1000,
      title: "categories",
    },
    {
      _id: 1001,
      title: "personal",
    },
    {
      _id: 1002,
      title: "business",
    },
    {
      _id: 1003,
      title: "others",
    },
  ];
  const handleTodo = (e) => {
    e.preventDefault();
    if (todoValue === "") {
      setErrMsg("Please enter a todo");
      setShowError(true);
      setShowSuccess(false);
    } else if (category === "") {
      setErrMsg("Please select a category");
      setShowError(true);
      setShowSuccess(false);
    } else if (category === "categories") {
      setErrMsg("select a valid category");
      setShowError(true);
      setShowSuccess(false);
    } else {
      dispatch(
        addTodos({
          _id: Math.random() + 1,
          todo: todoValue,
          category: category,
        })
      );
      setTodoValue("");
      setShowSuccess(true);
      setShowError(false);
      setSuccessMsg("Todo added successfully");
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showError && setShowError(false);
      showSuccess && setShowSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [showError, showSuccess]);

  return (
    <div className="flex flex-col w-full gap-4 bg-bodyColor">
      <div className="flex items-center h-12 gap-4">
        <input
          onChange={(e) => setTodoValue(e.target.value)}
          value={todoValue}
          className="input"
          type="text"
          placeholder="Enter your Todo......"
        />
        <div className="w-[20%] h-full relative">
          <select
            onChange={(e) => setCategory(e.target.value)}
            className="w-full h-full text-center capitalize outline-none bg-bodyColor border-[1px] border-gray-400 px-1 cursor-pointer appearance-none rounded-md focus-visible:border-orange-600 hover:border-white"
          >
            {options.map((item) => (
              <option key={item._id}>{item.title}</option>
            ))}
          </select>
          <span className="absolute right-3 top-4">
            <FaArrowDown />
          </span>
        </div>
      </div>
      <button onClick={handleTodo} className="button">
        Add Todo
      </button>
      <div className="flex flex-col gap-4">
        <ul className="grid grid-cols-1 gap-4 p-4 mt-6 border border-gray-600 shadow-todoShadow">
          {todosItem.length > 0 ? (
            <>
              {todosItem.map((item) => (
                <TodoList key={item._id} todo={item.todo} _id={item._id} />
              ))}
            </>
          ) : (
            <p className="text-base font-medium tracking-wide text-center text-yellow-500 font-titleFont">
              Your todo list is empty
            </p>
          )}
        </ul>
        {todosItem.length > 0 && (
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowRemove(true)}
            className="button2"
          >
            Remove Todos
          </motion.button>
        )}
      </div>
      {/* error message start here */}
      {showError && <ErrorMsg errMsg={errMsg} />}
      {/* error message end here */}
      {/* success message start here */}
      {showSuccess && <SuccessMsg successMsg={successMsg} />}
      {/* success message end here */}
      {showRemove && (
        <div className="fixed top-0 left-0 w-full h-screen bg-bodyColor bg-opacity-60">
          <div className="absolute z-50 flex flex-col gap-4 px-8 py-4 transform -translate-x-1/2 -translate-y-1/2 border border-red-500 rounded-md top-1/2 left-1/2 bg-bodyColor shadow-todoShadow">
            <p className="text-xl font-medium text-center text-red-500">
              Are you sure to &nbsp;
              <span className="underline underline-offset-2 font-semibold decoration-[1px]">
                remove
              </span>{" "}
              all the todos?
            </p>
            <div className="flex items-center justify-center gap-4">
              <button onClick={()=> dispatch(removeTodos()) & setShowRemove(false)}
                className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-red-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-red-500 duration-500 ">
                Yes
              </button>
              <button onClick={()=> setShowRemove(false)} className="px-6 py-2 text-base font-titleFont text-orange-500 hover:text-green-500 font-semibold bg-transparent border-[1px] border-gray-500 hover:border-green-500 duration-500 ">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputForm;
