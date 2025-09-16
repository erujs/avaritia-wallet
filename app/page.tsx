"use client"

import { PiggyBank } from "lucide-react"
import AccordionSection from "@/components/accordion-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-foreground">
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-center">
          <PiggyBank className="h-12 w-12 text-secondary" />
          <h1 className="text-4xl font-bold text-secondary font-sans">
            Wallet Dashboard
          </h1>
        </div>

        <AccordionSection />
      </div>
    </div>
  )
}
