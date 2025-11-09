"use client";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true, syncTouch: true });
    let raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    return () => {
      /* no destroy API needed in newest lenis; GC handles when ref lost */
    };
  }, []);
}
