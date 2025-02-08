import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.js бүртгэл
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

interface ReportChartProps {
  timeRange: "daily" | "weekly" | "monthly";
}

const ReportChart: React.FC<ReportChartProps> = ({ timeRange }) => {
  // Dummy Data
  const data = {
    labels: ["Standard Table", "VIP Room"],
    datasets: [
      {
        label: "Reservations",
        data:
          timeRange === "daily"
            ? [5, 2]
            : timeRange === "weekly"
            ? [30, 10]
            : [120, 50],
        backgroundColor: ["#4CAF50", "#FF9800"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Reservations Report (${timeRange})`,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ReportChart;
