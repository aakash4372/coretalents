import { Routes, Route } from "react-router-dom";
import Homeroutes from "./Homeroutes";
import Adminroutes from "./Adminroutes";
import PrivateRoute from "@/Context/PrivateRoute";
import Login from "@/auth/Login";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homeroutes />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <PrivateRoute adminOnly={true}>
            <Adminroutes />
          </PrivateRoute>
        }
      />
    </Routes>
    
  );
};

export default Mainroutes;
