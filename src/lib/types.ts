export type UseCase = {
  title: string;
  description: string;
  impact: 'high' | 'medium';
  effort: '~30 min' | '~2 hours' | '~1 day';
  starter_prompt: string;
};

export type WontHelpItem = {
  task: string;
  reason: string;
};

export type DiscoveryResponse = {
  role_summary: string;
  high_impact_low_effort: UseCase[];
  worth_exploring: UseCase[];
  wont_help: WontHelpItem[];
};
