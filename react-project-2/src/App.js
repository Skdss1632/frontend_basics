import React, { useState } from "react";
import TableComponent from "./components/TableComponent";
import ModalComponent from "./components/ModalComponent";
import "./style.css";

export default function App() {
    const [tableData, setTableData] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", age: "", phone: "" });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAddToTable = () => {
        setTableData([...tableData, formData]);
        setFormData({ name: "", email: "", age: "", phone: "" });
        setIsModalOpen(false); // Close modal after adding data
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Data Table with Modal</h1>
            <button onClick={() => setIsModalOpen(true)}>Create</button>
            {isModalOpen && (
                <ModalComponent
                    formData={formData}
                    handleChange={handleChange}
                    handleAddToTable={handleAddToTable}
                    closeModal={() => setIsModalOpen(false)}
                />
            )}
            <TableComponent tableData={tableData} />
        </div>
    );
}
