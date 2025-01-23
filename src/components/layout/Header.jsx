import DoIt from "../../assets/DoIt.png"
import { FiMenu, FiSearch } from "react-icons/fi";
import { PiMoonStars, PiSquaresFour } from "react-icons/pi";
import { MdFormatListBulleted } from "react-icons/md";
import { useAppContext } from "../../context/AppContext";

const Header = () => {

  const { setMenu, menu, setShowBlock, showBlock } = useAppContext()

  return (
    <>
    <div className="bg-[var(--primary-color)] h-14 flex justify-between items-center">
        <div className="flex justify-between items-center h-full w-36">
            <FiMenu size={24} className="cursor-pointer" onClick={() => setMenu(!menu)} />
            <div className="flex items-center gap-2 user-select-none">
                <img src="/logomark.png" alt="logo" />
                <img src={DoIt} alt="text" />
            </div>
        </div>

        <div className="flex items-center gap-8">
            <FiSearch size={22} className="cursor-pointer" />
            {!showBlock ? 
            <PiSquaresFour size={24} className="cursor-pointer" onClick={() => setShowBlock(!showBlock)} /> 
            : <MdFormatListBulleted size={24} className="cursor-pointer" onClick={() => setShowBlock(!showBlock)} />}
            <PiMoonStars size={24} className="cursor-pointer" />
        </div>
    </div>
    </>
  )
}
export default Header