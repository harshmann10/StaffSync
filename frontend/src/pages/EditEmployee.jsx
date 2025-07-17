import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEmployeeById, updateEmployee, createEmployee } from "../api/employeeApi";
import EmployeeForm from "../components/EmployeeForm";

export default function EditEmployee() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (id) {
            getEmployeeById(id).then(res => setInitialData(res.data));
        }
    }, [id]);

    const handleSubmit = async (formData) => {
        if (id) await updateEmployee(id, formData);
        else await createEmployee(formData);
        navigate("/");
    };

    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center">{id ? "Edit" : "Create"} Employee</h2>
            <EmployeeForm initialData={initialData} onSubmit={handleSubmit} />
        </div>
    );
}
