import { useEffect, useState } from "react";

interface MouseState {
  xAxis: null | number | any;
  yAxis: null | number | any;
}

export const useCursorPosition = () => {
  const [mouseLocation, setMouseLocation] = useState<MouseState>({
    xAxis: null,
    yAxis: null,
  });

  useEffect(() => {
    const mouseLocationHandler = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMouseLocation({ xAxis: clientX, yAxis: clientY });
    };

    document.addEventListener("mousemove", mouseLocationHandler);

    return () => {
      document.removeEventListener("mousemove", mouseLocationHandler);
    };
  }, []);

  return mouseLocation;
};

export default useCursorPosition;
