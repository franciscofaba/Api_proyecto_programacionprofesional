import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Card } from "react-bootstrap";
const Dashboard = () => {
  return (
    <>
      <Navbar>

      <Card.Text>
      ¡Bienvenido! al Dashboard CRM Administrativo la herramienta definitiva para la gestión bases de datos de la Universidad.
            </Card.Text>

      </Navbar>

      <Outlet />
    </>
  )
};

export default Dashboard;