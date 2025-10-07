import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
  requireDarkRoom={true}
  panelContent={{
    title: "About Me",
    quote: "Blending creativity, technology, and interactivity.",
    content: [
      "A passion for creativity and technology drives every project, blending design and interactivity to craft immersive digital experiences. With a focus on innovation and attention to detail, the work reflects a commitment to making digital spaces not only functional but engaging and memorable.",
      "Inspired by curiosity and a desire to explore new possibilities, the journey is guided by a love for storytelling through interactive environments, where each detail is designed to captivate, inform, and inspire those who explore them."
    ],
  }}
  imageSrc={"images/picture.jfif"}
/>

    </>
  );
};

export default AboutPage;
