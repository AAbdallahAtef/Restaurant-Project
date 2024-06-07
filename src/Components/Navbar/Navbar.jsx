// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faGithub,
// } from "@fortawesome/free-brands-svg-icons";

// const Navbar = () => {
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: "#474747",
//           padding: "10px",
//           color: "#F9F9F7",
//           display: "flex",
//           justifyContent: "space-around",
//           alignItems: "center",
//           fontFamily: "cursive",
//         }}
//       >
//         <div className="contatct-details">
//           <FontAwesomeIcon icon={faPhone} />
//           <span style={{ marginLeft: "10px", marginRight: "20px" }}>
//             +123 456 7890
//           </span>
//           <FontAwesomeIcon icon={faEnvelope} />
//           <span style={{ marginLeft: "10px" }}>email@example.com</span>
//         </div>


//         <div className="social-icons fs-4" style={{ display: "flex", gap: "10px" }}>
//           <FontAwesomeIcon icon={faFacebook} />
//           <FontAwesomeIcon icon={faTwitter} />
//           <FontAwesomeIcon icon={faInstagram} />
//           <FontAwesomeIcon icon={faGithub} />
//         </div>
//       </div>
//       <div
//         style={{
//           backgroundColor: "",
//           padding: "30px",
//           color: "",
//           display: "flex",
//           justifyContent: "space-around",
//           alignItems: "center",
//           fontFamily: "cursive",
//         }}
//       >

//         <div className="mylogo d-flex justify-content-center align-items-center">
//             <img style={{lineHeight:'29.33px'}} src="images/Vector.jpg" alt="" />
//             <span style={{fontWeight:'600',fontStyle:'italic',fontSize:'42.67px',lineHeight:'29.33px',marginLeft:'10px'}}>Bistro Bliss</span>

//         </div>
//         <div className="menu">
//         <nav class="navbar navbar-expand-lg navbar-light ">
//   <div class="container-fluid">
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item">
//           <a style={{border:'1px solid ',backgroundColor:'#DBDFD0',borderStyle:'none'}} class="nav-link active rounded-5 px-3" aria-current="page" href="#">Home</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Menu</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" >Pages</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#" >Contact</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>

//         </div>

//         <div>
//             <button className="btn btn-outline-dark rounded-5">Book A Table</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("Home");

    const location = useLocation();
    
    useEffect(() => {
        const currentPath = location.pathname === "/" 
            ? "Home" 
            : location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(1).slice(1).toLowerCase();
        setActiveItem(currentPath);
    }, [location]);

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            <div
                style={{
                    backgroundColor: "#474747",
                    padding: "10px",
                    color: "#F9F9F7",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <div className="contact-details">
                    <FontAwesomeIcon icon={faPhone} />
                    <span style={{ marginLeft: "10px", marginRight: "20px" }}>
                        +123 456 7890
                    </span>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span style={{ marginLeft: "10px" }}>email@example.com</span>
                </div>
                <div className="social-icons fs-4" style={{ display: "flex", gap: "10px" }}>
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </div>
            <div
                style={{
                    backgroundColor: "",
                    color: "",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                }}
            >
                <div className="mylogo d-flex justify-content-center align-items-center">
                    <img style={{ lineHeight: '29.33px' }} src="images/Vector.jpg" alt="Logo" />
                    <span style={{ fontWeight: '600', fontStyle: 'italic', fontSize: '42.67px', lineHeight: '29.33px', marginLeft: '10px' }}>Bistro Bliss</span>
                </div>
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    {["Home", "About", "Menu", "Pages", "Contact"].map((item) => (
                                        <li className="nav-item" key={item}>
                                            <Link 
                                                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                                className={`nav-link ${activeItem === item ? "active" : ""} px-3 rounded-5`}
                                                onClick={() => handleItemClick(item)}
                                                style={activeItem === item ? { border: '1px solid', backgroundColor: '#DBDFD0', borderStyle: 'none' } : {}}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div>
                    <button className="btn btn-outline-dark rounded-5">Book A Table</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
