'use client';

import AuthGuardFallback from '@/components/form/auth/AuthGuardFallback';
import { DashboardProfile } from '@/components/shared/DashboardProfile';

import { authClient } from '@/lib/auth-client';
import React from 'react';

export default function page() {
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <AuthGuardFallback
        title="You're not signed in"
        description="Please log in to access your dashboard, manage your profile, and continue where you left off."
      />
    );
  }

  return (
    <div className="min-h-screen mt-10 flex  justify-center   ">
      <div>
        <DashboardProfile />
      </div>
    </div>
  );
}
