import { AppProvider } from "./utils/AppContext.jsx";
// import { Outlet } from "react-router-dom";
import { Products } from "./pages/Products.jsx";

function App() {

  return (
    <>
      <AppProvider>
        {/* <Outlet /> */}
        <Products />
      </AppProvider>
    </>
  )
}

export default App
