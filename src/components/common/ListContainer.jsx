import propType from "prop-types"

const listContainer = ( {items} ) => {
  return (
    <div className="mt-3 w-full py-6 bg-white">
        {items.map((item) => (
            <div key={item.title} className="w-full h-10 flex items-center mb-0.5 rounded-lg gap-5 px-4"><span className="text-2xl">{item.icon}</span>{item.title}</div>
        ))}
    </div>
  )
}

listContainer.propTypes = {
    items: propType.array.isRequired
}

export default listContainer