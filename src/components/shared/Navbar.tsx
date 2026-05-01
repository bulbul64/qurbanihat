'use client';

import { SunIcon, User } from 'lucide-react';
import { NavMenu } from '@/components/nav-menu';
import { NavigationSheet } from '@/components/navigation-sheet';
import { Button } from '../ui/button';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/auth/login');
        },
      },
    });
  };

  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LEFT */}
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <Image
              className="h-18 w-18"
              src="/images/logo.jpg"
              alt="Logo"
              width={100}
              height={100}
            />
            <h2 className="text-xl font-semibold">Qurbanihat</h2>
          </div>
          <NavMenu className="hidden md:block" />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <button
                onClick={() => router.push('/auth/dashboard/profile')}
                className="h-10 w-10 rounded-full overflow-hidden border bg-gray-100 flex items-center justify-center hover:opacity-80 transition"
              >
                {user.image ? (
                  <Image
                    src={user.image}
                    alt={user.name || 'User'}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-5 w-5 text-gray-500" />
                )}
              </button>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="px-3 py-1.5 text-sm rounded-md border hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link href="/auth/login">
                <Button className="hidden sm:inline-flex">Login</Button>
              </Link>
              <Link href="/auth/register">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}

          {/* Theme button */}
          <Button size="icon" variant="outline">
            <SunIcon />
          </Button>

          {/* Mobile */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
