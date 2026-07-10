"use client";

import { useParams } from "next/navigation";
import InsuranceLanding from "@/components/site/InsuranceLanding";

export default function SeguroTypePage() {
  const { type } = useParams<{ type: string }>();
  return <InsuranceLanding slug={type ?? "auto"} />;
}
