import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import ModalComponent from "./components/ModalComponent";
import "./style.css";

export default function App() {
    // store these table data into the redux toolkit and fetch these data from the redux
    const [tableData, setTableData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        age: "",
        email: "",
        phone: "",
        preferredContactMethod: "",
        alternatePhone: "",
        emergencyContact: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        qualification: "",
        graduationYear: "",
        specialization: "",
        employmentStatus: "",
        jobTitle: "",
        currentCompany: "",
        experience: "",
        linkedin: "",
        skills: "",
        certifications: "",
        hobbies: "",
        languages: "",
        maritalStatus: "",
        nationality: "",
        references: "",
        portfolio: "",
        lastUpdate: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTableData([...tableData, formData]);
        setFormData({ name: "", email: "", age: "", phone: "" });
        setIsModalOpen(false); // Close the modal after adding data
    };



    return (
        <div style={{ padding: "20px", }}>
            <h1>Data Table with Modal</h1>
            <button onClick={() => setIsModalOpen(true)}>Create</button>
            {isModalOpen && (
                <ModalComponent
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
            <TableComponent
            tableData={tableData}
            setIsModalOpen={setIsModalOpen}
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isModalOpen={isModalOpen}
            />
        </div>
    );
}
