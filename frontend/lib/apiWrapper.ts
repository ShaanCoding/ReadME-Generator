import { readMeGenerator } from "@/api/generated"

export const api = new readMeGenerator({
  BASE: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080",
})
