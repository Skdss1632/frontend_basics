import React from "react";
import { InputComponent } from "./InputComponent";
import "../style.css";

export function ModalComponent({ formData, handleChange, handleSubmit, closeModal }) {
    const inputFields = [
        { label: "Name", type: "text", name: "name", placeholder: "Enter name" },
        { label: "Gender", type: "text", name: "gender", placeholder: "Enter gender" },
        { label: "Age", type: "number", name: "age", placeholder: "Enter age" },
        { label: "Email", type: "email", name: "email", placeholder: "Enter email" },
        { label: "Phone", type: "number", name: "phone", placeholder: "Enter phone number" },
        { label: "Preferred Contact Method", type: "text", name: "preferredContactMethod", placeholder: "Enter preferred contact method" },
        { label: "Alternate Phone", type: "number", name: "alternatePhone", placeholder: "Enter alternate phone number" },
        { label: "Emergency Contact Number", type: "number", name: "emergencyContact", placeholder: "Enter emergency contact number" },
        { label: "City", type: "text", name: "city", placeholder: "Enter city" },
        { label: "State", type: "text", name: "state", placeholder: "Enter state" },
        { label: "ZIP", type: "text", name: "zip", placeholder: "Enter ZIP code" },
        { label: "Country", type: "text", name: "country", placeholder: "Enter country" },
        { label: "Highest Qualification", type: "text", name: "qualification", placeholder: "Enter highest qualification" },
        { label: "Year of Graduation", type: "number", name: "graduationYear", placeholder: "Enter year of graduation" },
        { label: "Specialization", type: "text", name: "specialization", placeholder: "Enter specialization" },
        { label: "Employment Status", type: "text", name: "employmentStatus", placeholder: "Enter employment status" },
        { label: "Current Job Title", type: "text", name: "jobTitle", placeholder: "Enter current job title" },
        { label: "Current Company", type: "text", name: "currentCompany", placeholder: "Enter current company" },
        { label: "Years of Experience", type: "number", name: "experience", placeholder: "Enter years of experience" },
        { label: "LinkedIn Profile", type: "url", name: "linkedin", placeholder: "Enter LinkedIn profile URL" },
        { label: "Skills", type: "text", name: "skills", placeholder: "Enter skills" },
        { label: "Certifications", type: "text", name: "certifications", placeholder: "Enter certifications" },
        { label: "Hobbies", type: "text", name: "hobbies", placeholder: "Enter hobbies" },
        { label: "Languages Spoken", type: "text", name: "languages", placeholder: "Enter languages spoken" },
        { label: "Marital Status", type: "text", name: "maritalStatus", placeholder: "Enter marital status" },
        { label: "Nationality", type: "text", name: "nationality", placeholder: "Enter nationality" },
        { label: "Professional References", type: "text", name: "references", placeholder: "Enter professional references" },
        { label: "Portfolio Website", type: "url", name: "portfolio", placeholder: "Enter portfolio website URL" },
        { label: "Last Update Date and Time", type: "datetime-local", name: "lastUpdate", placeholder: "Enter last update date and time" }
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
                            // value="sourav"
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
