export interface AppOverviewSection {
  title: string | false;
  fragment?: string;
}

export interface AppOverview {
  [fragment: string]: AppOverviewSection;
}
