import { useCommissionFilter } from "../hooks/useCommissionFilter";
import { useCommissions } from "../hooks/useCommissions";
import FilterForm from "./FilterForm";
import ResultsTable from "./ResultsTable";

export default function CommissionsTab() {
  const { filter, setFilter } = useCommissionFilter();
  const { commissions, loading, error, calculateCommissions } =
    useCommissions(filter);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Cálculo de Comisiones
        </h2>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <FilterForm
          filter={filter}
          setFilter={setFilter}
          onCalculate={calculateCommissions}
          loading={loading}
        />

        <ResultsTable commissions={commissions} loading={loading} />
      </div>
    </div>
  );
}
