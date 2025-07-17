import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getEmployeeById } from "../api/employeeApi";

export default function EmployeeProfile() {
    const { id } = useParams();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getEmployeeById(id)
            .then(res => {
                setEmployee(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString();
    };

    if (loading) {
        return <div className="text-center p-12">Loading...</div>;
    }

    if (!employee) {
        return <div className="text-center p-12">Employee not found.</div>;
    }

    const profileFields = [
        { label: "Name", value: employee.name },
        { label: "Email", value: employee.email },
        { label: "Designation", value: employee.designation },
        { label: "Department", value: employee.department },
        { label: "Salary", value: employee.salary ? `$${new Intl.NumberFormat().format(employee.salary)}` : 'N/A' },
        { label: "Date of Joining", value: formatDate(employee.dateOfJoining) },
        employee.lastDay ? { label: "Last Day", value: formatDate(employee.lastDay) } : null,
    ];

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Employee Profile</h2>
            <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {profileFields.filter(Boolean).map(field => (
                        <div key={field.label} className="flex flex-col">
                            <span className="text-sm font-medium text-gray-400">{field.label}</span>
                            <p className="text-lg">{field.value}</p>
                        </div>  
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <Link to="/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}