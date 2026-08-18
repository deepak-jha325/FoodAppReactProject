import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import birdImg from "../assets/image/bird.png";


function BirdAnimation() {
  const birdRef = useRef(null);
  
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(birdRef.current, { x: 300, y: -100, duration: 2, ease: "power1.inOut" })
      
      .to(birdRef.current, { x: 600, y: -300, duration: 2, ease: "power1.inOut" });
  }, []);

  const handleClick = () => {
    tl.current.restart();
  };

  return (
    <div style={{ position: "relative", height: "400px", overflow: "hidden" }}>
      <img
        ref={birdRef}
        src={birdImg}
        alt="Bird"
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          width: "120px",     // ✅ smaller bird size
          height: "auto"
        }}
      />
      <button onClick={handleClick}>Add to Cart</button>
    </div>
  );
}

export default BirdAnimation;
