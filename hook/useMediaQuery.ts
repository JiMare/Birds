import { useState, useEffect } from "react";

type StateType = {
  windowWidth: number;
  isDesiredWidth: boolean;
};

const useMediaQuery = (minWidth: number) => {
  const [state, setState] = useState<StateType>({
    windowWidth: 650,
    isDesiredWidth: false,
  });
  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < minWidth;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth, minWidth]);

  return state.isDesiredWidth;
};

export default useMediaQuery;
