import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<Date | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetDate.getTime() - currentTime.getTime();
      setTimeLeft(new Date(timeDifference));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const daysLeft = timeLeft
    ? Math.floor(timeLeft.getTime() / (1000 * 60 * 60 * 24))
    : 0;

  return (
    <div className="flex flex-col items-center space-y-2">
      {timeLeft && (
        <>
          <div className="text-4xl font-semibold text-pink-800">
            {daysLeft} days
          </div>
          <div className="text-3xl font-semibold text-pink-800">
            {timeLeft.getUTCHours()} hours
          </div>
          <div className="text-2xl font-semibold text-pink-800">
            {timeLeft.getUTCMinutes()} minutes
          </div>
          <div className="text-xl font-semibold text-pink-800">
            {timeLeft.getUTCSeconds()} seconds
          </div>
        </>
      )}
    </div>
  );
};

export default function Home() {
  const targetDate = new Date(2023, 5, 5, 15, 30, 0, 0);

  return (
    <div className="min-h-screen bg-f0b2bc flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-pink-700">Partaaay</h1>
        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
}
