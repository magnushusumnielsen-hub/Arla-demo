import { DiscoveryResponse } from '@/lib/types';
import UseCaseCard from './UseCaseCard';
import WontHelpSection from './WontHelpSection';
import SendBriefCTA from './SendBriefCTA';
import ResourcesSection from './ResourcesSection';

type Props = {
  result: DiscoveryResponse;
  userDescription: string;
  onReset: () => void;
};

export default function ResultsScreen({ result, userDescription, onReset }: Props) {
  return (
    <div className="min-h-screen bg-warm-white flex flex-col">
      <div className="h-1 bg-arla-yellow w-full" />
      <div className="flex-1 px-4 py-12">
        <div className="w-full max-w-[640px] mx-auto">
          <p className="text-xs font-medium tracking-widest text-arla-green-dark uppercase mb-2">
            Resultater for
          </p>
          <h2 className="text-xl font-medium text-neutral-900 mb-2">{result.role_summary}</h2>
          <p className="text-sm text-neutral-700 mb-10">
            Her er hvad jeg ville prøve først, baseret på det du fortalte mig.
          </p>

          <p className="text-xs font-medium tracking-widest text-arla-green-dark uppercase mb-4">
            Start her — høj effekt, lav indsats
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {result.high_impact_low_effort.map((uc, i) => (
              <UseCaseCard key={i} useCase={uc} />
            ))}
          </div>

          <div className="mb-10">
            <SendBriefCTA userDescription={userDescription} />
          </div>

          <p className="text-xs font-medium tracking-widest text-arla-green-dark uppercase mb-4">
            Værd at udforske
          </p>
          <div className="flex flex-col gap-4 mb-10">
            {result.worth_exploring.map((uc, i) => (
              <UseCaseCard key={i} useCase={uc} />
            ))}
          </div>

          {result.recommended_resources?.length > 0 && (
            <div className="mb-10">
              <ResourcesSection resources={result.recommended_resources} />
            </div>
          )}

          <div className="mb-10">
            <WontHelpSection items={result.wont_help} />
          </div>

          <div className="text-center mb-10">
            <button
              onClick={onReset}
              className="text-sm text-neutral-500 hover:text-neutral-700 transition-colors"
            >
              Prøv en anden rolle
            </button>
          </div>

          <p className="text-xs text-neutral-500 text-center">
            Bygget til Arla Foods Ingredients
          </p>
        </div>
      </div>
    </div>
  );
}
