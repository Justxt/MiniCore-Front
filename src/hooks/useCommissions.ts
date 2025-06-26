import { useState } from "react";
import { commissionsApi } from "../services/api";
import type { CommissionResult, CommissionFilterDto } from "../services/api";

export function useCommissions(filter: CommissionFilterDto) {
  const [state, setState] = useState<{
    commissions: CommissionResult[];
    loading: boolean;
    error: string | null;
  }>({
    commissions: [],
    loading: false,
    error: null,
  });

  const calculateCommissions = async () => {
    try {
      setState((prevState) => ({ ...prevState, loading: true, error: null }));

      const filterData: CommissionFilterDto = {
        startDate: filter.startDate || undefined,
        endDate: filter.endDate || undefined,
        sellerId: filter.sellerId || undefined,
      };

      const response = await commissionsApi.calculate(filterData);
      const mappedData = response.data.map((item: any) => ({
        sellerId: item.sellerId,
        sellerName: item.sellerName,
        salesCount: item.totalAmount / 100,
        totalSales: item.totalAmount,
        totalCommission: item.commission,
      }));
      setState((prevState) => ({ ...prevState, commissions: mappedData }));
    } catch (err) {
      setState((prevState) => ({
        ...prevState,
        error: "Error al calcular comisiones",
      }));
      console.error(err);
    } finally {
      setState((prevState) => ({ ...prevState, loading: false }));
    }
  };

  return { ...state, calculateCommissions };
}
