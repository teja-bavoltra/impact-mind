"use client";

export default function RiskDistribution() {
  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Risk Distribution</h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between text-sm">
            <span>Low Risk</span>
            <span>65%</span>
          </div>
          <div className="h-3 bg-green-300 rounded"></div>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <span>Medium Risk</span>
            <span>25%</span>
          </div>
          <div className="h-3 bg-yellow-300 rounded"></div>
        </div>

        <div>
          <div className="flex justify-between text-sm">
            <span>High Risk</span>
            <span>10%</span>
          </div>
          <div className="h-3 bg-red-300 rounded"></div>
        </div>
      </div>
    </div>
  );
}
