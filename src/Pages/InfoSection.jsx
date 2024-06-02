import React from "react";
import "./InfoSection.css";

const InfoSection = () => {
  return (
    <div className="info-section">
      <div className="info-content">
        <div className="info-text">
          <h2>A little information for our valuable guest</h2>
          <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
        </div>
        <div className="info-stats">
          <div className="stat">
            <h3>3</h3>
            <p>Locations</p>
          </div>
          <div className="stat">
            <h3>1995</h3>
            <p>Founded</p>
          </div>
          <div className="stat">
            <h3>65+</h3>
            <p>Staff Members</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Satisfied Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
