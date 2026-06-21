"use client";

import { Card, CardContent, Typography } from "@mui/material";

export default function TutorEffectiveness() {
  const stats = [
    ["Average Tutor Rating", "4.7 / 5"],
    ["Success Rate", "78%"],
    ["Avg Student Improvement", "62%"],
  ];

  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Tutor Effectiveness Overview</h2>

      <div className="grid grid-cols-3 gap-4">
        {stats.map(([label, value]) => (
          <Card key={label} className="shadow-sm bg-[#F5F6FA]">
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {label}
              </Typography>
              <Typography variant="h5" className="font-bold">
                {value}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
