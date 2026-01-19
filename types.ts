
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface QuoteRequest {
  description: string;
  location?: string;
}

export interface QuoteResult {
  estimatedVolume: string;
  category: string;
  reclamationScore: number;
  aiAdvice: string;
}
