import type { LegalPage } from "@/content/types";

/** Términos y condiciones (editable desde el admin). */
export const terminosSeed: LegalPage = {
  title: "Términos y condiciones",
  updated: "Última actualización: 1 de enero de 2026",
  sections: [
    { title: "1. Objeto y ámbito de aplicación", content: "Los presentes Términos y Condiciones regulan el acceso y uso de la plataforma digital de Llano Seguros, así como los servicios de asesoría, cotización y gestión de seguros ofrecidos a través de la misma." },
    { title: "2. Naturaleza del servicio", content: "Llano Seguros actúa como corredor de seguros independiente, habilitado y vigilado por la Superintendencia Financiera de Colombia. No somos una aseguradora directa; actuamos como intermediarios entre el cliente y las compañías de seguros." },
    { title: "3. Registro de usuario", content: "Para acceder al portal de clientes, el usuario debe registrarse proporcionando información verídica y actualizada. El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso." },
    { title: "4. Cotizaciones y contratos", content: "Las cotizaciones presentadas son referencias basadas en la información suministrada por el usuario. Los precios definitivos son establecidos por las compañías aseguradoras y pueden variar según condiciones particulares de asegurabilidad." },
    { title: "5. Protección de datos", content: "El tratamiento de datos personales se realiza conforme a la Ley 1581 de 2012 y nuestra Política de Privacidad. El usuario autoriza el uso de su información para fines de cotización, asesoría y mejora del servicio." },
    { title: "6. Propiedad intelectual", content: "Todos los contenidos de la plataforma, incluyendo marca, diseño, textos e imágenes, son propiedad exclusiva de Llano Seguros y están protegidos por las leyes de propiedad intelectual vigentes en Colombia." },
    { title: "7. Modificaciones", content: "Llano Seguros se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones serán comunicadas a través de la plataforma y entrarán en vigor desde su publicación." },
    { title: "8. Jurisdicción", content: "Para cualquier controversia derivada del uso de la plataforma o de los servicios prestados, las partes se someten a la jurisdicción de los tribunales de la ciudad de Bogotá, Colombia." },
  ],
};

/** Política de privacidad (editable desde el admin). */
export const privacidadSeed: LegalPage = {
  title: "Política de privacidad",
  updated: "Última actualización: 1 de enero de 2026",
  sections: [
    { title: "1. Responsable del tratamiento", content: "Llano Seguros S.A.S., con NIT 900.123.456-7, con domicilio en Cra. 7 # 72-41, Of. 502, Bogotá, Colombia, es el responsable del tratamiento de los datos personales recopilados a través de esta plataforma." },
    { title: "2. Datos que recopilamos", content: "Recopilamos: datos de identificación (nombre, cédula), datos de contacto (correo, teléfono), datos del vehículo o bien asegurado, datos de salud (para seguros de salud y vida, con autorización expresa), y datos de navegación." },
    { title: "3. Finalidad del tratamiento", content: "Los datos son utilizados para: cotización y contratación de seguros, gestión de pólizas y siniestros, comunicaciones de servicio, mejora de la plataforma, y cumplimiento de obligaciones legales." },
    { title: "4. Derechos del titular", content: "Tienes derecho a conocer, actualizar, rectificar, suprimir y revocar la autorización de tus datos personales. Para ejercer estos derechos, escríbenos a datos@llanoseguros.com." },
    { title: "5. Cookies", content: "Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación, analizar el tráfico y personalizar el contenido. Puedes configurar tu navegador para rechazarlas." },
    { title: "6. Seguridad", content: "Implementamos medidas técnicas y administrativas para proteger tus datos, incluyendo cifrado SSL, controles de acceso y auditorías periódicas de seguridad." },
    { title: "7. Conservación", content: "Los datos se conservarán durante la vigencia de la relación comercial y el tiempo legalmente requerido, después del cual serán eliminados o anonimizados." },
    { title: "8. Contacto", content: "Para consultas sobre privacidad: datos@llanoseguros.com · Cra. 7 # 72-41, Of. 502, Bogotá · +57 300 123 4567" },
  ],
};
