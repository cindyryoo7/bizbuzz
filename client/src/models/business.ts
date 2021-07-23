import { Category } from "./category";
import { Coordinates } from "./coordinates";
import { Location } from "./location";

export type Business = {
  id: string,
  alias: string,
  name: string,
  image_url: string,
  is_closed: boolean,
  url: string,
  review_count: number,
  categories: Category[],
  rating: number,
  coordinates: Coordinates,
  transactions: string[],
  price: string,
  location: Location,
  phone: string,
  display_phone: string,
  distance: bigint
}