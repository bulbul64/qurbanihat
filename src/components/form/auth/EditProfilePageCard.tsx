'use client';

import 'animate.css';

import { ArrowLeft, Camera } from 'lucide-react';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { authClient } from '@/lib/auth-client';
import AuthGuardFallback from './AuthGuardFallback';
import { useState } from 'react';

export default function EditProfilePageCard({ className }: { className?: string }) {
  const { data } = authClient.useSession();
  const [imageFile, setImageFile] = useState<File | null>(null);
  const session = data?.session;
  const user = data?.user;

  const [name, setName] = useState(user?.name || '');

  const imageUrl = imageFile
  ? URL.createObjectURL(imageFile)
  : user?.image;

  const handleSave = async () => {
    const { data, error } = await authClient.updateUser({
      name,
      image: imageUrl,
    });

    if (error) {
      console.log('Update failed:', error);
      return;
    }

    console.log('Updated successfully', data);
  };

  if (!session) {
    return (
      <AuthGuardFallback
        title="Access restricted"
        description="Please sign in to edit your profile information."
      />
    );
  }

  const initials = user?.name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div
      className={cn(
        'min-h-screen bg-muted/30 px-6 py-10 animate__animated animate__fadeIn',
        className,
      )}
    >
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-3xl items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Edit Profile</h1>
          <p className="text-muted-foreground">Update your personal information</p>
        </div>

        <Link href="/auth/dashboard/profile">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
        </Link>
      </div>

      {/* Form Card */}
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm">
        {/* Avatar Section */}
        <div className="mb-8 flex flex-col items-center">
          <div className="relative">
            <Avatar className="h-28 w-28">
              <AvatarImage src={imageFile ? URL.createObjectURL(imageFile) : (user?.image ?? '')} />
              <AvatarFallback className="text-2xl font-semibold">{initials}</AvatarFallback>
            </Avatar>

            {/* Image upload input */}
            <input
              type="file"
              accept="image/*"
              id="imageUpload"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImageFile(file); //
                }
              }}
            />

            {/*  Camera button */}
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 cursor-pointer rounded-full bg-black p-2 text-white shadow-md"
            >
              <Camera className="h-4 w-4" />
            </label>
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            Click camera icon to change profile photo
          </p>
        </div>

        {/* Form Fields */}
        <div className="grid gap-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              id="name"
              defaultValue={user?.name}
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" defaultValue={user?.email} placeholder="Enter your email" disabled />
            <p className="text-xs text-muted-foreground">Email cannot be changed</p>
          </div>

          {/* User ID (read-only info) */}
          <div className="space-y-2">
            <Label>User ID</Label>
            <Input value={user?.id} disabled />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex justify-end gap-3">
          <Link href="/auth/dashboard/profile">
            <Button variant="outline">Cancel</Button>
          </Link>

          <Button onClick={handleSave} className="gap-2">
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
