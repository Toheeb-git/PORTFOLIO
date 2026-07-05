import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <div>
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/upload" element={ <ProtectedRoute><Upload /></ProtectedRoute>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>}/>
      </Routes>
    </div>
  );
}

export default App;
