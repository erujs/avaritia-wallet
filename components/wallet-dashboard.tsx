"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DynamicTable } from "./dynamic-table"
import { tableConfigs } from "@/constants/table-config"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-6 space-y-6">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-4xl font-bold text-white">Wallet Dashboard</h1>
          <p className="text-gray-400">Manage your finances with dynamic tables</p>
        </div>

        <Accordion type="multiple" className="w-full space-y-4">
          {tableConfigs.map((config) => (
            <AccordionItem
              key={config.id}
              value={config.id}
              className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-700 transition-colors [&[data-state=open]]:bg-gray-700">
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-lg font-semibold text-white">{config.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{config.description}</p>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <DynamicTable columns={config.columns} data={config.data} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-8 bg-gray-800 border border-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold text-white mb-4">How to Add New Tables</h2>

          <div className="space-y-4">
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h4 className="font-medium mb-3 text-white">Adding a new table is easy:</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-gray-300">
                <li>
                  Open the <code className="bg-gray-600 px-2 py-1 rounded text-gray-200">table-config.ts</code> file
                </li>
                <li>
                  Add a new configuration object to the{" "}
                  <code className="bg-gray-600 px-2 py-1 rounded text-gray-200">tableConfigs</code> array
                </li>
                <li>Define your columns with types: text, number, date, currency, or badge</li>
                <li>Add your data array</li>
                <li>The new table will automatically appear as a new accordion section!</li>
              </ol>
            </div>

            <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-800">
              <h4 className="font-medium mb-3 text-blue-200">Supported Column Types:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-blue-300">
                <li>
                  <strong className="text-white">text:</strong> Plain text display
                </li>
                <li>
                  <strong className="text-white">number:</strong> Formatted numbers with commas
                </li>
                <li>
                  <strong className="text-white">date:</strong> Formatted date display
                </li>
                <li>
                  <strong className="text-white">currency:</strong> Formatted as PHP currency
                </li>
                <li>
                  <strong className="text-white">badge:</strong> Colored badges with automatic styling
                </li>
              </ul>
            </div>

            <div className="bg-green-900/20 border border-green-800 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-green-400">Accordion Benefits:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-green-300">
                <li>No responsive issues - stacks vertically on all devices</li>
                <li>Multiple tables can be open simultaneously</li>
                <li>Clean, organized layout that scales infinitely</li>
                <li>Easy to scan and navigate through different financial data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
