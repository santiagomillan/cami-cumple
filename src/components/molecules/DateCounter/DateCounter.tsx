"use client";

import confetti from "canvas-confetti";
import React, { useEffect } from "react";

export const DateCounter = () => {
  useEffect(() => {
    const targets = [
      { id: "starsCount", count: 1999, suffix: "" },
      { id: "downloadsCount", count: 25, suffix: "" },
      { id: "sponsorsCount", count: 2, suffix: "+" },
    ];

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          animateCountUp(entry.target);
          observer.unobserve(entry.target);
        }
      });
    };

    const animateCountUp = (target: any) => {
      let currentCount = 0;
      const count = parseInt(target.getAttribute("data-count"));
      const suffix = target.getAttribute("data-suffix");
      const increment = Math.ceil(count / 100);

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= count) {
          clearInterval(interval);
          currentCount = count;
          target.textContent = currentCount + suffix;
          confetti();
        } else {
          target.textContent = currentCount;
        }
      }, 10);
    };

    const observer = new IntersectionObserver(callback, options);
    targets.forEach((target) => {
      const element = document.getElementById(target.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pt-8 ">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-white sm:text-4xl sm:leading-10">
            Algunos datos importantes
          </h2>
          {/* <p className="mt-3 text-xl leading-7 text-gray-600 dark:text-gray-400 sm:mt-4">
              This package powers many production applications on many different
              hosting platforms.
            </p> */}
        </div>
      </div>
      <div className="pb-12 mt-10  sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2"></div>
          <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="bg-white dark:bg-gray-800 rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Desde
                  </dt>
                  <dd
                    className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                    aria-describedby="item-1"
                    id="starsCount"
                    data-count="1999"
                    data-suffix=""
                  >
                    0
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Años
                  </dt>
                  <dd
                    className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                    id="downloadsCount"
                    data-count="25"
                    data-suffix=""
                  >
                    0
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                    Juntos
                  </dt>
                  <dd
                    className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                    id="sponsorsCount"
                    data-count="2"
                    data-suffix="+"
                  >
                    0
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
