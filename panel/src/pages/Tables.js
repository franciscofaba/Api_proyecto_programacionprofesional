import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Tablesdisplay from "./components/Tabledisplay";

const Tables = () => {
  
  return (
    <>
      <Navbar>

        <Tablesdisplay></Tablesdisplay>
      </Navbar>
      <Outlet />
    </>
  )
};

export default Tables;