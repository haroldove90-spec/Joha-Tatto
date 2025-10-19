
export interface TattooPlacement {
  name: string;
  reason: string;
}

export interface TattooIdea {
  description: string;
  styleAnalysis: string;
  placements: TattooPlacement[];
}
