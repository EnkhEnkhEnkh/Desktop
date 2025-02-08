import React from "react";

interface ReportTableProps {
  timeRange: "daily" | "weekly" | "monthly";
}

const ReportTable: React.FC<ReportTableProps> = ({ timeRange }) => {
  // Dummy Data
  const reservations =
    timeRange === "daily"
      ? [
          { type: "Standard Table", count: 5 },
          { type: "VIP Room", count: 2 },
        ]
      : timeRange === "weekly"
      ? [
          { type: "Standard Table", count: 30 },
          { type: "VIP Room", count: 10 },
        ]
      : [
          { type: "Standard Table", count: 120 },
          { type: "VIP Room", count: 50 },
        ];

  return (
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Type</th>
          <th className="p-2">Count</th>
        </tr>
      </thead>
      <tbody>
        {reservations.map((reservation, index) => (
          <tr key={index} className="border-t">
            <td className="p-2">{reservation.type}</td>
            <td className="p-2">{reservation.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;
