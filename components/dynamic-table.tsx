import type { TableColumn, TableRow } from "@/lib/data-types"
import { Badge } from "@/components/ui/badge"

interface DynamicTableProps {
  columns: TableColumn[]
  data: TableRow[]
}

export function DynamicTable({ columns, data }: DynamicTableProps) {
  const formatCellValue = (value: string, type: TableColumn["type"]) => {
    switch (type) {
      case "currency":
        if (!value) return "";
        const numericValue = Number(value);
        if (isNaN(numericValue)) return ""
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "PHP",
        }).format(numericValue)

      case "date":
        if (!value) return "";
        return new Date(value).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })

      case "badge":
        const getBadgeVariant = (value: string) => {
          const lowerValue = value.toLowerCase()
          if (lowerValue === "insurance" || lowerValue === "trust" || lowerValue === "receivable") {
            return "secondary"
          }
          if (lowerValue === "loan" || lowerValue === "rent" || lowerValue === "subscription") {
            return "destructive"
          }
          return "default"
        }

        return (
          <Badge variant={getBadgeVariant(value)} className="text-xs font-bold">
            {value.toUpperCase()}
          </Badge>
        )

      default:
        return value
    }
  }

  const calculateColumnTotal = (columnKey: string, columnType: TableColumn["type"]) => {
    if (columnType !== "currency") return null

    const total = data.reduce((sum, row) => {
      const rawValue = row[columnKey]
      const value = typeof rawValue === "string" ? parseFloat(rawValue) : rawValue
      return sum + (isNaN(value) ? 0 : value)
    }, 0)

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PHP",
    }).format(total)
  }

  return (
    <div className="overflow-x-auto bg-neutral-900">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900">
            {columns.map((column) => (
              <th key={column.key} className={`text-left py-4 px-4 font-semibold text-secondary ${column.width || ""}`}>
                {column.label.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-b border-neutral-800 hover:bg-neutral-800 transition-colors">
              {columns.map((column) => (
                <td key={column.key} className={`py-4 px-4 text-neutral-200 ${column.width || ""}`}>
                  {formatCellValue(row[column.key], column.type)}
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t-2 border-neutral-600 bg-neutral-800 font-semibold">
            {columns.map((column, index) => (
              <td key={column.key} className={`py-4 px-4 text-neutral-100 ${column.width || ""}`}>
                {index === 0 ? "Total" : calculateColumnTotal(column.key, column.type) || ""}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}
