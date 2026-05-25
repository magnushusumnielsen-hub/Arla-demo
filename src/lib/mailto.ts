export function buildBriefMailto(userDescription: string): string {
  const to = 'magnushusumnielsen@gmail.com';
  const subject = 'Brief: GenAI use case sparring';
  const body = `Hej Magnus,

Jeg prøvede dit GenAI discovery-værktøj og vil gerne have hjælp til at komme i gang.

— Min rolle og arbejde —
${userDescription}

— Hvad jeg gerne vil have hjælp til —
[Kort: hvilken use case fra resultaterne, eller hvad der holder mig tilbage]

— Hvilken type hjælp —
[ ] 30 min. 1:1 sparring
[ ] Workshop med mit team
[ ] Asynkron gennemgang af en prompt jeg er ved at skrive

Tak!`;

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
