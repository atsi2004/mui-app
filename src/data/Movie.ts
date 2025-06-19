import type { ReactNode } from "react";

export interface Movie {
  Plot: ReactNode;
  loading?: boolean;
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}