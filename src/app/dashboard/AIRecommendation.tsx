"use client";

import { Card, CardContent, Typography } from "@mui/material";

export default function AIRecommendations() {
  const recs = [
    { label: "Math Intervention", count: 320 },
    { label: "Reading Intervention", count: 180 },
    { label: "Science Intervention", count: 95 },
  ];

  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">AI Recommendations</h2>

      <div className="grid grid-cols-3 gap-4">
        {recs.map((r) => (
          <Card key={r.label} className="shadow-sm bg-[#F5F6FA]">
            <CardContent>
              <Typography variant="subtitle1" className="font-semibold">
                {r.label}
              </Typography>
              <Typography variant="h4" className="font-bold">
                {r.count}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
