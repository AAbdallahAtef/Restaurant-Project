import React from "react";
import "../Styles/RecipeDetails.css";
import imageOne from "./assets/image1.png";
import imageTwo from "./assets/image2.png";
import imageThree from "./assets/image3.png";
import imageFour from "./assets/image4.png";
import imageFive from "./assets/image5.png";
import imageSix from "./assets/image6.png";

function RecipeDetails() {
  return (
    <div>
      <main className="main-content">
        <h1 className="main-title">
          The secret tips & tricks to prepare a perfect burger & pizza for our
          customers
        </h1>

        <img src={imageOne} alt="Dish Image" className="main-image" />

        <section className="content-section">
          <h2>What do you need to prepare a home-made burger?</h2>
          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate. Today, we'll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary
            world.
            <br />
            <br />
            <strong>Quality Beef:</strong> The heart of a perfect burger is
            top-notch beef. Opt for fresh, high-quality ground beef with a fat
            content of about 20% for the juiciest, most flavorful results.
            <br />
            <strong>Seasoning:</strong> Simplicity is key here. A generous pinch
            of salt and black pepper just before cooking will enhance the beef's
            natural flavors without overshadowing them.
            <br />
            <strong>Don't Overwork the Meat:</strong> When forming your patties,
            be gentle. Overworking the meat can lead to dense, tough burgers.
            You want a patty that's firm enough to hold together, but not
            compressed.
            <br />
            <strong>Cooking:</strong> High heat is crucial. Whether you're
            grilling or pan-searing, make sure your cooking surface is hot
            enough to form a nice crust on the patty, sealing in those delicious
            juices.
            <br />
            <strong>Resting:</strong> Allow your cooked burgers to rest for a
            few minutes before serving. This lets the juices redistribute
            throughout the patty, ensuring a moist and flavorful bite.
          </p>
        </section>

        <section className="content-section">
          <h2>What are the right ingredients to make it delicious?</h2>
          <p>
            Creating the perfect burger and pizza is an art, combining
            ingredients, techniques, and passion to craft dishes that truly
            delight the palate. Today, we'll unveil some closely guarded secrets
            and insider tips for mastering these beloved staples of the culinary
            world.
            <br />
            <br />
            <strong>Quality Beef:</strong> The heart of a perfect burger is
            top-notch beef. Opt for fresh, high-quality ground beef with a fat
            content of about 20% for the juiciest, most flavorful results.
            <br />
            <strong>Seasoning:</strong> Simplicity is key here. A generous pinch
            of salt and black pepper just before cooking will enhance the beef's
            natural flavors without overshadowing them.
            <br />
            <strong>Don't Overwork the Meat:</strong> When forming your patties,
            be gentle. Overworking the meat can lead to dense, tough burgers.
            You want a patty that's firm enough to hold together, but not
            compressed.transition: transform 0.3s ease-in-ou
            <br />
            <strong>Cooking:</strong> High heat is crucial. Whether you're
            grilling or pan-searing, make sure your cooking surface is hot
            enough to form a nice crust on the patty, sealing in those delicious
            juices.
            <br />
            <strong>Resting:</strong> Allow your cooked burgers to rest for a
            few minutes before serving. This lets the juices redistribute
            throughout the patty, ensuring a moist and flavorful bite.
          </p>
          <img src={imageTwo} alt="Dish Image 2" className="sub-image" />
        </section>

        <section className="content-section">
          <h2>What are the right ingredients to make it delicious?</h2>
          <p>
            Proin faucibus nec mauris a sodales, sed elementum mi tincidunt. Sed
            eget viverra egestas nisi in consequat. Fusce sodales augue a
            accumsa Cras sollicitudin, le ligula, porttitor eu, consequat vitae,
            eleifend ac, enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit lobortis arcu enim urna adipiscing praesent velit
            viverra sit semper lorem eu cursus ve of all hendrerit elementum
            morbi curabitur etiam nibh justo, lorem aliquet donec sed sit mi
            dignissim at ante massa mattis magna sit amet purus gravida quis
            blandit turpis..
          </p>
        </section>

        <section className="read-more">
          <h2>Read More Articles</h2>
          <p>
            We consider all the drivers of change gives you the components you
            need to change to create a truly happens.
          </p>
          <div className="card-row">
            {/* <div className="card">
              <img src={imageThree} alt="Article Image" />
              <div className="card-content">
                <p className="date">January 3, 2023</p>
                <h3>How to prepare a delicious gluten-free sushi</h3>
              </div>
            </div> */}
            <div
              className="card"
              style={{
                width: "18rem",
                height: "28rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <img
                className="card-img-top"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src={imageThree}
                alt="Card image cap"
              />
              <div
                style={{ padding: "20px", textAlign: "left" }}
                className="card-body"
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#737865",
                  }}
                  className="card-text"
                >
                  January 3, 2023
                </p>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#2c2f24",
                    marginTop: "32px",
                  }}
                >
                  How to prepare a delicious gluten-free sushi
                </h3>
              </div>
            </div>
            <div
              className="card"
              style={{
                width: "18rem",
                height: "28rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <img
                className="card-img-top"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src={imageFour}
                alt="Card image cap"
              />
              <div
                style={{ padding: "20px", textAlign: "left" }}
                className="card-body"
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#737865",
                  }}
                  className="card-text"
                >
                  January 3, 2023
                </p>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#2c2f24",
                    marginTop: "32px",
                  }}
                >
                  Exclusive baking lessons from the pastry king
                </h3>
              </div>
            </div>
            <div
              className="card"
              style={{
                width: "18rem",
                height: "28rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <img
                className="card-img-top"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src={imageFive}
                alt="Card image cap"
              />
              <div
                style={{ padding: "20px", textAlign: "left" }}
                className="card-body"
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#737865",
                  }}
                  className="card-text"
                >
                  January 3, 2023
                </p>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#2c2f24",
                    marginTop: "32px",
                  }}
                >
                  How to prepare the perfect fries in an air fryer
                </h3>
              </div>
            </div>
            <div
              className="card"
              style={{
                width: "18rem",
                height: "28rem",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
              }}
            >
              <img
                className="card-img-top"
                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                src={imageSix}
                alt="Card image cap"
              />
              <div
                style={{ padding: "20px", textAlign: "left" }}
                className="card-body"
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "#737865",
                  }}
                  className="card-text"
                >
                  January 3, 2023
                </p>
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#2c2f24",
                    marginTop: "32px",
                  }}
                >
                 How to prepare delicious chicken tenders
                </h3>
              </div>
            </div>
            {/* <!-- Add other cards here similarly --> */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default RecipeDetails;
