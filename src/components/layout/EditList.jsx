import { useAppContext } from "../../context/AppContext"
import ToDoTasksList from "../common/ToDoTasksList"

const EditList = () => {

  const { editList } = useAppContext()

  return (

    <>
    {editList && (
        <div className="w-[67.5%] h-screen -me-12 bg-[#eef6ef] ms-2 ps-6 pt-8">
            <hr className="border-[#D8e0e9]"/>
            <ToDoTasksList value={[{ title: "Buy groceries", stared: false}]} completed={false} />
        </div>
    )}
    </>
  )
}
export default EditList