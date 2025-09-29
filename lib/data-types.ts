export interface TableColumn {
  key: string
  label: string
  type: "text" | "date" | "currency" | "badge"
  width?: string
}

export interface TableRow {
  [key: string]: string
}

export interface Wallet {
  id: string
  title: string
  description: string
  columns: TableColumn[]
  data: TableRow[]
}

export interface AccordionSectionProps {
  endpoint: string
}
