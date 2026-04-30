'use client';
import { SunIcon } from 'lucide-react';
import { Logo } from '@/components/logo';
import { NavMenu } from '@/components/nav-menu';
import { NavigationSheet } from '@/components/navigation-sheet';
import { Button } from '../ui/button';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const Navbar = () => {

const { data } = authClient.useSession();

const user = data?.user
const session = data?.session

console.log( user, session)
  const router = useRouter();
const handleLogout = async () => {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        router.push("/auth/login");
      },
    },
  });
};
  
  return (
    <nav className="h-16 border-b bg-background">
      <div className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-12">
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className="hidden md:block" />
        </div>

        <div className="flex items-center gap-3">

       {user ? (
            
          
            <>

            <Button onClick={() => router.push("/auth/dashboard")} className="hidden sm:inline-flex">
              Dashboard
            </Button>
            <Button onClick={handleLogout} className="hidden sm:inline-flex" variant="outline">
              Logout
            </Button>
            
            </>
         
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
          

          <Button size="icon" variant="outline">
            <SunIcon />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
