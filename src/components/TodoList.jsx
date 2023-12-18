import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { deleteTodos } from "../reduxStore/TodoSlice";
const TodoList = ({ todo, _id }) => {
  const dispatch = useDispatch()
  const [mark, setMark] = useState(false);
  return (
    <motion.li
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        y: { type: "spring", stiffness: 120 },
      }}
      onClick={() => setMark(!mark)}
      className={`${
        mark
          ? "border-1-orange-500 border-orange-900"
          : "border-1-green-500 border-green-900"
      }
       w-full flex items-center justify-between font-titleFont font-medium text-base border-[1px] border-1-[6px] px-2 py-1 cursor-pointer`}
    >
      {todo}
      <span onClick={()=>dispatch(deleteTodos(_id))} className="text-xl text-gray-300 duration-300 cursor-pointer hover:text-red-500">
        <MdDelete />
      </span>
    </motion.li>
  );
};

export default TodoList;
