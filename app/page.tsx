"use client";
import { useEffect } from "react";
import { processWithDelay } from "@/utils/processWithDelay";
import UsersList from "./components/UsersList";

export default function Home() {
  useEffect(() => {
    console.log("Home rendered");
    const controller = new AbortController();
    processWithDelay([10, 20, 30, 40, 50], 2000, controller.signal);

    setTimeout(() => controller.abort(), 11000);
  }, []);

  return (
    
    <div className="p-6">
      <h1 className="text-3xl font-bold">Home</h1>
      <UsersList />
    </div>
  );
}
