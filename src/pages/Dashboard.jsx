import ToDo from "../components/common/ToDo"
import EditList from "../components/layout/EditList"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"

const Dashboard = () => {
  return (
    <div>
        <Header />
        <div className="flex items-start">
            <Sidebar />
            <ToDo />
            <EditList />
        </div>
    </div>
  )
}
export default Dashboard