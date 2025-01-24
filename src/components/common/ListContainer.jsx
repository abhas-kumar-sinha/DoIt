import propType from "prop-types"

const listContainer = ( {items, src} ) => {
  return (
    <>
      <div className={`w-full ${src === "Sidebar" ? "py-6 bg-white mt-3" : "py-2"}`}>
          {items.map((item) => (
            <div key={item.title} className={`w-full flex items-center px-4 ${src === "Sidebar" ? "h-10 gap-5 mb-0.5 rounded-lg" : "h-16 gap-7 border-b border-[#a8aeb4]"}`}><span className="text-2xl">{item.icon}</span>{item.title}</div>
          ))}
      </div>
    </>
  )
}

listContainer.propTypes = {
    items: propType.array.isRequired,
    src: propType.string.isRequired
}

export default listContainer