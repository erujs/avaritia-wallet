"use client";

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DynamicTable } from "@/components/dynamic-table";
import { TableSkeleton } from "@/components/table-skeleton";
import type { TableSection } from "@/lib/table-types";

export default function AccordionSection() {
  const [tableSections, setTableSections] = useState<TableSection[]>([]);
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null);
  const API_URL = process.env.NEXT_PUBLIC_GULA_ARCANA_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}/api/wallet`)

        if (!response.ok) {
          throw new Error(`Failed to fetch wallet (${response.status})`)
        }
        const data = await response.json()
        setTableSections(data)
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <TableSkeleton />
  }

  if (error) {
    throw error
  }

  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {tableSections.map((section) => (
        <AccordionItem key={section.id} value={section.id} className="bg-neutral-800 overflow-hidden border-b-0">
          <AccordionTrigger className="px-6 py-4 hover:bg-neutral-700 transition-colors [&[data-state=open]]:bg-neutral-700 rounded-none hover:no-underline">
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">{section.description}</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-2 pb-6 bg-neutral-900">
            <DynamicTable columns={section.columns} data={section.data} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
