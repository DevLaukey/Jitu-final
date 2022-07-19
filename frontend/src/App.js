import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/admin/Sidebar";
function App() {
  return (
    <>
      <ToastContainer />
      <div className="flex ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
