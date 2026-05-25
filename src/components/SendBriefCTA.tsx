import { buildBriefMailto } from '@/lib/mailto';

type Props = {
  userDescription: string;
};

export default function SendBriefCTA({ userDescription }: Props) {
  return (
    <div className="rounded-lg bg-arla-green-dark p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      <div>
        <p className="text-base font-medium text-white mb-1">Har du brug for hjælp til at komme i gang?</p>
        <p className="text-sm text-white/70">Send Magnus et brief og få 1:1 sparring</p>
      </div>
      <a
        href={buildBriefMailto(userDescription)}
        className="shrink-0 rounded-md bg-arla-yellow text-arla-yellow-text text-sm font-medium px-5 py-2.5 hover:opacity-90 transition-opacity"
      >
        Send brief
      </a>
    </div>
  );
}
