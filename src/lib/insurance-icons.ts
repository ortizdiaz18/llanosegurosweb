import {
  Car, Bike, Activity, Heart, Home, Building2, Scale,
  ShieldCheck, BadgeCheck, LifeBuoy, Zap, Clock, Users, Star, CheckCircle2,
  UserCheck, BarChart3, Send, RefreshCw, Handshake, Award, Landmark,
  Sparkles, MessageSquare, Phone, HeartHandshake, CreditCard,
  FileSearch, BarChart2, Target, Eye, BookOpen,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

/** Resuelve el nombre de icono (guardado en el contenido) a su componente lucide. */
const ICONS: Record<string, LucideIcon> = {
  Car, Bike, Activity, Heart, Home, Building2, Scale,
  ShieldCheck, BadgeCheck, LifeBuoy, Zap, Clock, Users, Star, CheckCircle2,
  UserCheck, BarChart3, Send, RefreshCw, Handshake, Award, Landmark,
  Sparkles, MessageSquare, Phone, HeartHandshake, CreditCard,
  FileSearch, BarChart2, Target, Eye, BookOpen,
};

export function resolveIcon(name: string): LucideIcon {
  return ICONS[name] ?? ShieldCheck;
}
