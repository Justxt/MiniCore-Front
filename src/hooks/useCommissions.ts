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

      setState((prevState) => ({ ...prevState, commissions: response.data }));
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
