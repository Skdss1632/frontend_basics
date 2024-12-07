import React, { useEffect, useState } from "react";
import { InputComponent } from "./InputComponent";
import { ModalComponent } from "./ModalComponent";

export function TableComponent({
  tableData,
  setIsModalOpen,
  formData,
  handleChange,
  handleSubmit,
  isModalOpen,
}) {
  const [timestamps, setTimestamps] = useState([]);

  useEffect(() => {
    setTimestamps(tableData.map(() => new Date().toLocaleString()));

    const interval = setInterval(() => {
      setTimestamps((prevTimestamps) =>
        prevTimestamps.map(() => new Date().toLocaleString())
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [tableData]);

  // Event handler for Ctrl + double-click on input field
  const handleCtrlDoubleClick = (event) => {
    console.log("Double click detected. Ctrl pressed:", event.ctrlKey);
    if (event.ctrlKey) {
      event.preventDefault();
      setIsModalOpen(true);
    }
  };

  return (
    <div className="table-container">
      <h2>Data Table</h2>
      <table border="1">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Preferred Contact Method</th>
            <th>Alternate Phone</th>
            <th>Emergency Contact Number</th>
            <th>City</th>
            <th>State</th>
            <th>ZIP</th>
            <th>Country</th>
            <th>Highest Qualification</th>
            <th>Year of Graduation</th>
            <th>Specialization</th>
            <th>Employment Status</th>
            <th>Current Job Title</th>
            <th>Current Company</th>
            <th>Years of Experience</th>
            <th>LinkedIn Profile</th>
            <th>Skills</th>
            <th>Certifications</th>
            <th>Hobbies</th>
            <th>Languages Spoken</th>
            <th>Marital Status</th>
            <th>Nationality</th>
            <th>Professional References</th>
            <th>Portfolio Website</th>
            <th>Last Update Date and Time</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => {
            const [firstName, ...rest] = row.name.split(" ");
            const lastName = rest.join(" ");
            return (
              <tr key={index}>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {firstName}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {lastName}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.gender}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.age}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.email}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.phone}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.preferredContactMethod}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.alternatePhone}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.emergencyContact}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.city}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.state}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.zip}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.country}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.qualification}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.graduationYear}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.specialization}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.employmentStatus}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.jobTitle}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.currentCompany}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.experience}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.linkedin}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.skills}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.certifications}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.hobbies}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.languages}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.maritalStatus}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.nationality}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.references}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.portfolio}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {row.lastUpdate}
                </td>
                <td onDoubleClick={(e) => handleCtrlDoubleClick(e)}>
                  {timestamps[index]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <ModalComponent
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          closeModal={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
