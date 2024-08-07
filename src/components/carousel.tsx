"use client";

import React, { useEffect, useRef, useState } from "react";

interface CarouselProperties {
  children: React.ReactNode;
  interval?: number;
  className?: string;
}
export const Carousel: React.FC<CarouselProperties> = ({
  children,
  interval = 5000,
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);
  const length = childrenArray.length;
  const timeoutReference = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutReference.current) {
      clearTimeout(timeoutReference.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutReference.current = setTimeout(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % length);
    }, interval);

    return () => {
      resetTimeout();
    };
  }, [currentIndex, length, interval]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                {childrenArray.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentIndex ? 'bg-primary-120' : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div> */}
    </div>
  );
};
