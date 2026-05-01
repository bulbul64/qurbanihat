'use client';

import { Pencil } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { authClient } from '@/lib/auth-client';
import AuthGuardFallback from '../form/auth/AuthGuardFallback';

const DashboardProfile = ({ className }: { className?: string }) => {
  const { data: session } = authClient.useSession();

  if (!session) {
    return (
      <AuthGuardFallback
        title="Access restricted"
        description="Please sign in to view your profile information."
      />
    );
  }

  const user = session.user;

  const initials = user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className={cn('space-y-6', className)}>
      {/* Page Header */}
      <div className="mx-auto mb-8 max-w-5xl">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="text-muted-foreground">
          Manage your personal information and account identity
        </p>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
        
        {/* LEFT SIDE - PROFILE HERO */}
        <div className="rounded-2xl bg-white p-8 shadow-sm md:col-span-1">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-32 w-32">
              <AvatarImage src={user?.image ?? ''} alt={user?.name ?? ''} />
              <AvatarFallback className="text-3xl font-semibold">
                {initials}
              </AvatarFallback>
            </Avatar>

            <h2 className="mt-4 text-xl font-semibold">{user?.name}</h2>
            <p className="text-sm text-muted-foreground">{user?.email}</p>

            {/* Edit Button */}
            <Link href="/auth/dashboard/profile/edit" className="mt-6 w-full">
              <Button className="w-full gap-2">
                <Pencil className="h-4 w-4" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="space-y-6 md:col-span-2">
          
          {/* Info Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Account Details</h3>

            <div className="grid gap-4">
              <div>
                <p className="text-sm text-muted-foreground">Full Name</p>
                <p className="text-base font-medium">{user?.name}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">Email Address</p>
                <p className="text-base">{user?.email}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground">User ID</p>
                <p className="text-xs text-muted-foreground break-all">
                  {user?.id}
                </p>
              </div>
            </div>
          </div>

          {/* Status Card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Account Status</h3>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Email Verification
              </span>

              <span
                className={cn(
                  'rounded-full px-3 py-1 text-xs font-medium',
                  user?.emailVerified
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-600'
                )}
              >
                {user?.emailVerified ? 'Verified' : 'Not Verified'}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export { DashboardProfile };