import React from "react";
import { InputComponent } from "./InputComponent";

export default function ModalComponent({ formData, handleChange, handleSubmit, handleAddToTable, closeModal }) {
    const inputFields = [
        { label: "Name", type: "text", name: "name", placeholder: "enter name" },
        { label: "Email", type: "email", name: "email", placeholder: "enter email" },
        { label: "Age", type: "number", name: "age", placeholder: "enter age" },
        { label: "Phone", type: "number", name: "phone", placeholder: "enter phone number" },
    ];

    return (
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
                <button onClick={handleAddToTable}>Add Data to Table</button>
                <button onClick={closeModal}>Close</button>
            </div>
        </form>
    );
}