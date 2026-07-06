import { hotels } from "../data/hotels";
export const getHotels = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return hotels;
};
