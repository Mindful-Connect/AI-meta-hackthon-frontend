import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type AuthUser = {
  id: string
  name: string
  email: string
  avatar: {
    url: string
    initial: string
  }
  createdAt: string
  updatedAt: string
}
