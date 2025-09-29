import { NextRequest, NextResponse } from "next/server"
import fs from "fs"
import path from "path"
import type { Wallet } from "@/lib/data-types"

export async function GET(_request: NextRequest) {
  // Handle environemnt
  if (process.env.NODE_ENV !== "development") {
    return NextResponse.json(
      {
        error: {
          code: "Forbidden",
          message: "Access to this resource is restricted",
        },
      },
      { status: 403 }
    )
  }

  const filePath = path.join(process.cwd(), "lib/data/wallet.json")

  // File check
  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      {
        error: {
          code: "NotFound",
          message: "Requested data is not available",
        },
      },
      { status: 404 }
    )
  }

  // Try reading file
  try {
    const fileContents = fs.readFileSync(filePath, "utf-8")
    const raw: Wallet[] = JSON.parse(fileContents)

    return NextResponse.json(raw)
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          code: "InternalError",
          message: "Unexpected error occurred",
        },
      },
      { status: 500 }
    )
  }
}
