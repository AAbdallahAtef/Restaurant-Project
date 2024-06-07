import React from "react";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt,faReceipt, faClock, faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Home = () => {


const menuItems = [
    {
        id: 1,
        title: 'Breakfast',
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        icon: 'images/cup.jpg' // Replace with actual path
    },
    {
        id: 2,
        title: 'Main Dishes',
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        icon: 'images/tea 1.jpg' // Replace with actual path
    },
    {
        id: 3,
        title: 'Drinks',
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        icon: 'images/Group.jpg' // Replace with actual path
    },
    {
        id: 4,
        title: 'Desserts',
        description: 'In the new era of technology we look in the future with certainty and pride for our life.',
        icon: 'images/ice.jpg' // Replace with actual path
    }
];

return (
    <>
<div
        className="d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: 'url("images/image110.jpg")',
          height: "802px",
          borderRadius: "25px",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          style={{
            fontWeight: "400",
            fontSize: "100px",
            textAlign: "center",
            fontFamily: "cursive",
            display: "block",
          }}
        >
          Best food for <br />
          your taste
          <p className="fs-4 mt-4">
            Discover delectable cuisine and unforgettable moments <br /> in our
            welcoming, culinary haven.
          </p>
          <button style={{backgroundColor:'#AD343E'}} className="btn btn-outline-light rounded-5 px-4 mx-3 ">Book A Table</button>
          <button className="btn btn-outline-dark rounded-5 px-4">Explore Menu</button>


        </h1>

      </div>
      


    <div className="container my-5">
        <h2 className="text-center my-5">Browse Our Menu</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {menuItems.map(item => (
                <div className="col" key={item.id}>
                    <div style={{height:'375px'}} className="menu-card text-center p-4 border rounded">

                    <div
                  style={{
                    
                    backgroundColor: '#f4f4f4',
    border: 'none',
    borderRadius: '50%',
    height: '75px',
    width: '75px',
    display: 'inline-block',
    position: 'relative'
                  }}
                >
<img src={item.icon} alt={`${item.title} Icon`} className="mt-4" style={{position:'absolute',right:'12px',bottom:'11px'}} />

               </div>

                        <h5 className="my-4">{item.title}</h5>
                        <p className="my-4">{item.description}</p>
                        <p className="my-4 text-danger" style={{fontWeight:700,fontSize:'16px',cursor:'pointer'}} >Explore Menu</p>

                    </div>
                </div>
            ))}
        </div>
    </div>

    <div style={{backgroundColor:'#F9F9F7',marginTop:'6rem',marginBottom:'5rem',padding:'50px'}} className="container  ">
      <div className="row position-relative d-flex justify-content-between">
        <div className="col-md-5">
          <div className="top-img ">
            <img src="images/subImage.jpg" alt="" />
            <div style={{backgroundColor:'#474747',color:'white',top:'50%',right:'47%',height:'315px',width:'380px',borderRadius:'12px',padding:'45px'}} className="subcontact position-absolute">
              <h3>Come and visit us</h3>
              <div className="contact-details my-4">
                    <FontAwesomeIcon icon={faPhone} />
                    <span style={{ marginLeft: "10px", marginRight: "20px" }}>
                        +123 456 7890
                    </span>
                    </div>
                    <div className="my-4">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <span style={{ marginLeft: "10px" }}>email@example.com</span>
                </div>
                <div className="my-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span style={{ marginLeft: "10px" }}>837 W. Marshall Lane Marshalltown,<br /> IA 50158, Los Angeles</span>
                
                </div>

            </div>
          </div>
        </div>
        <div className="col-md-5 mt-5">
          <h1 className="">We provide healthy <br /> food for your family.</h1>
          <p className="my-3">Our story began with a vision to create a unique dining <br /> experience that merges fine dining, exceptional service, and a <br /> vibrant ambiance. Rooted in city's rich culinary culture, we aim to <br /> honor our local roots while infusing a global palate.</p>
          <p className="my-5">At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
          <button className="btn btn-outline-dark rounded-5 px-4">More About Us</button>

        </div>
      </div>
    </div>

    <div className="container mt-5">
      <h1 className="my-5">We also offer unique <br /> services for your events</h1>
      <div className="row">
        <div className="col-md-3">
          <img src="images/kebab-set-table 1.jpg" alt="" />
          <h3 className="my-4">Caterings</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>
        </div>
        <div className="col-md-3">
          <img src="images/Mask group.jpg" alt="" />
          <h3 className="my-4">Birthdays</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>


        </div>
        <div className="col-md-3">
          <img src="images/Mask.jpg" alt="" />
          <h3 className="my-4">Weddings</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>


        </div>
        <div className="col-md-3">
          <img src="images/group-friends-eating-restaurant 1.jpg" alt="" />
          <h3 className="my-4">Events</h3>
          <p>In the new era of technology we look in the future with certainty for life.</p>


        </div>
      </div>
    </div>

    <div style={{padding:'30px'}} className="container my-5 ">
      <div className="row">

      <div className="col-md-7 ">
        <div className="row justify-content-between">
          <div className="col-md-7">
          <img src="images/mid-shot-chef-holding-plate-with-pasta-making-ok-sign 1.jpg" alt="" />

          </div>
        <div className="col-md-5 mt-5">
        <img src="images/sour-curry-with-snakehead-fish-spicy-garden-hot-pot-thai-food 1.jpg" alt="" />
        <img src="images/sadj-iron-pot-with-various-salads 1.jpg" alt="" />
        </div>
      </div>
        </div>

       

        <div className="col-md-5 mt-5 p-5">
  <h2>Fastest Food <br /> Delivery in City</h2>
  <p>Our visual designer lets you quickly and of drag a down your way to custom apps for both keep desktop.</p>
  <ul className="list-unstyled">
    <li className="d-flex align-items-center mb-2">
      <FontAwesomeIcon style={{ color: '#AD343E' }} icon={faReceipt} />
      <span style={{ marginLeft: "10px" }}>Delivery within 30 minutes</span>
    </li>
    <li className="d-flex align-items-center mb-2">
      <FontAwesomeIcon style={{ color: '#AD343E' }} icon={faClock} />
      <span style={{ marginLeft: "10px" }}>Delivery within 30 minutes</span>
    </li>
    <li className="d-flex align-items-center mb-2">
      <FontAwesomeIcon style={{ color: '#AD343E' }} icon={faShoppingCart} />
      <span style={{ marginLeft: "10px" }}>Delivery within 30 minutes</span>
    </li>
  </ul>
</div>

      </div>

    </div>
    <div className="container text-center my-4">
  <h1 className="my-5">What Our Customers Say</h1>
  <div className="row justify-content-center">
    <div className="col-md-3  bg-light p-5">
      <p className="text-danger fw-bold text-start">"The best restaurant"</p>
      <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim a harum vel soluta. Animi sapiente natus exercitationem quibusdam ab dicta!</p>
      <p style={{ borderBottom: '1px solid #e0dbdb' }}></p>
      <div className="review d-flex justify-content-evenly">
        <div className="imgreview d-flex align-items-center">
          <div className="prsimg">
            <img src="images/prs1.jpg" alt="" />
          </div>
          <div className="prsinfo mt-2">
            <h6 className="ms-3 text-start">sophie tener</h6>
            <p className="ms-3 text-start">los anglos, america</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mx-3 bg-light p-5">
      <p className="text-danger fw-bold text-start">"The best restaurant"</p>
      <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim a harum vel soluta. Animi sapiente natus exercitationem quibusdam ab dicta!</p>
      <p style={{ borderBottom: '1px solid #e0dbdb' }}></p>
      <div className="review d-flex justify-content-evenly">
        <div className="imgreview d-flex align-items-center">
          <div className="prsimg">
            <img src="images/prs2.jpg" alt="" />
          </div>
          <div className="prsinfo mt-2">
            <h6 className="ms-3 text-start">sophie tener</h6>
            <p className="ms-3 text-start">los anglos, america</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-md-3 mx-1 bg-light p-5">
      <p className="text-danger fw-bold text-start">"The best restaurant"</p>
      <p className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim a harum vel soluta. Animi sapiente natus exercitationem quibusdam ab dicta!</p>
      <p style={{ borderBottom: '1px solid #e0dbdb' }}></p>
      <div className="review d-flex justify-content-evenly">
        <div className="imgreview d-flex align-items-center">
          <div className="prsimg">
            <img src="images/prs3.jpg" alt="" />
          </div>
          <div className="prsinfo mt-2">
            <h6 className="ms-3 text-start">sophie tener</h6>
            <p className="ms-3 text-start">los anglos, america</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div style={{backgroundColor:'rgb(249, 249, 247)'}} >


    <div className="container my-5 text-center ">
      <div className="row my-5 p-3">
        <div className="col-md-6">
          Our Blogs & Articles
        </div>
        <div className="col-md-6">
        <button style={{backgroundColor:'#AD343E'}} className="btn btn-outline-light rounded-5 px-4 mx-3 ">Read All Articles</button>
        </div>

      </div>
      <div className="row">
        <div className="col-md-6 ">
          <img className="" src="images/burger.jpg " alt="" />
          <div className="bg-white p-4">

          <p className="text-start">january 3,2023</p>
          <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quae illo ducimus reiciendis ipsum deserunt?</p>
        <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt harum cum atque expedita, iure quis earum consequatur voluptates sed corrupti veniam, perspiciatis, illo odit. Veniam.</p>
       
          </div>
        </div>

        <div className="col-md-6 row">

          <div className="col-md-6">
           
            <img className="" src="images/bizaa.jpg " alt="" />
            <div className="bg-white p-4">
              
          <p className="text-start">january 3,2023</p>
          <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum!</p>
              </div>
          </div>
          <div className="col-md-6">
            <img className="" src="images/pasta.jpg " alt="" />
            <div className="bg-white p-4">

          <p className="text-start">january 3,2023</p>
          <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum!</p>
          </div>
          </div>
          <div className="col-md-6">
            <div>

            <img className="" src="images/coffe.jpg " alt="" />
            </div>
            <div className="bg-white p-4">

          <p className="text-start">january 3,2023</p>
          <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum!</p>
         </div>
          </div>
          <div className="col-md-6">
            <img className="" src="images/bizaa.jpg " alt="" />
            <div className="bg-white p-4">

          <p className="text-start">january 3,2023</p>
          <p className="fw-bold text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, illum!</p>
         </div>
          </div>

        </div>
      </div>
    </div>
    </div>
    </>
);
};

export default Home;
