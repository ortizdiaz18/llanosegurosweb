import { LegalView } from "@/components/site/LegalView";
import { getTerminos } from "@/content";

export default function Terminos() {
  return <LegalView page={getTerminos()} />;
}
