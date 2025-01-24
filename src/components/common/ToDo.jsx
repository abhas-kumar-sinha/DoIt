import { FaCaretDown } from "react-icons/fa";
import { LuBell, LuCalendar } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import ToDoTasksList from "./ToDoTasksList";
import propType from "prop-types"

const ToDo = ({ setEditToDo }) => {

    const todoList = [
        {
            title: "Buy groceries",
            stared: false
        },
        {
            title: "Finish project report",
            stared: true
        },
        {
            title: "Call the bank",
            stared: false
        },
        {
            title: "Schedule dentist appointment",
            stared: false
        },
        {
            title: "Plan weekend trip",
            stared: false
        }
    ]

    const completedList = [
        {
            title: "Read a book",
            stared: false
        },
        {
            title: "Clean the house",
            stared: false
        },
        {
            title: "Prepare presentation",
            stared: false
        },
        {
            title: "Update blog",
            stared: false
        }
    ]

  return (
    <div className="text-sm w-full text-center min-w-[40%]">
        <div className="flex items-center justify-between w-fit p-1 rounded-md ps-2 cursor-pointer hover:bg-[#d5d9d7] group transition-all duration-200">
            <div className="flex items-center gap-1 text-[#A5B1A7]">
                <p className="font-semibold tracking-tighter group-hover:text-[#1B281B] transition-all duration-200">To Do</p>
                <FaCaretDown className="text-lg group-hover:text-[#1B281B] transition-all duration-200" />
            </div>
        </div>
        <div className="w-full pb-7 px-6 h-auto bg-gradient-to-b from-[var(--box-initial)] to-[var(--box-final)] mt-1 border-y-2 border-[var(--border-color)]">
            <div className="flex items-center text-base font-semibold justify-between h-36 text-[var(--tertiary-text)]">
                Add a Task
            </div>
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-7">
                    <LuBell className="text-2xl text-[var(--primary-text)] cursor-pointer" />
                    <RxLoop className="text-2xl text-[var(--primary-text)] cursor-pointer" />
                    <LuCalendar className="text-2xl text-[var(--primary-text)] cursor-pointer" />
                </div>

                <button className="bg-[var(--cta-color)] cursor-pointer font-semibold text-[var(--cta-text)] px-4 py-1.5 rounded-md hover:bg-[var(--cta-text)] hover:text-[var(--cta-color)] transition-all duration-200" >ADD TASK</button>
            </div>
        </div>

        <ToDoTasksList value={todoList} setEditToDo={setEditToDo} completed={false} />
        <ToDoTasksList value={completedList} setEditToDo={setEditToDo} completed={true} />
    </div>
  )
}

ToDo.propTypes = {
    setEditToDo: propType.func.isRequired
}

export default ToDo;