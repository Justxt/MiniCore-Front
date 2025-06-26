import axios from "axios";

const API_BASE_URL = "minicore-production.up.railway.app";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Tipos para TypeScript
export interface Seller {
  id: string;
  name: string;
  createdAt: string;
}

export interface CommissionResult {
  sellerId: string;
  sellerName: string;
  totalSales: number;
  totalCommission: number;
  salesCount: number;
}

export interface CreateSellerDto {
  name: string;
}

export interface CommissionFilterDto {
  startDate?: string;
  endDate?: string;
  sellerId?: string;
}

// API de Vendedores
export const sellersApi = {
  getAll: () => api.get<Seller[]>("/seller"),
  getById: (id: string) => api.get<Seller>(`/seller/${id}`),
  create: (data: CreateSellerDto) => api.post<Seller>("/seller", data),
  delete: (id: string) => api.delete(`/seller/${id}`),
};

// API de Comisiones
export const commissionsApi = {
  calculate: (filter: CommissionFilterDto) =>
    api.post<CommissionResult[]>("/rules/calculate", filter),
};

export default api;
