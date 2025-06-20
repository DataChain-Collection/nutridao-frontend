"use client";
import Web3Provider from "./Web3Provider";
import { ReactNode } from "react";
 
export default function AppWeb3Wrapper({ children }: { children: ReactNode }) {
  return <Web3Provider>{children}</Web3Provider>;
} 