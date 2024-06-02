import React from "react";
import HeaderCafe from "../Cafenea/Components-cafenea/Header-Cafe";
import HomeCafe from "../Cafenea/Components-cafenea/Home-Cafe";
import AboutCafe from "../Cafenea/Components-cafenea/About-Cafe";
import FeaturesCafe from "../Cafenea/Components-cafenea/Features-Cafe";
import MenuCafe from "../Cafenea/Components-cafenea/Menu-Cafe";
import Gallery from "../Cafenea/Components-cafenea/Gallery-Cafe";
import Reservation from "../Cafenea/Components-cafenea/ReservationForm";
function Cafenea() {
  return (
    <>
      <HeaderCafe />
      <HomeCafe />
      <AboutCafe />
      <FeaturesCafe />
      <MenuCafe />
      <Gallery />
      <Reservation />
    </>
  );
}

export default Cafenea;
