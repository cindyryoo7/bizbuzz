import { User } from "./user";

export type Review = {
  id: string,
  url: string,
  text: string,
  rating: number,
  time_created: string,
  user: User
}