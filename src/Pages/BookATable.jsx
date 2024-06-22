import React, { Fragment } from 'react'
import "../Styles/BookATable.css";
function BookATaple() {

    const handleSubmit = (event) => {

    };

    return (
        <>
            <div className="container text-center my-5" >
                <h1 className='bookHeader'>Book A  Table</h1>
                <p className='mb-5 fs-5 mx-auto w-50'>
                    We consider all the drivers of change gives you the components you need to change to create a truly happens.
                </p>
            </div>
            <div className="container-fluid p-0 m-0 secondDiv">
                <div className=" shadow rounded-4 p-4 bg-white bookingForm">
                    <div className='row'>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="date">Date*</label>
                                    <input type="date" className="form-control rounded-5 p-3 my-2" id="date" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="time">Time*</label>
                                    <input type="time" className="form-control rounded-5 p-3 my-2" id="time" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="name">Name*</label>
                                    <input type="text" className="form-control rounded-5 p-3 my-2" id="name" placeholder="Enter your name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone">Phone*</label>
                                    <input type="tel" className="form-control rounded-5 p-3 my-2" id="phone" placeholder="Enter phone number" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label htmlFor="totalPerson">Total Person</label>
                                    <input type="number" className="form-control rounded-5 p-3 my-2" id="totalPerson" min="1" required />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-danger col-12 rounded-5 p-3">
                                Book A Table
                            </button>
                        </form>
                    </div>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55242.59184891161!2d31.304873411596898!3d30.07522184978398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458474e6e3956e3%3A0xa3c50e24450f336e!2zQnVmZmFsbyBCdXJnZXIgTWFuaWFsIGJyYW5jaCAtINio2KfZgdmE2Ygg2KjYsdis2LEg2YHYsdi5INin2YTZhdmG2YrZhA!5e0!3m2!1sar!2seg!4v1719085220466!5m2!1sar!2seg"
                    title='GoogleMap'
                    width="100%"
                    height="80%"
                    className='googleMap'
                    allowFullScreen={true}
                    aria-hidden="false"
                    tabIndex={-1} />
            </div>
        </>
    );
}

export default BookATaple
