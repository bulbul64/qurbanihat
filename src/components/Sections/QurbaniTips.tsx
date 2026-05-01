'use client';

import { ShieldCheck, HeartHandshake, Scale } from 'lucide-react';

export default function QurbaniTips() {
  const tips = [
    {
      icon: ShieldCheck,
      title: 'Health Check',
      desc: 'Always choose healthy and active animals for Qurbani.',
    },
    {
      icon: Scale,
      title: 'Proper Weight',
      desc: 'Ensure the animal meets minimum weight standards.',
    },
    {
      icon: HeartHandshake,
      title: 'Ethical Buying',
      desc: 'Buy from trusted sellers for safe transactions.',
    },
  ];

  return (
    <section className="mt-16 px-6">
      <h2 className="text-2xl font-semibold mb-6">Qurbani Tips</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {tips.map((tip, i) => {
          const Icon = tip.icon;
          return (
            <div
              key={i}
              className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <Icon className="w-8 h-8 text-emerald-600" />
              <h3 className="mt-4 text-lg font-semibold">{tip.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">
                {tip.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}