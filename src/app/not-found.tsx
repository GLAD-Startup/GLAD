import React from 'react';
import type { Metadata } from 'next';
import NotFoundClient from '@/components/sections/NotFoundClient';

export const metadata: Metadata = {
  title: '404 — Page Not Found — GLAD Studio',
  description:
    'The requested coordinates could not be found. Re-route your navigation to GLAD Studio work, services, or products.',
};

export default function NotFound() {
  return <NotFoundClient />;
}
