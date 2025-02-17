import { useState, useEffect } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(
    null
  );

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";

      if (direction !== scrollDirection) {
        // Only update scroll direction if we're not at the top of the page
        // or if we're scrolling down from the top
        if (scrollY > 0 || (scrollY === 0 && direction === "down")) {
          setScrollDirection(direction);
        }
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}
