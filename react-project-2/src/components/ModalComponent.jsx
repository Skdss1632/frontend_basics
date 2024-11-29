import React from "react";
import { InputComponent } from "./InputComponent";
import "../style.css";

export default function ModalComponent({ formData, handleChange, handleSubmit, closeModal }) {
    const inputFields = [
        { label: "Name", type: "text", name: "name", placeholder: "Enter name" },
        { label: "Email", type: "email", name: "email", placeholder: "Enter email" },
        { label: "Age", type: "number", name: "age", placeholder: "Enter age" },
        { label: "Phone", type: "number", name: "phone", placeholder: "Enter phone number" },
    ];

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Add Data</h2>
                <form onSubmit={handleSubmit}>
                    {inputFields.map((field, index) => (
                        <InputComponent
                            key={index}
                            label={field.label}
                            type={field.type}
                            name={field.name}
                            placeholder={field.placeholder}
                            value={formData[field.name]}
                            onChange={handleChange}
                        />
                    ))}
                    <div className="modal-buttons">
                        <button type="submit">Add Data to Table</button>
                        <button type="button" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
