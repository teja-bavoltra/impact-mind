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

export default function ActiveCampaigns() {
  const rows = [
    ["Algebra Recovery", "Allen High", "Math", "45", "In Progress", "65%"],
    ["Reading Fluency Boost", "McKinney North", "English", "38", "In Progress", "52%"],
    ["Science Concept Mastery", "Frisco Liberty", "Science", "32", "In Progress", "45%"],
  ];

  return (
    <div className="bg-[#F5F6FA] p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Active Campaigns</h2>

      <TableContainer component={Paper} className="bg-[#F5F6FA]">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Campaign</TableCell>
              <TableCell>School</TableCell>
              <TableCell>Subject</TableCell>
              <TableCell>Students</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
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
