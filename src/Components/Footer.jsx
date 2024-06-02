// // src/components/Footer.js
// import React from 'react';
// import '../Styles/Footer.css';
// // import bgImage from './assets/bg.svg';
// // style={{ backgroundImage: `url(${bgImage})` }}
// const Footer = () => {
//   return (
//     <footer className="footer" >
//       <div className="footer-content">
//         <div className="footer-section">
//           <img src="./assets/Logo.svg" alt="Bistro Bliss" className="footer-logo" />
//           <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
//           <div className="social-icons">
//             {/* Add social icons here */}
//           </div>
//         </div>
//         <div className="footer-section">
//           <h4>Pages</h4>
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Menu</li>
//             <li>Pricing</li>
//             <li>Blog</li>
//             <li>Contact</li>
//             <li>Delivery</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Utility Pages</h4>
//           <ul>
//             <li>Start Here</li>
//             <li>Styleguide</li>
//             <li>Password Protected</li>
//             <li>404 Not Found</li>
//             <li>Licenses</li>
//             <li>Changelog</li>
//             <li>View More</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Follow Us On Instagram</h4>
//           <img src="./assets/instagram-gallery.jpg" alt="Instagram gallery" />
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <hr />
//         <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// };


// export default Footer;

// export default Footer;

import React from "react";
import "../Styles/Footer.css";
import logo from "./assets/japanese-food.svg";
import social from "./assets/social.svg";
// import line from "./assets/line-311.svg";
import foodImages from "./assets/instagram-gallery.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-column">
            <div className="footer-logo">
              <img src={logo} alt="Logo" />
              <span>Bistro Bliss</span>
            </div>
            <p>
              In the new era of technology we look a in the future with certainty
              and pride to for our company and.
            </p>
            <img src={social} alt="Social Media Icons" />
          </div>
          <div className="footer-links-group">
            <div className="footer-column">
              <h4>Pages</h4>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Pricing</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Delivery</li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Utility Pages</h4>
              <ul>
                <li>Start Here</li>
                <li>Styleguide</li>
                <li>Password Protected</li>
                <li>404 Not Found</li>
                <li>Licenses</li>
                <li>Changelog</li>
                <li>View More</li>
              </ul>
            </div>
          </div>
          <div className="footer-column footer-instagram">
            <h4>Follow Us On Instagram</h4>
            <img src={foodImages} alt="Food Images" />
          </div>
        </div>
        <div className="footer-bottom">
          {/* <img src={line} alt="line" /> */}
          <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
