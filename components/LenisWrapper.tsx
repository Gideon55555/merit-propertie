"use client";

import Lenis from "lenis";
import React, { useEffect } from "react";

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy(); // Clean up when component unmounts
    };
  }, []);
  return <>{children}</>;
};

export default LenisWrapper;
