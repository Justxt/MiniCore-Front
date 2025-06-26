import { useState } from "react";
import type { CommissionFilterDto } from "../services/api";

export function useCommissionFilter() {
  const [filter, setFilter] = useState<CommissionFilterDto>({
    startDate: new Date(new Date().getFullYear(), new Date().getMonth(), 1)
      .toISOString()
      .split("T")[0],
    endDate: new Date().toISOString().split("T")[0],
    sellerId: "",
  });

  return { filter, setFilter };
} 