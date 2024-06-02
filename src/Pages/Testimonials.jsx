import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <h3>“The best restaurant”</h3>
          <p>Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.</p>
          <p>- Sophire Robson, Los Angeles, CA</p>
        </div>
        <div className="testimonial-card">
          <h3>“Simply delicious”</h3>
          <p>Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.</p>
          <p>- Matt Cannon, San Diego, CA</p>
        </div>
        <div className="testimonial-card">
          <h3>“One of a kind restaurant”</h3>
          <p>The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.</p>
          <p>- Andy Smith, San Francisco, CA</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
