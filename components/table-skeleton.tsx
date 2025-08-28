import { Skeleton } from "@/components/ui/skeleton"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function TableSkeleton() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-6 space-y-6">
        <Accordion type="multiple" className="w-full space-y-4">
          {[1, 2].map((index) => (
            <AccordionItem
              key={index}
              value={`skeleton-${index}`}
              className="bg-neutral-800 overflow-hidden border-b-0"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-neutral-700 transition-colors rounded-none hover:no-underline">
                <div className="flex flex-col items-start text-left w-full">
                  <Skeleton className="h-6 w-48 mb-2 bg-neutral-600" />
                  <Skeleton className="h-4 w-64 bg-neutral-700" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-2 pb-6 bg-neutral-900">
                <div className="space-y-3">
                  <div className="flex space-x-4">
                    <Skeleton className="h-10 w-32 bg-neutral-700" />
                    <Skeleton className="h-10 w-32 bg-neutral-700" />
                    <Skeleton className="h-10 w-32 bg-neutral-700" />
                  </div>
                  {[1, 2, 3, 4].map((row) => (
                    <div key={row} className="flex space-x-4">
                      <Skeleton className="h-8 w-32 bg-neutral-800" />
                      <Skeleton className="h-8 w-32 bg-neutral-800" />
                      <Skeleton className="h-8 w-32 bg-neutral-800" />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}