import { DvdGenre } from '../enum';

export interface Dvd {
  dvd_id: string;
  title: string;
  director: string;
  description: string;
  genre: DvdGenre;
  releaseYear: number;
  price: number;
  stock: number;
}

export interface DvdCreatePayload {
  title: string;
  director: string;
  description: string;
  genre: DvdGenre;
  releaseYear: number | null;
  price: number;
  stock: number;
}

export interface DvdUpdatePayload extends DvdCreatePayload {
  dvd_id: string;
}
