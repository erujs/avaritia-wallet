"use client";

import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="bg-foreground text-secondary">
      <div className="container mx-auto space-y-12">
        {Array.from({ length: 1 }).map((_, sectionIndex) => (
          <div key={sectionIndex} className="space-y-6 bg-neutral-700">
            {/* Section header */}
            <div className="flex flex-col items-start text-left px-6 pt-6">
              <Skeleton className="h-6 w-48 mb-2" />
              <Skeleton className="h-4 w-64" />
            </div>

            {/* Table */}
            <div className="overflow-x-auto bg-neutral-900 px-2 pb-6">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-neutral-800 bg-neutral-900">
                    {Array.from({ length: 2 }).map((_, colIndex) => (
                      <th key={colIndex} className="py-4 px-4 text-left">
                        <Skeleton className="h-4 w-20" />
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="border-b border-neutral-800 hover:bg-neutral-800 transition-colors"
                    >
                      {Array.from({ length: 2 }).map((_, colIndex) => (
                        <td key={colIndex} className="py-4 px-4">
                          <Skeleton className="h-4 w-24" />
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Total row */}
                  <tr className="border-t-2 border-neutral-600 bg-neutral-800 font-semibold">
                    {Array.from({ length: 2 }).map((_, colIndex) => (
                      <td key={colIndex} className="py-4 px-4">
                        <Skeleton className="h-4 w-16" />
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
