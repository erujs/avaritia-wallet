export interface TableColumn {
  key: string
  header: string
  type: "text" | "date" | "currency" | "badge"
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
    description: "Savings and available funds",
    columns: [
      { key: "bank", header: "Bank", type: "text", width: "flex-1" },
      { key: "description", header: "Description", type: "text", width: "flex-1" },
      { key: "type", header: "Type", type: "badge", width: "w-20" },
      { key: "balance", header: "Balance", type: "currency", width: "w-24" },
    ],
    data: [
      {
        bank: "OwnBank Jhassel",
        description: "",
        type: "Savings",
        balance: "1000000",
      },
      {
        bank: "GoTyme Jhassel",
        description: "",
        type: "Savings",
        balance: "1000000",
      },
      {
        bank: "Maya Jhassel",
        description: "",
        type: "Savings",
        balance: "1000000",
      },
      {
        bank: "UnionDigital Jhassel",
        description: "",
        type: "Savings",
        balance: "1000000",
      },
      {
        bank: "BPI Jhassel",
        description: "",
        type: "Savings",
        balance: "1000000",
      },
      {
        bank: "RCBC",
        description: "",
        type: "Savings",
        balance: "100000",
      },
      {
        bank: "UnionBank",
        description: "premier plus peso savings account | former citibank",
        type: "Savings",
        balance: "10000",
      },
      {
        bank: "UnionBank",
        description: "payroll debit account | publicis groupe",
        type: "Savings",
        balance: "",
      },
      {
        bank: "UnionDigital",
        description: "digital savings account | 3 percent interest",
        type: "Savings",
        balance: "10000",
      },
      {
        bank: "OwnBank",
        description: "digital savings account | 4 percent interest",
        type: "Savings",
        balance: "10000",
      },
      {
        bank: "GoTyme",
        description: "digital savings account | 4 percent interest",
        type: "Savings",
        balance: "10000",
      },
      {
        bank: "Maya",
        description: "digital savings account | 3.5 percent interest",
        type: "Savings",
        balance: "10000",
      },
      {
        bank: "Gcash",
        description: "mobile wallet and digital payment",
        type: "Savings",
        balance: "",
      },
      {
        bank: "Pagibig Regular Savings",
        description: "",
        type: "Investment",
        balance: "20500",
      },
      {
        bank: "Pagibig MP2",
        description: "",
        type: "Investment",
        balance: "50000",
      },
      {
        bank: "PRUlink Managed Fund",
        description: "",
        type: "Investment",
        balance: "45000",
      },
    ],
  },
  {
    id: "bills",
    title: "Bills",
    description: "Recurring bills and payments",
    columns: [
      { key: "service", header: "Service", type: "text", width: "flex-1" },
      { key: "remarks", header: "Remarks", type: "text", width: "flex-1" },
      { key: "type", header: "Type", type: "badge", width: "w-20" },
      { key: "target", header: "Target", type: "currency", width: "w-24" },
      { key: "current", header: "Current", type: "currency", width: "w-24" },
      { key: "startdate", header: "Start Date", type: "date", width: "w-32" },
      { key: "enddate", header: "End Date", type: "date", width: "w-32" },
    ],
    data: [
      {
        service: "House Rent",
        remarks: "60k for advance/deposit",
        type: "Rent",
        target: "",
        current: "20000",
        startdate: "2023-11-18",
        enddate: "",
      },
      {
        service: "Water & Electricity",
        remarks: "Estimated Amount",
        type: "Rent",
        target: "",
        current: "5000",
        startdate: "2023-11-18",
        enddate: "",
      },
      {
        service: "Condo Utilities & Rental Assoc. Dues",
        remarks: "7671.01 Condo Utils Funds + 600 Assoc. Dues",
        type: "Rent",
        target: "",
        current: "8271.01",
        startdate: "",
        enddate: "",
      },
      {
        service: "Youtube Premium",
        remarks: "",
        type: "Subscription",
        target: "",
        current: "424.48",
        startdate: "",
        enddate: "",
      },
      {
        service: "Netflix",
        remarks: "",
        type: "Subscription",
        target: "",
        current: "279",
        startdate: "",
        enddate: "",
      },
      {
        service: "Google Domains",
        remarks: "paid per year",
        type: "Subscription",
        target: "",
        current: "1200",
        startdate: "2023-01-17",
        enddate: "",
      },
      {
        service: "Food Panda Pro",
        remarks: "paid per year",
        type: "Subscription",
        target: "",
        current: "399",
        startdate: "2024-02-02",
        enddate: "",
      },
      {
        service: "PruLife VUL",
        remarks: "",
        type: "Insurance",
        target: "",
        current: "4000.09",
        startdate: "2021-05-30",
        enddate: "",
      },
      {
        service: "BPI House Loan",
        remarks: "",
        type: "Loan",
        target: "2737976.29",
        current: "22328.99",
        startdate: "2024-11-29",
        enddate: "2044-10-29",
      },
      {
        service: "RCBC Car Loan",
        remarks: "",
        type: "Loan",
        target: "564000",
        current: "12042",
        startdate: "2023-11-06",
        enddate: "2028-10-06",
      },
      {
        service: "RCBC Personal Loan",
        remarks: "personal loan 36 months | 203942.12",
        type: "Loan",
        target: "174000",
        current: "5666.27",
        startdate: "2025-01-09",
        enddate: "2028-01-09",
      },
    ],
  },
  {
    id: "ledger",
    title: "Financial Ledger",
    description: "Receivables, payables, and funds held in trust",
    columns: [
      { key: "party", header: "Party", type: "text", width: "flex-1" },
      { key: "remarks", header: "Remarks", type: "text", width: "flex-1" },
      { key: "type", header: "Type", type: "badge", width: "w-20" },
      { key: "balance", header: "Balance", type: "currency", width: "w-24" },
      { key: "duedate", header: "Due Date", type: "date", width: "w-32" },
    ],
    data: [
      {
        party: "Jerus",
        remarks: "Loan to Self",
        type: "Loan",
        balance: "",
        duedate: "",
      },
      {
        party: "Kuya Jeb",
        remarks: "Trust Funds",
        type: "Trust",
        balance: "39000",
        duedate: "",
      },
      {
        party: "Uge",
        remarks: "Loan to Uge",
        type: "Receivable",
        balance: "5000",
        duedate: "",
      },
      {
        party: "Cholo",
        remarks: "Loan to Cholo — ₱18,500 repaint + ₱10,000 business investment",
        type: "Receivable",
        balance: "28500",
        duedate: "",
      },
    ]
  }
]
