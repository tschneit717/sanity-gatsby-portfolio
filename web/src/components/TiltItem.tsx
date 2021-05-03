import React from "react";
import Tilt from "react-parallax-tilt";

export default function TiltItem({ children }) {
  const [tilt, setTilt] = React.useState({
    tiltMaxAngleX: 5,
    tiltMaxAngleY: 5,
    tiltReverse: true,
    perspective: 3500,
    scale: 1.02,
  });
  return <Tilt {...tilt}>{children}</Tilt>;
}
