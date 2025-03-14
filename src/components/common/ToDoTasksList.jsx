import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import propType from "prop-types"
import { useAppContext } from "../../context/AppContext"

const ToDoTasksList = ({ value, completed, setEditToDo }) => {
    const { showBlock, editList, menu, setEditList } = useAppContext()

    const handleEditToDo = (e, item) => {
        e.stopPropagation()
        setEditToDo(item)
        setEditList(true)
    }

  return (
    <div className={`${completed ? "mb-14" : ""}`}>
        {completed ? 
        <>
        <p className="text-base font-semibold text-[#5B665B] text-start py-6">Completed</p> 
        <hr className="border-[var(--border-color)]" />
        </>
        : null}
        { showBlock && !completed ? 
            <div className={`${editList ? "flex w-full flex-wrap mt-5 gap-[1.35px] gap-y-4" : "flex flex-wrap mt-5 gap-x-1.5 gap-y-4"}`}>
            {value.map((item, index) => (
                <>
                <div key={index} onClick={(e) => handleEditToDo(e, item)} className={`flex cursor-pointer w-66.5 h-30 items-center justify-between px-2 border border-[var(--border-color)] ${menu ? "" : editList ? "grow max-w-89" : "grow max-w-70.5"}`}>
                    <div className="flex items-center gap-5">
                        <input type="checkbox" checked={completed} className="w-4 h-4 cursor-pointer border border-[var(--border-color)] rounded-md" />
                        <p className="text-base text-start">{item.title}</p>
                    </div>
                    <div className="flex items-center gap-4 cursor-pointer">
                        {item.stared ? <FaStar className="text-2xl" /> : <FaRegStar className="text-2xl" />}
                    </div>
                </div>
                <hr className="border-[var(--border-color)]" />
                </>
            ))} 
            </div>
        : 
        value.map((item, index) => (
            <>
            <div key={index} onClick={(e) => handleEditToDo(e, item)} className={`flex cursor-pointer items-center justify-between px-4 ${completed ? "py-4.5" : "py-6"}`}>
                <div className="flex items-center gap-5">
                    <input type="checkbox" checked={completed} className="w-4 h-4 cursor-pointer border border-[var(--border-color)] rounded-md" />
                    {completed ? <s className="text-base">{item.title}</s> : <p className="text-base">{item.title}</p>}
                </div>
                <div className="flex items-center gap-4 me-3 cursor-pointer">
                    {item.stared ? <FaStar className="text-2xl" /> : <FaRegStar className="text-2xl" />}
                </div>
            </div>
            <hr className="border-[var(--border-color)]" />
            </>
        )) 
        }
    </div>
  )
}

ToDoTasksList.propTypes = {
    value: propType.array.isRequired,
    completed: propType.bool.isRequired,
    setEditToDo: propType.func.isRequired,
}

export default ToDoTasksList