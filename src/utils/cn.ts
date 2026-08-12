import { clsx, type ClassValue } from "clsx";
// @ts-ignore: no declaration file for tailwind-merge
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

