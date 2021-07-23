import { Category } from "./category";
import { Location } from "./location";
import { Coordinates } from "./coordinates";
import { Schedule } from "./schedule";
import { Messages } from "./messages";
import { Hours } from "./hours";

export type BusinessDetails = {
  id: string,
  alias: string,
  name: string,
  image_url: string,
  is_claimed: boolean,
  is_closed: boolean,
  url: string,
  phone: string,
  display_phone: string,
  review_count: number,
  categories: Category[],
  rating: number,
  location: Location,
  coordinates: Coordinates,
  photos: string[],
  price: string,
  hours: Schedule[],
  transactions: string[],
  messaging: Messages,
  special_hours: Hours[]
}