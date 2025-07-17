import { useState, useEffect } from "react";

export default function EmployeeForm({ initialData, onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        designation: "",
        department: "",
        salary: "",
        dateOfJoining: "",
        lastDay: "",
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                ...initialData,
                dateOfJoining: initialData.dateOfJoining?.slice(0, 10),
                lastDay: initialData.lastDay?.slice(0, 10),
            });
        }
    }, [initialData]);

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg space-y-4"
        >
            {["name", "email", "designation", "department", "salary"].map((field) => (
                <div key={field}>
                    <label
                        htmlFor={field}
                        className="block text-sm font-medium text-gray-300 capitalize mb-1"
                    >
                        {field}
                    </label>
                    <input
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        placeholder={`Enter ${field}`}
                        required
                        className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                        type={
                            field === "email"
                                ? "email"
                                : field === "salary"
                                    ? "number"
                                    : "text"
                        }
                    />
                </div>
            ))}
            <div>
                <label
                    htmlFor="dateOfJoining"
                    className="block text-sm font-medium text-gray-300 mb-1"
                >
                    Date of Joining
                </label>
                <input
                    type="date"
                    name="dateOfJoining"
                    id="dateOfJoining"
                    value={formData.dateOfJoining}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <div>
                <label
                    htmlFor="lastDay"
                    className="block text-sm font-medium text-gray-300 mb-1"
                >
                    Last Day
                </label>
                <input
                    type="date"
                    name="lastDay"
                    id="lastDay"
                    value={formData.lastDay}
                    onChange={handleChange}
                    className="w-full bg-gray-700 border border-gray-600 text-white rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-green-500"
            >
                Save
            </button>
        </form>
    );
}
