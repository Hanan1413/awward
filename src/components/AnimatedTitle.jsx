import React, { useEffect, useRef} from 'react';
// import clsx from "clsx";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

const AnimatedTitle = ({ title, containerClass }) => {
    const containerRef = useRef(null);

   
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a GSAP context scoped to the container
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom', // Start when 100% of the container is at the bottom of the viewport
          end: 'center bottom', // End when the center of the container reaches the bottom of the viewport
          toggleActions: 'play none none reverse',
        },
      });

      // Animate each word with stagger
      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    // Clean up the GSAP context when the component unmounts
    return () => ctx.revert();
  }, []); // Empty dependency array to run once when the component mounts

    return (
        <div ref={containerRef} className={`animated-title", ${containerClass}`}>
          {title.split("<br />").map((line, index) => (
            <div
              key={index}
              className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
            >
              {line.split(" ").map((word, idx) => (
                <span
                  key={idx}
                  className="animated-word"
                  dangerouslySetInnerHTML={{ __html: word }}
                />
              ))}
            </div>
          ))}
        </div>
      );


};

export default AnimatedTitle;
