import { Wheat, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="border-t bg-background px-6 py-12 mt-16">
      
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">

        {/* ABOUT SECTION */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Wheat />
            <span className="font-semibold text-xl">Qurbani Hat</span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            A trusted livestock marketplace where you can explore healthy animals
            for Qurbani, compare prices, and book safely with confidence.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-3">Contact Info</h3>

          <div className="space-y-2 text-sm text-muted-foreground">
            
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              support@qurbanihat.com
            </p>

            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +880 1234-567890
            </p>

            <p className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Dhaka, Bangladesh
            </p>

          </div>
        </div>

        {/* SOCIAL LINKS */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="#" className="hover:underline text-muted-foreground">
              Facebook
            </Link>
            <Link href="#" className="hover:underline text-muted-foreground">
              Instagram
            </Link>
            <Link href="#" className="hover:underline text-muted-foreground">
              Twitter (X)
            </Link>
          </div>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
        Copyright © {new Date().getFullYear()} Qurbani Hat. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;