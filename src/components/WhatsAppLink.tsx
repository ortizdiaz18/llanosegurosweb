import { waUrl } from "@/lib/whatsapp";

type WhatsAppLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
> & {
  /** Mensaje prellenado opcional para el chat de WhatsApp. */
  message?: string;
};

/**
 * Enlace reutilizable a WhatsApp. Es un simple <a>, así que puede usarse
 * tanto en Server como en Client Components sin necesidad de "use client".
 */
export function WhatsAppLink({ message, children, ...props }: WhatsAppLinkProps) {
  return (
    <a
      href={waUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {children}
    </a>
  );
}

export default WhatsAppLink;
