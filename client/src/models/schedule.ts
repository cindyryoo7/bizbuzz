import { Hours } from "./hours";

export type Schedule = {
  open: Hours[],
  hours_type: string,
  is_open_now: boolean
}