import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
       panelContent={{
  title: "Vertex Office",
  quote: "Step inside a fully interactive 3D workspace.",
  content: [
    "Vertex Office is an immersive 3D environment where users can explore a fully interactive workspace. Every object in the room tells a story—hover over the desk to uncover hidden sections, explore the painting to reveal surprises, and interact with buttons to transition to entirely new 3D spaces.",
    "Designed with smooth animations, responsive interactions, and dynamic transitions, the site creates a sense of discovery, inviting users to engage, explore, and experience the digital environment in a playful and intuitive way.",
    "Each element is carefully crafted to make the virtual space feel alive, offering an experience that blends design, technology, and interactivity. Whether transitioning between rooms or discovering hidden sections, users are constantly encouraged to explore and interact.",
    "Built with advanced web technologies and immersive 3D modeling techniques, Vertex Office transforms traditional web experiences into an exploratory digital journey that combines creativity, technology, and interactivity."
  ],
}}
        imageSrc={"images/office.jfif"}
      />
    </>
  );
};

export default DevWorkPage;
