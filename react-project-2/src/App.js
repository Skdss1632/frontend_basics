import React, { useState } from "react";
import { TableComponent } from "./components/TableComponent";
import { ModalComponent } from "./components/ModalComponent";
import "./style.css";
import { mockData } from "./components/random";
import { useSelector, useDispatch } from "react-redux";
import { addRow } from "./features/tableSlice";


export function App() {
    // store these table data into the redux toolkit and fetch these data from the redux
    // const [tableData, setTableData] = useState([]);
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.table.tableData); // Get tableData from Redux
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        // get name and its value
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addRow(formData)); // Dispatch action to add row to Redux store
        setFormData({}); // Reset form to mock data
        setIsModalOpen(false); // Close the modal
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
