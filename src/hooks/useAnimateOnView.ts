import { useEffect, useRef, useState } from "react";

export const useAnimateOnView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Once visible, we can stop observing
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      },
    );

    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, [isVisible]);

  return { ref, isVisible };
};
