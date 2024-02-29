import React, { useState, useEffect } from "react";
import TutorialDataService from '../http-common';
// import "../style.css"; // Import CSS file
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from "./header";

const GetShelters = () => {
  const [shelters, setShelters] = useState([]);

  const handleGetAllShelters = async () => {
    try {
      const sheltersData = await TutorialDataService.getAll();
      setShelters(sheltersData.data);
    } catch (error) {
      console.error("Error fetching shelters:", error);
    }
  };

  useEffect(() => {
    handleGetAllShelters();
  }, []);

  return (
      <>
        <Header />
      <div className="shelters-container">
        {shelters.map((shelter) => (
          <div key={shelter._id} className="cardd">
            <p><strong>Shelter Name:</strong> {shelter.name}</p>
            <p><strong>Location:</strong> {shelter.location}</p>
            <p><strong>Capacity:</strong> {shelter.capacity}</p>
          </div>
        ))}
      </div>
      </>
  );
};


export default GetShelters;
