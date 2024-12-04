import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './App.css';

ReactModal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Generate random fields for the table
  const generateRandomData = () => {
    const data = [];
    const headers = ['ID', 'Name', 'Age', 'City'];

    for (let i = 0; i < 5; i++) {
      data.push({
        id: i + 1,
        name: `Name ${Math.floor(Math.random() * 100)}`,
        age: Math.floor(Math.random() * 50) + 20,
        city: `City ${Math.floor(Math.random() * 10)}`,
      });
    }
    return { headers, data };
  };

  const { headers, data } = generateRandomData();

  // Handle the modal open
  const openModal = (field) => {
    setSelectedField(field);
    setInputValue(field);  // Set input value to selected field
    setModalIsOpen(true);
  };

  // Handle closing the modal
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedField(null);
    setInputValue('');
  };

  // Handle Ctrl + Double-click event
  const handleDoubleClick = (e, field) => {
    if (e.ctrlKey) {
      openModal(field);
    }
  };

  // Handle input field change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle save action
  const handleSave = () => {
    // You can add logic here to save the updated value if needed
    console.log(`Saved: ${selectedField} => ${inputValue}`);
    closeModal();
  };

  return (
    <div className="App">
      <h1>Random Table with Modal</h1>

      {/* Table */}
      <table className="table">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td onDoubleClick={(e) => handleDoubleClick(e, row.id)}>{row.id}</td>
              <td onDoubleClick={(e) => handleDoubleClick(e, row.name)}>{row.name}</td>
              <td onDoubleClick={(e) => handleDoubleClick(e, row.age)}>{row.age}</td>
              <td onDoubleClick={(e) => handleDoubleClick(e, row.city)}>{row.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Selected Field Details</h2>
        <p>{`You selected: ${selectedField}`}</p>

        {/* Input Field */}
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter new value"
        />

        {/* Save Button */}
        <button onClick={handleSave}>Save</button>
        <button onClick={closeModal}>Close</button>
      </ReactModal>
    </div>
  );
};

export default App;
