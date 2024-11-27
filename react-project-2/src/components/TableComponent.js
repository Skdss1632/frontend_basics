import React, { useEffect, useState } from "react";


export default function TableComponent({ tableData }) {
    const [timestamps, setTimestamps] = useState([]);

    useEffect(() => {
        // Initialize timestamps with the same length as tableData
        setTimestamps(tableData.map(() => new Date().toLocaleString()));

        // Update timestamps every 5 seconds
        const interval = setInterval(() => {
            setTimestamps((prevTimestamps) =>
                prevTimestamps.map(() => new Date().toLocaleString())
            );
        }, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [tableData]);

    return (
        <div>
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Last update date and time</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => {
                        const [firstName, ...rest] = row.name.split(" ");
                        const lastName = rest.join(" ");
                        return (
                            <tr key={index}>
                                <td>{firstName}</td>
                                <td>{lastName}</td>
                                <td>{row.email}</td>
                                <td>{row.age}</td>
                                <td>{row.phone}</td>
                                <td>
                                    <span>{timestamps[index]}</span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
