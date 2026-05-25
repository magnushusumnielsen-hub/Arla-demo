'use client';

import { useState } from 'react';
import { DiscoveryResponse } from '@/lib/types';
import InputScreen from '@/components/InputScreen';
import LoadingScreen from '@/components/LoadingScreen';
import ResultsScreen from '@/components/ResultsScreen';

type AppState = 'idle' | 'loading' | 'results';

export default function Home() {
  const [appState, setAppState] = useState<AppState>('idle');
  const [result, setResult] = useState<DiscoveryResponse | null>(null);
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (desc: string) => {
    setDescription(desc);
    setAppState('loading');
    setError(null);

    try {
      const res = await fetch('/api/discover', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: desc }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Noget gik galt. Prøv igen.');
        setAppState('idle');
        return;
      }

      setResult(data);
      setAppState('results');
    } catch {
      setError('Netværksfejl. Prøv igen.');
      setAppState('idle');
    }
  };

  const handleReset = () => {
    setAppState('idle');
    setResult(null);
    setDescription('');
    setError(null);
  };

  if (appState === 'loading') return <LoadingScreen />;

  if (appState === 'results' && result) {
    return <ResultsScreen result={result} userDescription={description} onReset={handleReset} />;
  }

  return (
    <>
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white border border-neutral-200 rounded-lg px-4 py-3 text-sm text-neutral-900 shadow-sm">
          {error}
        </div>
      )}
      <InputScreen onSubmit={handleSubmit} />
    </>
  );
}
