"use client";

import { useCallback, useEffect, useState } from "react";

export function useSmoothScroll() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToElement = useCallback(
    (elementId: string) => {
      if (!isClient) return;

      const element = document.getElementById(elementId);

      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - 20; // 20px padding

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState(null, "", `#${elementId}`);
      }
    },
    [isClient]
  );

  return scrollToElement;
}
