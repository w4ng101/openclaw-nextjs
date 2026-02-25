export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 px-4">
      <main className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          OpenClaw
        </h1>
        <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
          The AI that actually does things. A self-hosted AI automation
          framework for developers and power users.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://docs.openclaw.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Started
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800"
            href="https://openclaws.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}

