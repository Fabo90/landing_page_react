import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cardgroup from "./Cardgroup";
import Footer from "./Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Jumbotron />
            <Cardgroup />
            <Footer />
        </>
    );
};

export default Home;