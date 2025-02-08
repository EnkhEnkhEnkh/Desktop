import React, { useState } from "react";
import ReportChart from "../components/ReportChart";
import ReportTable from "../components/ReportTable";

const Report: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  const handleTimeRangeChange = (range: "daily" | "weekly" | "monthly") => {
    setTimeRange(range);
  };

  return (
    <div className="bg-gray-500">
      <h1 className="text-2xl font-bold mb-6">Захиалгын тайлан</h1>
      {/* Time Range Selector */}
      <div className="flex space-x-4 mb-6">
        {["daily", "weekly", "monthly"].map((range) => (
          <button
            key={range}
            onClick={() =>
              handleTimeRangeChange(range as "daily" | "weekly" | "monthly")
            }
            className={`px-4 py-2 rounded ${
              timeRange === range
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </button>
        ))}
      </div>
      {/* Graph and Table */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-4">Reservation Chart</h2>
          <ReportChart timeRange={timeRange} />
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-semibold mb-4">Reservation List</h2>
          <ReportTable timeRange={timeRange} />
        </div>
      </div>{" "}
    </div>
  );
};

export default Report;
