import { AppProvider } from "./utils/AppContext.jsx";
import { Outlet } from "react-router-dom";

function App() {

  return (
    <>
      <AppProvider>
        <Outlet />
      </AppProvider>
    </>
  )
}

export default App
