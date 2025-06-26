import React from "react";
import type { CommissionResult } from "../services/api";

interface ResultsTableProps {
  commissions: CommissionResult[];
  loading: boolean;
}

const ResultsTable: React.FC<ResultsTableProps> = ({
  commissions,
  loading,
}) => {
  return (
    <div className="overflow-x-auto">
      {commissions.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            'No hay datos para mostrar. Haz clic en "Calcular" para generar el reporte.'
          )}
        </div>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <thead className="bg-gray-50">
            <tr className="text-center">
              <th className="px-6 py-3">Vendedor</th>
              <th className="px-6 py-3">Fecha Venta</th>
              <th className="px-6 py-3">Total Ventas</th>
              <th className="px-6 py-3">Comisión</th>
              <th className="px-6 py-3">% Comisión</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {commissions.map((commission) => (
              <tr key={commission.saleId} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                  {commission.sellerName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  {new Date(commission.saleDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  ${(commission.amount || 0).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-smfont-semibold text-red-600 text-center">
                  ${(commission.commission || 0).toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                  {(commission.percentage * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ResultsTable;
