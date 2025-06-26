import React from "react";
import type { CommissionFilterDto } from "../services/api";

interface FilterFormProps {
  filter: CommissionFilterDto;
  setFilter: React.Dispatch<React.SetStateAction<CommissionFilterDto>>;
  onCalculate: () => void;
  loading: boolean;
}

const FilterForm: React.FC<FilterFormProps> = ({
  filter,
  setFilter,
  onCalculate,
  loading,
}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha Inicio
          </label>
          <input
            type="date"
            value={filter.startDate}
            onChange={(e) =>
              setFilter({ ...filter, startDate: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fecha Fin
          </label>
          <input
            type="date"
            value={filter.endDate}
            onChange={(e) => setFilter({ ...filter, endDate: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-end">
          <button
            onClick={onCalculate}
            disabled={loading}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Calculando..." : "Calcular"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
