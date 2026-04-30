// const API_URL = "http://localhost:3000/veiculos";

// export async function getVeiculos(): Promise<Veiculo[]> {
//   const response = await fetch(API_URL);
//   return response.json();
// }

import { api } from "./api";
import type { Veiculo } from "../types/veiculo";

export async function getVeiculos(): Promise<Veiculo[]> {
  const response = await api.get("/veiculos");
  return response.data;
}