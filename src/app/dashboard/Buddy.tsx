"use client";

import { Button } from "@mui/material";

export default function Buddy() {
  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow flex items-center gap-4">
      <div className="text-4xl">🤖</div>
      <div>
        <h3 className="font-bold">Hi! I'm Buddy 👋</h3>
        <p>Your AI Learning Companion</p>
      </div>
      <Button variant="contained" color="primary" className="ml-auto">
        Ask Buddy
      </Button>
    </div>
  );
}
