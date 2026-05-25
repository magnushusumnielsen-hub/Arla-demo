'use client';

import { useState } from 'react';
import { UseCase } from '@/lib/types';

type Props = {
  useCase: UseCase;
};

export default function UseCaseCard({ useCase }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(useCase.starter_prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-5">
      <div className="flex gap-2 mb-3">
        <span className={`text-xs font-medium px-2 py-0.5 rounded-md ${
          useCase.impact === 'high'
            ? 'bg-arla-green-soft text-arla-green-dark'
            : 'bg-neutral-200 text-neutral-700'
        }`}>
          {useCase.impact === 'high' ? 'Høj effekt' : 'Middel effekt'}
        </span>
        <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-neutral-200 text-neutral-700">
          {useCase.effort}
        </span>
      </div>
      <h3 className="text-base font-medium text-neutral-900 mb-2">{useCase.title}</h3>
      <p className="text-sm text-neutral-700 leading-relaxed mb-4">{useCase.description}</p>
      <button
        onClick={() => setExpanded(e => !e)}
        className="text-sm font-medium text-arla-green-dark border border-arla-green-dark rounded-md px-3 py-1.5 hover:bg-arla-green-soft transition-colors"
      >
        {expanded ? 'Skjul startprompt' : 'Se startprompt'}
      </button>
      {expanded && (
        <div className="mt-4">
          <div className="bg-neutral-200 rounded-md p-4 text-sm text-neutral-900 font-mono whitespace-pre-wrap leading-relaxed">
            {useCase.starter_prompt}
          </div>
          <button
            onClick={handleCopy}
            className="mt-2 text-xs font-medium text-neutral-700 hover:text-arla-green-dark transition-colors"
          >
            {copied ? 'Kopieret!' : 'Kopiér'}
          </button>
        </div>
      )}
    </div>
  );
}
