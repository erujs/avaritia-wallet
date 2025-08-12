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
    id: "wallet",
    title: "Wallet",
    description: "Personal Wallet",
    columns: [
      { key: "bank", header: "Bank", type: "text", width: "flex-1" },
      { key: "description", header: "Description", type: "text", width: "flex-1" },
      { key: "category", header: "Category", type: "badge", width: "w-24" },
      { key: "type", header: "Type", type: "badge", width: "w-20" },
      { key: "balance", header: "Balance", type: "currency", width: "w-24" },
    ],
    data: [
      {
        bank: "OwnBank Jhassel",
        description: "",
        category: "Savings",
        type: "Debit",
        balance: 1000000,
      },
      {
        bank: "GoTyme Jhassel",
        description: "",
        category: "Savings",
        type: "debit",
        balance: 1000000,
      },
      {
        bank: "Maya Jhassel",
        description: "",
        category: "Savings",
        type: "debit",
        balance: 1000000,
      },
      {
        bank: "UnionDigital Jhassel",
        description: "",
        category: "Savings",
        type: "debit",
        balance: 1000000,
      },
      {
        bank: "BPI Jhassel",
        description: "",
        category: "Savings",
        type: "debit",
        balance: 700000,
      },
      {
        bank: "RCBC",
        description: "",
        category: "Savings",
        type: "debit",
        balance: 100000,
      },
      {
        bank: "UnionBank",
        description: "premier plus peso savings account | former citibank",
        category: "Savings",
        type: "debit",
        balance: 10000,
      },
      {
        bank: "UnionBank",
        description: "payroll debit account | publicis groupe",
        category: "Savings",
        type: "debit",
        balance: 5000,
      },
      {
        bank: "UnionDigital",
        description: "digital savings account | 3 percent interest",
        category: "Savings",
        type: "debit",
        balance: 10000,
      },
      {
        bank: "OwnBank",
        description: "digital savings account | 4 percent interest",
        category: "Savings",
        type: "debit",
        balance: 10000,
      },
      {
        bank: "GoTyme",
        description: "digital savings account | 4 percent interest",
        category: "Savings",
        type: "debit",
        balance: 10000,
      },
      {
        bank: "GoTyme Condo",
        description: "digital savings account | 4 percent interest",
        category: "Savings",
        type: "debit",
        balance: 20000,
      },
      {
        bank: "Maya",
        description: "digital savings account | 3.5 percent interest",
        category: "Savings",
        type: "debit",
        balance: 10000,
      },
      {
        bank: "Gcash",
        description: "mobile wallet and digital payment",
        category: "Savings",
        type: "debit",
        balance: 0,
      },
      {
        bank: "Pagibig Regular Savings",
        description: "Investment",
        category: "Investment",
        type: "Investment",
        balance: 20500,
      },
      {
        bank: "Pagibig MP2",
        description: "Investment",
        category: "Investment",
        type: "Investment",
        balance: 50000,
      },
    ],
  },
  {
    id: "bills",
    title: "Bills",
    description: "Bills Payment",
    columns: [
      { key: "service", header: "service", type: "text", width: "flex-1" },
      { key: "target", header: "Target", type: "currency", width: "w-24" },
      { key: "current", header: "Current", type: "currency", width: "w-24" },
      { key: "progress", header: "Progress", type: "text", width: "w-20" },
      { key: "deadline", header: "Deadline", type: "date", width: "w-32" },
      { key: "status", header: "Status", type: "badge", width: "w-24" },
    ],
    data: [
      {
        service: "rent/association dues",
        target: 10000.0,
        current: 6500.0,
        progress: "65%",
        deadline: "2024-12-31",
        status: "active",
      },
      {
        service: "water/electricity",
        target: 3000.0,
        current: 1200.0,
        progress: "40%",
        deadline: "2024-06-30",
        status: "active",
      },
      {
        service: "bpi house loan",
        target: 2500.0,
        current: 2500.0,
        progress: "100%",
        deadline: "2024-03-15",
        status: "completed",
      },
    ],
  },
]
