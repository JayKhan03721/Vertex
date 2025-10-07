import React, { useState, useEffect, useRef } from "react";
import { useProgress } from "@react-three/drei";
import gsap from "gsap";
import "./LoadingPage.scss";
import { useExperienceStore } from "../../stores/experienceStore";

const LoadingScreen = () => {
  const { progress } = useProgress();
  const topHalfRef = useRef(null);
  const bottomHalfRef = useRef(null);
  const progressText = useRef(null);
  const progressBar = useRef(null);
  const loadingScreenRef = useRef(null);
  const messageRef = useRef(null);
  const neonCubeRef = useRef(null);
  const { setIsExperienceReady } = useExperienceStore();
  const [onlyOnce, setOnlyOnce] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Neon cube pulse
    gsap.to(neonCubeRef.current, {
      rotation: "+=360",
      duration: 3,
      repeat: -1,
      ease: "linear",
    });

    if (progress === 100 && !onlyOnce) {
      setOnlyOnce(true);
      setIsExperienceReady();

      const tl = gsap.timeline();

      tl.to([progressText.current, progressBar.current], {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          messageRef.current,
          {
            opacity: 1,
            scale: 1.2,
            y: "-50%",
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(messageRef.current, {
          opacity: 0,
          y: "-150%",
          scale: 1,
          duration: 1,
          delay: 1,
          ease: "power2.in",
        })
        .to(topHalfRef.current, {
          y: "-100%",
          duration: 1.25,
          ease: "power2.inOut",
        })
        .to(
          bottomHalfRef.current,
          {
            y: "100%",
            duration: 1.25,
            ease: "power2.inOut",
            onComplete: () => setIsVisible(false),
          },
          "<"
        );
    }
  }, [progress]);

  if (!isVisible) return null;

  return (
    <div ref={loadingScreenRef} className="loading-screen">
      <div ref={topHalfRef} className="background-top-half"></div>
      <div ref={bottomHalfRef} className="background-bottom-half"></div>

      <div className="loading-screen-info-container">
        <div ref={neonCubeRef} className="neon-cube"></div>

        <div ref={messageRef} className="intro-message-container">
          Welcome to the Experience
        </div>

        <div className="loading-bar-container">
          <div
            ref={progressBar}
            className="loading-bar"
            style={{ width: `${progress}%` }}
          ></div>
          <div ref={progressText} className="percentage">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
