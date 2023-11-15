import React from "react";

const Jumbotron = () => {
    return ( 
        <div className="container">
            <div className="position-relative p-5 mt-3 bg-light">
                <h1 className="display-4 fw-medium">A Warm Welcome!</h1>
                <p className="col-lg-12 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <button className="btn btn-primary px-3 mb-5" type="button">
                Call to action!
                </button>
            </div>
        </div>
    );
};

export default Jumbotron;
