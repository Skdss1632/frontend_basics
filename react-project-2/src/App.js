// src/App.js
import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import TableComponent from "./components/TableComponent";
import "./style.css";

export default function App() {
    // setup default fld value n destructing arr
    const [formData, setFormData] = useState({ name: "", email: "", age: "" , phone: ""});
    const [tableData, setTableData] = useState([]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        // preventDefault is used to prevent default behavoiur of browsers like page reloading after clicking on submit
        event.preventDefault();
        setTableData([...tableData, formData]);
        setFormData({ name: "", email: "", age: "" , phone: ""});
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>User Data Form</h1>
            <FormComponent
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TableComponent tableData={tableData} />
        </div>
    );
}
