"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  TableContainer,
} from "@mui/material";

export default function SchoolPerformance() {
  const rows = [
    ["Allen High School", "2,980", "265 (8.9%)", "14", "+12%"],
    ["McKinney North High", "3,420", "412 (12.1%)", "18", "+9%"],
    ["Frisco Liberty High", "2,680", "315 (11.7%)", "10", "+15%"],
  ];

  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">School Performance</h2>

      <TableContainer component={Paper} className="bg-[#F5F6FA]">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>School</TableCell>
              <TableCell>Students</TableCell>
              <TableCell>High Risk</TableCell>
              <TableCell>Campaigns</TableCell>
              <TableCell>Trend</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((r, i) => (
              <TableRow key={i}>
                {r.map((cell) => (
                  <TableCell key={cell}>{cell}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
