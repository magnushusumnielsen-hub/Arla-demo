'use client';

import { useEffect, useState } from 'react';

const messages = [
  'Analyserer hvad du beskrev…',
  'Identificerer realistiske use cases…',
  'Tjekker hvor AI ikke hjælper…',
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(i => (i + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-warm-white flex flex-col">
      <div className="h-1 bg-arla-yellow w-full" />
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-[640px] text-center">
          <div className="flex justify-center gap-1.5 mb-6">
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="w-2 h-2 rounded-full bg-arla-green-dark animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
          <p className="text-sm text-neutral-700 transition-all duration-300">
            {messages[index]}
          </p>
        </div>
      </div>
    </div>
  );
}
