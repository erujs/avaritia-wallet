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
        if (!value) return "";
        return new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "PHP",
        }).format(value)

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
          if (lowerValue === "savings") {
            return "default"
          }
          if (lowerValue === "loan") {
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

  const calculateColumnTotal = (columnKey: string, columnType: TableColumn["type"]) => {
    if (columnType !== "currency" && columnType !== "number") return null

    const total = data.reduce((sum, row) => {
      const value = row[columnKey]
      return sum + (typeof value === "number" ? value : 0)
    }, 0)

    return columnType === "currency"
      ? new Intl.NumberFormat("en-US", { style: "currency", currency: "PHP" }).format(total)
      : total.toLocaleString()
  }

  return (
    <div className="overflow-x-auto bg-neutral-900 rounded-lg border border-neutral-800">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-neutral-800 bg-neutral-900">
            {columns.map((column) => (
              <th key={column.key} className={`text-left py-4 px-4 font-semibold text-white ${column.width || ""}`}>
                {column.header}
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
