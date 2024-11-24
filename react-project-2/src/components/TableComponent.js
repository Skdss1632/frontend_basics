// src/components/TableComponent.js
import React from "react";

export default function TableComponent({ tableData }) {
    return (
        <div>
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.email}</td>
                            <td>{row.age}</td>
                            <td>{row.phone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
