"use client";

import { useAPI } from "@/hooks/use-api";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { DynamicTable } from "@/components/dynamic-table";
import { TableSkeleton } from "@/components/skeleton";
import type { Wallet } from "@/lib/data-types";

export default function AccordionSection() {
  const API_URL = process.env.NEXT_PUBLIC_GULA_ARCANA_URL || "http://localhost:3000";
  const { data: wallet, error, loading } = useAPI<Wallet[]>(`${API_URL}/api/wallet`);

  if (error) {
    throw new Error(error)
  }

  if (loading || !wallet) {
    return (
      <TableSkeleton />
    );
  }

  return (
    <Accordion type="multiple" className="w-full space-y-4">
      {wallet?.map((section) => (
        <AccordionItem key={section.id} value={section.id} className="bg-neutral-800 overflow-hidden border-b-0">
          <AccordionTrigger className="px-6 py-4 hover:bg-neutral-700 transition-colors [&[data-state=open]]:bg-neutral-700 rounded-none hover:no-underline cursor-pointer">
            <div className="flex flex-col items-start text-left">
              <h3 className="text-lg font-semibold text-secondary">{section.title}</h3>
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
