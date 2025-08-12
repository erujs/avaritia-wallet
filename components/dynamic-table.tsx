import type { TableColumn, TableData } from "@/constants/table-config"
import { Badge } from "@/components/ui/badge"

interface DynamicTableProps {
  columns: TableColumn[]
  data: TableData[]
}

export function DynamicTable({ columns, data }: DynamicTableProps) {
  const formatCellValue = (value: any, type: TableColumn["type"]) => {
    switch (type) {
      case "currency":
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "PHP",
        }).format(value)

      case "badge":
        const getBadgeVariant = (value: string) => {
          const lowerValue = value.toLowerCase()
          if (
            lowerValue === "credit" ||
            lowerValue === "income" ||
            lowerValue === "completed" ||
            lowerValue === "active" ||
            lowerValue === "paid" ||
            lowerValue === "good" ||
            lowerValue === "yes" ||
            lowerValue === "salary" ||
            lowerValue === "stable"
          ) {
            return "default"
          }
          if (lowerValue === "debit" || lowerValue === "over" || lowerValue === "pending" || lowerValue === "no") {
            return "destructive"
          }
          return "secondary"
        }

        return (
          <Badge variant={getBadgeVariant(value)} className="text-xs">
            {value}
          </Badge>
        )

      case "number":
        return typeof value === "number" ? value.toLocaleString() : value

      default:
        return value
    }
  }

  return (
    <div className="overflow-x-auto bg-gray-900 rounded-lg border border-gray-800">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-800 bg-gray-900">
            {columns.map((column) => (
              <th key={column.key} className={`text-left py-4 px-4 font-semibold text-white ${column.width || ""}`}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-gray-800 hover:bg-gray-800 transition-colors">
              {columns.map((column) => (
                <td key={column.key} className={`py-4 px-4 text-gray-200 ${column.width || ""}`}>
                  {formatCellValue(row[column.key], column.type)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
