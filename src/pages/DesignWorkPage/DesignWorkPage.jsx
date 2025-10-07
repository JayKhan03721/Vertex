import React from "react";
import Page from "../Page";
import "./DesignWorkPage.scss";

const DesignWorkPage = () => {
  return (
    <>
     <Page
  requireDarkRoom={false}
  panelContent={{
    title: "Creative Studio",
    quote: "Where imagination takes shape in 3D.",
    content: [
      "The Creative Studio is more than a digital environment—it’s an immersive exploration of creativity and interactivity. Every corner, object, and detail is crafted to invite engagement, allowing users to navigate a living space that reveals hidden stories and interactive surprises. From desks filled with digital tools to sketches and models, the environment encourages curiosity, discovery, and play, turning passive viewing into an active experience.",
      "By leveraging advanced 3D modeling, real-time rendering, and interactive web technologies, the Creative Studio transforms conventional digital spaces into dynamic, experiential environments. Each element is thoughtfully designed to combine visual appeal with intuitive interaction, making the digital experience both functional and inspiring. Subtle animations, responsive hover effects, and fluid transitions create a sense of continuity and immersion, allowing users to feel connected to the space as they explore.",
      "The aesthetic of the studio balances modern minimalism with a sense of warmth and creativity. Materials, lighting, and spatial composition are carefully orchestrated to guide the user’s attention and enhance the feeling of presence within the environment. Every detail—whether it’s a glowing monitor, a moving object, or an interactive panel—is designed to reinforce the sense of being inside a living, breathing creative workspace.",
      "At its core, the Creative Studio is about fostering discovery and interaction. It turns digital exploration into a meaningful journey, allowing users to engage with creativity as an evolving process. Through this 3D experience, imagination, design, and technology converge, offering an innovative way to experience a workspace that feels alive, inspiring, and endlessly interactive."
    ],
  }}
  imageSrc={"images/desk.jfif"}
/>

    </>
  );
};

export default DesignWorkPage;
