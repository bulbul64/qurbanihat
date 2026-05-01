'use client';

import { ShieldCheck, Truck, BadgeCheck } from 'lucide-react';

export default function About() {
  return (
    <section className="w-full px-6 py-16 bg-white dark:bg-zinc-900">
      
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">
          About Qurbani Hat
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          A trusted livestock marketplace designed to help you find healthy,
          verified animals for Qurbani with ease, transparency, and confidence.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-3">
        
        {/* Card 1 */}
        <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-800 hover:shadow-md transition">
          <ShieldCheck className="h-10 w-10 text-emerald-500" />
          <h3 className="mt-4 text-lg font-semibold">
            Verified Healthy Animals
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Every animal is listed with proper details like age, weight, and
            health condition to ensure safe Qurbani selection.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-800 hover:shadow-md transition">
          <Truck className="h-10 w-10 text-blue-500" />
          <h3 className="mt-4 text-lg font-semibold">
            Easy Booking & Access
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Browse animals, compare prices, and book your preferred livestock
            easily with a simple and fast interface.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 rounded-2xl border bg-zinc-50 dark:bg-zinc-800 hover:shadow-md transition">
          <BadgeCheck className="h-10 w-10 text-purple-500" />
          <h3 className="mt-4 text-lg font-semibold">
            Trusted Marketplace
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Built for reliability and transparency so users can confidently
            choose animals without confusion or risk.
          </p>
        </div>

      </div>
    </section>
  );
}