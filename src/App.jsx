import AppRoutes from "./routes/AppRoutes"
import { AppProvider } from "./context/AppContext"

const App = () => {
  return (
    <AppProvider>
      <div className="px-12 max-w-410 mx-auto bg-[var(--bg-color)] text-[var(--primary-text)]">
        <AppRoutes />
      </div>
    </AppProvider>
  )
}
export default App