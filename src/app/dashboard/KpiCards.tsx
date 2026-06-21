"use client";

import { Card, CardContent, Typography } from "@mui/material";

export default function KPICards() {
  const cards = [
    { label: "Total Students", value: "24,580", change: "+4.7%" },
    { label: "High Risk Students", value: "2,145", change: "-6.3%" },
    { label: "Active Campaigns", value: "128", change: "+8.1%" },
    { label: "Tutor Sessions", value: "1,240", change: "+12.5%" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((c) => (
        <Card key={c.label} className="shadow-sm bg-[#F5F6FA]">
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {c.label}
            </Typography>
            <Typography variant="h5" className="font-bold">
              {c.value}
            </Typography>
            <Typography
              variant="body2"
              className={c.change.startsWith("-") ? "text-red-600" : "text-green-600"}
            >
              {c.change}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
