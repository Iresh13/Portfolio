"use client";

import { useCallback, useEffect, useState } from "react";

export function useSmoothScroll() {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToElement = useCallback(
    (elementId: string) => {
      if (!isClient) return;
      const element = document.getElementById(elementId);

      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }

      setTimeout(() => {
        window.history.pushState(null, "", `#${elementId}`);
      }, 10);
    },
    [isClient]
  );

  return scrollToElement;
}
