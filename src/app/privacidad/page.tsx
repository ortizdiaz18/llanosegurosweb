import { LegalView } from "@/components/site/LegalView";
import { getPrivacidad } from "@/content";

export default function Privacidad() {
  return <LegalView page={getPrivacidad()} />;
}
