import AppRoutes from "./routes/AppRoutes"
import { AppProvider } from "./context/AppContext"

const App = () => {
  return (
    <AppProvider>
      <div className="px-12 max-w-410 mx-auto">
        <AppRoutes />
      </div>
    </AppProvider>
  )
}
export default App