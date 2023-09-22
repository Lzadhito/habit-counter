import AppBar from './components/AppBar';
import { redirect } from 'next/navigation';
import StartCountingButton from './components/StartCountingButton';
import { getServerSession } from 'next-auth';

export default async function LandingPage() {
  const session = await getServerSession();
  if (session?.user) redirect('/home');

  return (
    <>
      <AppBar className="absolute top-0" />
      <main className="flex flex-col gap-4 items-center justify-center h-screen overflow-hidden polka px-4 opacity-80">
        <div className="text-center leading-8 md:leading-10 h-fit">
          <div className="inline-block">
            <h1 className="tracking-tight inline font-semibold text-[2.5rem] lg:text-5xl">
              Count how far you&apos;ve been to be&nbsp;
            </h1>
            <h1 className="tracking-tight inline font-semibold from-[#5EA2EF] to-[#0072F5] text-[2.5rem] lg:text-5xl bg-clip-text text-transparent bg-gradient-to-b">
              Your Better Self&nbsp;
            </h1>
          </div>
        </div>
        <StartCountingButton />
      </main>
    </>
  );
}
