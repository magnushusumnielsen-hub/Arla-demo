import { WontHelpItem } from '@/lib/types';

type Props = {
  items: WontHelpItem[];
};

export default function WontHelpSection({ items }: Props) {
  return (
    <div className="rounded-lg border-l-[3px] border-arla-yellow bg-arla-yellow-soft p-5">
      <p className="text-xs font-medium tracking-widest text-arla-yellow-text uppercase mb-4 flex items-center gap-1.5">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        Hvor GenAI sandsynligvis ikke hjælper dig
      </p>
      <div className="flex flex-col gap-4">
        {items.map((item, i) => (
          <div key={i}>
            <p className="text-sm font-medium text-arla-green-dark mb-1">{item.task}</p>
            <p className="text-sm text-neutral-900 leading-relaxed">{item.reason}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
