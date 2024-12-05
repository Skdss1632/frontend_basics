import React, { useEffect, useState } from "react";
import { InputComponent } from './InputComponent';
import ModalComponent from './ModalComponent';


export default function TableComponent({tableData, setIsModalOpen, formData, handleChange, handleSubmit, isModalOpen}){

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
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{row.gender}</td>
                <td>{row.age}</td>
                <td>{row.email}</td>
                <td>{row.phone}</td>
                <td>{row.preferredContactMethod}</td>
                <td>{row.alternatePhone}</td>
                <td>{row.emergencyContact}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.zip}</td>
                <td>{row.country}</td>
                <td>{row.qualification}</td>
                <td>{row.graduationYear}</td>
                <td>{row.specialization}</td>
                <td>{row.employmentStatus}</td>
                <td>{row.jobTitle}</td>
                <td>{row.currentCompany}</td>
                <td>{row.experience}</td>
                <td>{row.linkedin}</td>
                <td>{row.skills}</td>
                <td>{row.certifications}</td>
                <td>{row.hobbies}</td>
                <td>{row.languages}</td>
                <td>{row.maritalStatus}</td>
                <td>{row.nationality}</td>
                <td>{row.references}</td>
                <td>{row.portfolio}</td>
                <td>{row.lastUpdate}</td>
                <td>{timestamps[index]}</td>
              </tr>
            );
          })}
          <tr>
            <td><InputComponent name="firstName" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="lastName" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="gender" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="age" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="email" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="phone" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="preferredContactMethod" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="alternatePhone" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="emergencyContact" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="city" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="state" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="zip" onDoubleClick={(e) => handleCtrlDoubleClick(e,)} /></td>
            <td><InputComponent name="country" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="qualification" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="graduationYear" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="specialization" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="employmentStatus" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="jobTitle" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="currentCompany" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="experience" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="linkedin" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="skills" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="certifications" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="hobbies" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="languages" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="maritalStatus" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="nationality" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="references" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="portfolio" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="lastUpdate" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
            <td><InputComponent name="timestamp" onDoubleClick={(e) => handleCtrlDoubleClick(e)} /></td>
          </tr>
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
