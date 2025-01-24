import ToDo from "../components/common/ToDo"
import EditList from "../components/layout/EditList"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import { useState } from "react"

const Dashboard = () => {
    const [editToDo, setEditToDo] = useState([{}])

  return (
    <div>
        <Header />
        <div className="flex">
            <Sidebar />
            <ToDo setEditToDo={setEditToDo} />
            <EditList editToDo={editToDo} />
        </div>
    </div>
  )
}
export default Dashboard