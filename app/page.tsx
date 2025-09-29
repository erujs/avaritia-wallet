"use client"

import { useTerminal, Terminal } from "@/components/terminal"
import AccordionSection from "@/components/accordion-section"

export default function Page() {
  const terminal = useTerminal()
  const API_URL = process.env.NEXT_PUBLIC_GULA_ARCANA_URL || "http://localhost:3000"

  const endpoint = terminal.verified
    ? `/api/wallet`
    : `${API_URL}/api/wallet`

  return (
    <div className="min-h-screen bg-foreground">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center">
          <h1 className="text-4xl font-bold text-secondary font-sans">
            Wallet Dashboard
          </h1>
        </div>

        {terminal.showSecret && (
          <Terminal
            state={terminal}
            onExit={() => {
              if (!terminal.verified) {
                terminal.reset()
              }
            }}
          />
        )}

        <AccordionSection endpoint={endpoint} />
      </div>
    </div>
  )
}
