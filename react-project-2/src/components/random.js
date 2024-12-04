import React, { useState } from "react";
import ModalComponent from "./ModalComponent";

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({}); // Placeholder for form data state

  // Handle form input change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:", formData);
    setModalVisible(false); // Close the modal after submission
  };

  // Close modal function
  const closeModal = () => {
    setModalVisible(false);
  };

  // Event handler for Ctrl + double-click
  const handleCtrlDoubleClick = (event) => {
    if (event.ctrlKey) {
      setModalVisible(true);
    }
  };

  return (
    <div
      onDoubleClick={handleCtrlDoubleClick}
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "2px dashed gray",
        cursor: "pointer",
      }}
    >
      <p>Double-click here while holding Ctrl to open the modal</p>

      {isModalVisible && (
        <ModalComponent
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}
