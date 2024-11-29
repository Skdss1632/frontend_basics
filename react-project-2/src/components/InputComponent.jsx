// src/components/InputComponent.js
import React from "react";

export const InputComponent = ({ label, type, name, value, onChange, placeholder, required=true }) => {
    return (
        <div className="form-group">
            <label>{label}: </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required={required}
                placeholder={placeholder}
            />
        </div>
    );
};
