"use client"

import Image from "next/image"

export default function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-foreground text-secondary">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex items-center gap-4">
          <div className="text-6xl font-bold text-red-500">{error.name}</div>
          <div className="w-px h-16 bg-neutral-600"></div>
          <Image className="invert" src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-2xl font-semibold text-red-400">Something went wrong</h1>
          <p className="font-mono text-sm/6 ext-neutral-300 max-w-md">{error.message}</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            onClick={() => reset()}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-red-600 text-secondary gap-2 hover:bg-red-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto cursor-pointer"
          >
            Try Again
          </button>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-neutral-500">
        <span className="text-sm">Error occurred at {new Date().toLocaleTimeString()}</span>
      </footer>
    </div>
  )
}
