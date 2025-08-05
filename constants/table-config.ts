export interface TableColumn {
  key: string
  header: string
  type: "text" | "number" | "date" | "currency" | "badge"
  width?: string
}

export interface TableData {
  [key: string]: any
}

export interface TableConfig {
  id: string
  title: string
  description: string
  columns: TableColumn[]
  data: TableData[]
}

export const tableConfigs: TableConfig[] = [
  {
    id: "wallet-transactions",
    title: "Wallet Transactions",
    description: "Track your income and expenses",
    columns: [
      { key: "id", header: "ID", type: "text", width: "w-16" },
      { key: "date", header: "Date", type: "date", width: "w-32" },
      { key: "description", header: "Description", type: "text", width: "flex-1" },
      { key: "category", header: "Category", type: "badge", width: "w-24" },
      { key: "type", header: "Type", type: "badge", width: "w-20" },
      { key: "amount", header: "Amount", type: "currency", width: "w-24" },
      { key: "balance", header: "Balance", type: "currency", width: "w-24" },
    ],
    data: [
      {
        id: "TXN001",
        date: "2024-01-15",
        description: "Salary Payment",
        category: "Income",
        type: "credit",
        amount: 5000.0,
        balance: 5000.0,
      },
      {
        id: "TXN002",
        date: "2024-01-16",
        description: "Grocery Shopping",
        category: "Food",
        type: "debit",
        amount: -120.5,
        balance: 4879.5,
      },
      {
        id: "TXN003",
        date: "2024-01-17",
        description: "Gas Station",
        category: "Transport",
        type: "debit",
        amount: -45.0,
        balance: 4834.5,
      },
      {
        id: "TXN004",
        date: "2024-01-18",
        description: "Freelance Project",
        category: "Income",
        type: "credit",
        amount: 800.0,
        balance: 5634.5,
      },
      {
        id: "TXN005",
        date: "2024-01-19",
        description: "Netflix Subscription",
        category: "Entertainment",
        type: "debit",
        amount: -15.99,
        balance: 5618.51,
      },
    ],
  },
  {
    id: "savings-goals",
    title: "Savings Goals",
    description: "Track your savings progress",
    columns: [
      { key: "goal", header: "Goal", type: "text", width: "flex-1" },
      { key: "target", header: "Target", type: "currency", width: "w-24" },
      { key: "current", header: "Current", type: "currency", width: "w-24" },
      { key: "progress", header: "Progress", type: "text", width: "w-20" },
      { key: "deadline", header: "Deadline", type: "date", width: "w-32" },
      { key: "status", header: "Status", type: "badge", width: "w-24" },
    ],
    data: [
      {
        goal: "Emergency Fund",
        target: 10000.0,
        current: 6500.0,
        progress: "65%",
        deadline: "2024-12-31",
        status: "active",
      },
      {
        goal: "Vacation Fund",
        target: 3000.0,
        current: 1200.0,
        progress: "40%",
        deadline: "2024-06-30",
        status: "active",
      },
      {
        goal: "New Laptop",
        target: 2500.0,
        current: 2500.0,
        progress: "100%",
        deadline: "2024-03-15",
        status: "completed",
      },
    ],
  },
]
