import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import useCursorPosition from "@/hooks/cursor-position";
import styles from "./cursor.module.scss";
const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  const { xAxis, yAxis } = useCursorPosition();
  gsap.to(cursorRef.current, {
    duration: 0.1,
    x: xAxis,
    y: yAxis,
  });
  gsap.to(followerRef.current, {
    duration: 0.5,
    x: xAxis,
    y: yAxis,
  });

  return (
    <div>
      <div ref={cursorRef} className={styles.cursor_ref}></div>
      <div ref={followerRef} className={styles.follower_ref}></div>
    </div>
  );
};

export default CustomCursor;
