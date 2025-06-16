"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // or 'next/navigation' for Next.js 13+

const ThankYou: React.FC = () => {
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  // Replace with your target URL
  const redirectUrl = "/products";

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    // Redirect after 5 seconds
    const redirectTimer = setTimeout(() => {
      router.push(redirectUrl);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Thank You!</h1>

        <p className="text-gray-600 pb-6">
          We have received your application! We will review it momentarily and
          get back to you as soon as possible.
        </p>

        <p className="text-gray-500">
          Meanwhile, check out our other products! Redirecting in{" "}
          <span className="font-bold text-blue-600">{countdown}</span>{" "}
          seconds...
        </p>

        <div className="pt-8">
          <button
            onClick={() => router.push(redirectUrl)}
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-400 transition-colors"
          >
            Go Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
