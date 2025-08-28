"use client"

import AccordionSection from "@/components/accordion-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-6 space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-white">Wallet Dashboard</h1>
        </div>

        <AccordionSection />
      </div>
    </div>
  )
}
