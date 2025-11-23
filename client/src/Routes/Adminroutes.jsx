import { Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "../Context/PrivateRoute";
import ResponsiveDashboard from "@/Admin/ResponsiveDashboard";
import Gallery from "@/Admin/Pages/Gallery";


const Adminroutes = () => {
  return (
    <Routes>
      <Route
        path="/admin"
        element={
          <PrivateRoute adminOnly={true}>
            <ResponsiveDashboard />
          </PrivateRoute>
        }
      >
        {/* ✅ Default route: redirect /admin to /admin/menu */}

        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
};

export default Adminroutes;
