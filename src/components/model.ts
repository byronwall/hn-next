export interface HnItem {
  by: string;
  descendants?: number;
  id: number;
  score: number;
  time: number;
  title: string | null;
  type: string;
  url?: string; // optional for Ask HN and internal items
  kidsObj?: Array<HnKidObj | null>;
  lastUpdated: number;
  text?: string; // this is for Ask HN and others that are internal
}

export interface HnKidObj {
  by?: string;
  id: number;
  parent: number;
  text?: string;
  time: number;
  type: string;
  kidsObj?: HnKidObj[];
  deleted?: boolean;
  dead?: boolean;
}
