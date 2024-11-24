// src/components/FormComponent.js
import React from "react";

export default function FormComponent({ formData, handleChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Age: </label>
                <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required  
                />
            </div>
            <div>
                <label>Phone: </label>
                <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    optional    
                />
            </div>
            <button type="submit">Add to Table</button>
        </form>
    );
}
