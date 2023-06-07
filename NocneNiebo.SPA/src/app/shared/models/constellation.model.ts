import { Star } from "./star.model";

export interface Constellation {
  id: string;
  name: string;
  description: string;
  stars: Star[];
}
