import { MdInfo } from "react-icons/md";

const TodatTasks = () => {
  return (
    <div className="w-full h-5/5 bg-white mt-4 p-4">
        <div className="top">
            <div className="w-full flex items-center justify-between">
                <p >Today Tasks</p>
                <MdInfo className="text-xl text-[#BDBDBD]" />
            </div>
            <h1 className="text-3xl font-semibold">11</h1>
        </div>

        <hr className="my-4 border-[#BDBDBD]" />

    </div>
  )
}
export default TodatTasks