"use client";

import { Button } from "@mui/material";

export default function QuickActions() {
  const actions = ["View At-Risk Students", "Create Campaign", "AI Assessment", "District Report"];

  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

      <div className="grid grid-cols-4 gap-4">
        {actions.map((a) => (
          <Button key={a} variant="contained" color="primary">
            {a}
          </Button>
        ))}
      </div>
    </div>
  );
}
