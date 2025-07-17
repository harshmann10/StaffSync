import { useEffect, useState } from "react";
import { getAllEmployees, deleteEmployee } from "../api/employeeApi";
import { useNavigate } from "react-router-dom";

export default function EmployeeTable() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    const fetchEmployees = async () => {
        const { data } = await getAllEmployees();
        setEmployees(data);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleDelete = async (id) => {
        await deleteEmployee(id);
        fetchEmployees();
    };

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">All Employees</h2>
                <button
                    onClick={() => navigate("/create")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-blue-500"
                >
                    + Add New
                </button>
            </div>
            <div className="overflow-x-auto bg-gray-800 rounded-lg shadow">
                <table className="min-w-full table-fixed">
                    <thead className="bg-gray-700">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/5">Name</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-2/5">Email</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/5">Designation</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider w-1/5">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                        {employees.map(emp => (
                            <tr key={emp._id} className="hover:bg-gray-700">
                                <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{emp.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{emp.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap overflow-hidden text-ellipsis">{emp.designation}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button
                                        onClick={() => navigate(`/profile/${emp._id}`)}
                                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-md mr-2"
                                    >View</button>
                                    <button
                                        onClick={() => navigate(`/edit/${emp._id}`)}
                                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded-md mr-2"
                                    >Edit</button>
                                    <button
                                        onClick={() => handleDelete(emp._id)}
                                        className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded-md"
                                    >Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
