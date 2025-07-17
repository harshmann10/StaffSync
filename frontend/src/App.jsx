import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditEmployee from "./pages/EditEmployee";
import Header from "./components/Header";
import EmployeeProfile from "./pages/EmployeeProfile";
import InsightPage from "./pages/InsightPage";

function App() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Router>
                <Header />
                <div className="pt-5">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile/:id" element={<EmployeeProfile />} />
                        <Route path="/create" element={<EditEmployee />} />
                        <Route path="/edit/:id" element={<EditEmployee />} />
                        <Route path="/insights" element={<InsightPage />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
