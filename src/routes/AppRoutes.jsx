import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
const AppRputes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    </BrowserRouter>
  )
}
export default AppRputes