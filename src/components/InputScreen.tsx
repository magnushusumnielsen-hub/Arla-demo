'use client';

import { useState } from 'react';
import { EXAMPLE_INPUT } from '@/lib/example';

type Props = {
  onSubmit: (description: string) => void;
};

export default function InputScreen({ onSubmit }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim().length >= 20) {
      onSubmit(value.trim());
    }
  };

  return (
    <div className="min-h-screen bg-warm-white flex flex-col">
      <div className="h-1 bg-arla-yellow w-full" />
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-[640px]">
          <p className="text-xs font-medium tracking-widest text-arla-green-dark uppercase mb-4">
            GenAI Discovery
          </p>
          <h1 className="text-2xl font-medium text-neutral-900 mb-3 leading-snug">
            Find ud af hvordan AI realistisk kan hjælpe dit arbejde
          </h1>
          <p className="text-sm text-neutral-700 mb-8 leading-relaxed">
            Beskriv dit job med dine egne ord — på 60 sekunder får du konkrete, skræddersyede use cases (og en klar liste over hvor AI ikke hjælper).
          </p>
          <form onSubmit={handleSubmit}>
            <textarea
              rows={10}
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Fortæl mig om dit arbejde. Hvad er din rolle? Hvilke opgaver bruger du mest tid på? Hvad er mest frustrerende eller gentagende? Jo mere specifik, jo bedre."
              className="w-full rounded-lg border border-neutral-200 p-4 text-sm text-neutral-900 placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-arla-green-dark resize-none bg-white"
            />
            <div className="flex gap-3 mt-4">
              <button
                type="button"
                onClick={() => setValue(EXAMPLE_INPUT)}
                className="flex-1 rounded-md border border-arla-green-dark text-arla-green-dark text-sm font-medium py-2.5 px-4 hover:bg-arla-green-soft transition-colors"
              >
                Indlæs eksempel
              </button>
              <button
                type="submit"
                disabled={value.trim().length < 20}
                className="flex-1 rounded-md bg-arla-green-dark text-white text-sm font-medium py-2.5 px-4 hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Opdag use cases →
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
