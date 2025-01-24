import { useAppContext } from "../../context/AppContext"
import ToDoTasksList from "../common/ToDoTasksList"
import ListContainer from "../common/ListContainer"
import { FaPlus } from "react-icons/fa6";
import { LuBell, LuCalendar } from "react-icons/lu";
import { RxLoop } from "react-icons/rx";
import PropType from "prop-types";
import { HiTrash } from "react-icons/hi2";
import { MdOutlineClose } from "react-icons/md";

const EditList = ({ editToDo }) => {

  const { menu, editList, setEditList } = useAppContext()

  const items = [
    {title: "Add Step", icon: <FaPlus />},
    {title: "Set Reminder", icon: <LuBell />},
    {title: "Add Due Date", icon: <LuCalendar />},
    {title: "Repeat", icon: <RxLoop />},
  ]

  return (

    <>
    {editList && (
        <div className="w-[67.5%] -me-12 bg-[#eef6ef] ms-2 ps-6 pt-8 relative">
            <hr className="border-[#D8e0e9]"/>
            <ToDoTasksList value={[{ title: editToDo.title, stared: editToDo.stared}]} completed={false} />
            <ListContainer items={items} src="EditList" />
            <p className="py-4 px-6 cursor-pointer text-sm text-[#a8aeb4]">Add Notes</p>
            <div className={`flex flex-col fixed bottom-8 transition-all duration-100 ${menu ? "w-84" : "w-112"}`}>
                <hr className="border-[#D8e0e9]"/>
                <div className="flex justify-between mt-8 px-4">
                  <button className="flex items-center gap-2 text-sm text-[#000000] cursor-pointer" onClick={() => setEditList(false)}><MdOutlineClose size={23} /></button>
                  <p className="text-[#a8aeb4]">Created Today</p>
                  <button className="flex items-center gap-2 text-sm text-[#000000] cursor-pointer"><HiTrash size={22} /></button>
                </div>
            </div>
        </div>
    )}
    </>
  )
}

EditList.propTypes = {
  editToDo: PropType.array.isRequired
}

export default EditList