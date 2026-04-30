'use client';
import { Button } from '@/components/ui/button';
import React from 'react';
import { toast } from 'sonner';

export default function Form() {
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  toast("Booking successful!");

  e.currentTarget.reset();
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* NAME */}
      <input type="text" placeholder="Your Name" className="w-full border rounded-lg p-3" />

      {/* EMAIL */}
      <input type="email" placeholder="Your Email" className="w-full border rounded-lg p-3" />

      {/* PHONE */}
      <input type="text" placeholder="Phone Number" className="w-full border rounded-lg p-3" />

      {/* ADDRESS */}
      <textarea placeholder="Address" className="w-full border rounded-lg p-3" />

      {/* SUBMIT */}
      <Button
        type="submit"
        className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700"
      >
        Confirm Booking
      </Button>
    </form>
  );
}
