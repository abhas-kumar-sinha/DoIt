import { createContext, useContext } from "react";
import propType from "prop-types"
import { useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [menu, setMenu] = useState(true)
    const [editList, setEditList] = useState(false)
    const [showBlock, setShowBlock] = useState(false)

    return <AppContext.Provider value={{menu, setMenu, editList, setEditList, showBlock, setShowBlock}}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
    return useContext(AppContext)
}

AppProvider.propTypes = {
    children: propType.node.isRequired
}

export default AppProvider