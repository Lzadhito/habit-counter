'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@nextui-org/button';

export default function StartCountingButton() {
  async function handleSignIn() {
    await signIn('google', {
      callbackUrl: '/home',
    });
  }

  return (
    <Button size="lg" color="primary" variant="shadow" onClick={handleSignIn}>
      Start Counting
    </Button>
  );
}
