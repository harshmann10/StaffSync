import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto px-4 flex justify-around items-center">
                <h1 className="text-2xl font-bold text-white">
                    <Link to="/">StaffSync</Link>
                </h1>
                <nav>
                    <Link
                        to="/insights"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                    >
                        Get AI Insights
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;