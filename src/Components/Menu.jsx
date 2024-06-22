// src/components/Menu.js
import React, { useEffect, useState } from 'react';
import '../Styles/Menu.css';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../Redux/Slices/Categories';
import { getMenuItems } from '../Redux/Slices/MenuItems';

const Menu = () => {
  const categories = useSelector((state) => state.categories.categories)
  const menuItems = useSelector((state) => state.menuItem.menuItems)
  const dispatch = useDispatch();
  const [categoryName, setCategoryName] = useState("Beef")

  useEffect(() => {
    dispatch(getCategories())
    dispatch(getMenuItems(categoryName))
  }, [dispatch, categoryName])
  const [clickedButton, setClickedButton] = useState('1');

  const handleClick = (buttonId, buttonName) => {
    setClickedButton(buttonId);
    setCategoryName(buttonName);
  };
  return (
    <>
      <div className="container text-center my-5">
        <h2 className='menuHeader'>Our Menu</h2>
        <p className='mb-5 fs-5 mx-auto w-75'>
          We consider all the drivers of change gives you the components you need to change to create a truly happens.
        </p>
      </div>

      <div className="container-fluid my-5">
        <div className="row justify-content-center gap-2">
          {categories.map((item) => (<button onClick={() => handleClick(item.idCategory, item.strCategory)} className={clickedButton === item.idCategory ? "col-11 col-sm-3 col-md-2 btn btn-light activeButton rounded-bill" : "col-11 col-sm-3 col-md-2 btn btn-light"} key={item.idCategory}>{item.strCategory}</button>))}
        </div>
      </div>

      <div className="container-fluid p-0 my-5">
        <div className='row justify-content-evenly gap-1 m-2'>
          {menuItems.map(item => (
            <div className="col-12 col-sm-5 col-md-3 my-2 px-0 rounded-4 border border-2 " style={{ borderColor: '#dbdfd0', boxSizing: "border-box" }} key={item.idMeal}>
              <img className='w-100' src={item.strMealThumb} style={{ borderRadius: '12px 12px 0 0' }} alt={item.strMeal} />
              <div className="text-center p-2">
                <h3>$ 20.99</h3>
                <h4>{item.strMeal}</h4>
                <p>Made with eggs, lettuce, salt, oil and other ingredients.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid p-5" style={{ backgroundColor: "#f7f7f3" }}>
        <div className="row justify-content-evenly">
          <div className="col-12 col-lg-4 row flex-column text-center">
            <h1 className=" mb-4">You can order through apps</h1>
            <p className='fs-5'>
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendam sed et aliquet allout riaus tempor sampar.
            </p>
          </div>
          <div className="col-12 col-lg-6 row flex-column justify-content-center">
            <div className="row px-5">
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/2g08HKAchxtBFQJeceh6hu2PMU.svg" className='w-100' alt="Uber Eats" />
              </div>
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/lz9D7rafexX3TgZPSWaxom2ZHk.svg" className='w-100' alt="Grubhub" />
              </div>
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/Bl66SHTmI1u9KuGdveVq6bizorw.svg" className='w-100' alt="Postmates" />
              </div>
            </div>
            <div className="row p-0">
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/NBByiuqnmiQP95WZKOyI8TcJxSg.svg" className='w-100' alt="Doordash" />
              </div>
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/I3I1O7ICbKu5zVzaQb02ZKqR31c.svg" className='w-100' alt="Foodpanda" />
              </div>
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/MkfcpzYGxYZF3CwMTpqJmpJDTlI.svg" className='w-100' alt="Deliveroo" />
              </div>
            </div>
            <div className="row px-5">
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/LgOfYmbP5jw7IuynIYjMCQxgrs.svg" className='w-100' alt="Instacart" />
              </div>
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/h4sPRXzSL8JAPkQnj8waf0qrcoY.svg" className='w-100' alt="Just Eat" />
              </div>
              <div className="col-12 col-sm-4 text-center mb-3">
                <img src="https://framerusercontent.com/images/OjBhK8YRENjQtyNnGzbOaYRNo.svg" className='w-100' alt="Didi Food" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );  
};

export default Menu;
