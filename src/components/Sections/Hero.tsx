'use client';

import 'animate.css';

import { ArrowUpRight, CirclePlay } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex items-center justify-center px-6 py-12">
      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <div className="animate__animated animate__fadeInDown">
            <Badge asChild className="rounded-full border-border py-1" variant="secondary">
              <Link href="#">
                Trusted Qurbani Livestock Platform <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </Badge>
          </div>

          {/* Title */}
          <h1 className="mt-6 max-w-[17ch] font-medium text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] animate__animated animate__fadeInUp">
            Your trusted
            <br /> Qurbani livestock marketplace
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal animate__animated animate__fadeInUp animate__delay-1s">
            Find healthy and verified cows, goats, and other livestock for Qurbani at fair prices.
            Compare, explore, and book your preferred animal with ease and confidence.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center gap-4 sm:mt-12 animate__animated animate__fadeInUp animate__delay-2s">

            <Link href="/animals">
              <Button className="rounded-full text-base" size="lg">
                Browse Animals <ArrowUpRight className="h-5! w-5!" />
              </Button>
            </Link>

            <Button
              className="rounded-full text-base shadow-none"
              size="lg"
              variant="outline"
            >
              <CirclePlay className="h-5! w-5!" /> How it works
            </Button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="mt-auto aspect-video w-full rounded-xl bg-accent animate__animated animate__zoomIn">
          <Image
            className="rounded-xl w-full"
            src="/images/qurbani.webp"
            alt="hero"
            width={500}
            height={500}
          />
        </div>

      </div>
    </div>
  );
}