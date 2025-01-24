import userPic from "../../assets/user.jpg"
import ListContainer from "../common/listContainer"
import { PiClipboardText, PiStar } from "react-icons/pi";
import { LuCalendar } from "react-icons/lu";
import { FiMap } from "react-icons/fi";
import { TbMessageCircleUser } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import TodoTasks from "../Dashboard/TodoTasks";
import { useAppContext } from "../../context/AppContext";

const Sidebar = () => {

    const { menu, editList } = useAppContext()

    const items = [
        {
            title: "All Tasks",
            icon: <PiClipboardText />
        },
        {
            title: "Today",
            icon: <LuCalendar />
        },
        {
            title: "Important",
            icon: <PiStar />
        },
        {
            title: "Planned",
            icon: <FiMap />
        },
        {
            title: "Assigned To Me",
            icon: <TbMessageCircleUser />
        }
    ]

  return (
    <>
    {menu && (
        <div className={`bg-[var(--secondary-color)] transition-all duration-300 ease-in-out shrink-0 h-auto mt-[14vh] w-72 relative flex flex-col items-center px-5 py-20 ${editList ? "me-2" : "me-12"}`}>
            <div className="w-32 h-32 rounded-full absolute -top-[7%] left-[30%] overflow-hidden">
                <img src={userPic} alt="user" className="w-full h-full object-cover" />
            </div>
            <p className="text-normal font-semibold">Hey, ABCD </p>
            <ListContainer items={items} src="Sidebar" />
            <ListContainer items={[{title: "Add list", icon: <FaPlus />}]} src="Sidebar" />
            <TodoTasks />
        </div>
    )}
    </>
  )
}

export default Sidebar