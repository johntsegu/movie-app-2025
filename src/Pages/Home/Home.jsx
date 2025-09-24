import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner"
import Rowlist from "../../Components/Rows/RowList/Rowlist";



const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Rowlist/>
      <Footer />
    </>
  );
};

export default Home;
