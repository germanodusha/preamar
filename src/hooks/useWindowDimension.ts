import { useState, useEffect } from 'react';

function getWindowDimensions() {
    const hack = {
        width: 0,
        height: 0
    }
    if(typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window || hack;
        return {
          width,
          height
        };
    }
    return hack;
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  },[]);

  return windowDimensions;
}
