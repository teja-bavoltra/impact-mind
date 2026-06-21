"use client";

import Sidebar from "./Sidebar";
import Header from "./Header";
import KPICards from "./KpiCards";
import RiskDistribution from "./RiskDistribution";
import AIRecommendations from "./AIRecommendation";
import SchoolPerformance from "./SchoolPerformance";
import ActiveCampaigns from "./ActiveCampaigns";
import TutorEffectiveness from "./TutorEffectiveness";
import QuickActions from "./QuickActions";
import Buddy from "./Buddy";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        <Header />
        <KPICards />
        <RiskDistribution />
        <AIRecommendations />
        <SchoolPerformance />
        <ActiveCampaigns />
        <TutorEffectiveness />
        <QuickActions />
        <Buddy />
      </main>
    </div>
  );
}
