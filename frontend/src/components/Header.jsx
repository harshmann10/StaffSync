import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 py-4">
            <div className="container mx-auto px-4">
                <h1 className="text-2xl font-bold text-white text-center">
                    <Link to="/">StaffSync</Link>
                </h1>
            </div>
        </header>
    );
};

export default Header;