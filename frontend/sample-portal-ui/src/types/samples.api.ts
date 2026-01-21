interface PatchSampleRequest {
  id: string;
  collection_date: string; // ISO date string
  notes?: string;
}

interface SampleResponse {
  id: string;
  name: string;
  date_of_birth: string; // ISO date string
  collection_date?: string; // Optional ISO date string
  notes?: string;
}

export type { SampleResponse, PatchSampleRequest };
