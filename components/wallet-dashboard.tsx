"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DynamicTable } from "./dynamic-table"
import { tableConfigs } from "@/constants/table-config"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-6 space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-white">Wallet Dashboard</h1>
        </div>

        <Accordion type="multiple" className="w-full space-y-4">
          {tableConfigs.map((config) => (
            <AccordionItem
              key={config.id}
              value={config.id}
              className="bg-neutral-800 rounded-lg overflow-hidden border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-neutral-700 transition-colors [&[data-state=open]]:bg-neutral-700">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-semibold text-white">{config.title}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{config.description}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <DynamicTable columns={config.columns} data={config.data} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
