import { Resource } from '@/lib/types';

type Props = {
  resources: Resource[];
};

function LockIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function GuideIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export default function ResourcesSection({ resources }: Props) {
  return (
    <div>
      <p className="text-xs font-medium tracking-widest text-arla-green-dark uppercase mb-1">
        Fra Arlas vidensbank
      </p>
      <p className="text-sm text-neutral-500 mb-4">
        Ressourcer der matcher dine use cases
      </p>
      <div className="flex flex-col gap-3">
        {resources.map((resource, i) => (
          <div key={i} className="rounded-lg border border-neutral-200 bg-white p-4 flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-md ${
                  resource.type === 'video'
                    ? 'bg-arla-green-soft text-arla-green-dark'
                    : 'bg-neutral-200 text-neutral-700'
                }`}>
                  {resource.type === 'video' ? <VideoIcon /> : <GuideIcon />}
                  {resource.type === 'video' ? 'Video' : 'Guide'}
                </span>
                {resource.duration && (
                  <span className="text-xs text-neutral-500">{resource.duration}</span>
                )}
              </div>
              <p className="text-sm font-medium text-neutral-900 mb-1">{resource.title}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{resource.description}</p>
            </div>
            <div className="shrink-0 flex flex-col items-end gap-1">
              <button
                disabled
                className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-400 border border-neutral-200 rounded-md px-3 py-1.5 cursor-not-allowed"
                title="Kræver integration med Arlas vidensbank"
              >
                <LockIcon />
                Åbn
              </button>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-neutral-400 mt-3 flex items-center gap-1">
        <LockIcon />
        Kræver integration med Arlas interne vidensbank
      </p>
    </div>
  );
}
