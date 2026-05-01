
import { DashboardProfile } from '@/components/shared/DashboardProfile';

import React from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Qurbani Hat",
  description:
    "Manage your profile, view your bookings, and track your selected animals in your personal dashboard.",
};
export default function page() {

  return (
    <div className="min-h-screen mt-10 flex  justify-center   ">
      <div>
        <DashboardProfile />
      </div>
    </div>
  );
}
