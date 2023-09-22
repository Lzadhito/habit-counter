// app/providers.tsx
'use client';

import { NextUIProvider } from '@nextui-org/react';
import { SessionProvider } from 'next-auth/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SessionProvider>
        <div className="light min-h-screen text-foreground bg-background">{children}</div>
      </SessionProvider>
    </NextUIProvider>
  );
}
