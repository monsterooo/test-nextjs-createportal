"use client";

import React, { useRef, useEffect, useState } from "react";
import { createPortal } from "react-dom";


export default function Home() {
  const ref = useRef(null);
  const [refPortal, setRefPortal] = useState();

  useEffect(() => {
    console.log("ref:", ref);
    setRefPortal(ref.current);
  }, []);

  return (
    <div>
      app
      <div ref={ref}></div>
      {refPortal && createPortal(<body>hello world</body>, ref.current)}
    </div>
  );
}
