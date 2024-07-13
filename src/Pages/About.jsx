import React from "react";
import Common from "./Common";
import web from "../assets/white-male-1871406_640.jpg";


const About = () => {
  return (
    <>
      <Common name = 'Welcome to About Page' imgsrc={web} visit = '/contact' btnName = 'Contact Now' />
    </>
  );
};

export default About;