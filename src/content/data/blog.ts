import type { BlogArticle } from "@/content/types";

/** Categorías del blog (incluye "Todos" para el filtro). */
export const blogCategoriesSeed = ["Todos", "Auto", "Vida", "Salud", "Hogar", "Empresarial", "Consejos"];

/** Artículos del blog (listado). Editable desde el admin en Fase 2. */
export const blogArticlesSeed: BlogArticle[] = [
  {
    id: "1",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_2045185570_0e4ff305386b86a3.png",
    title: "¿Cómo elegir el mejor seguro de auto en Colombia?",
    excerpt: "Guía completa para entender las coberturas, comparar precios y tomar la mejor decisión para tu vehículo.",
    category: "Auto",
    date: "12 ene 2026",
    readTime: "5 min",
    featured: true,
  },
  {
    id: "2",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_11cac4908a_7640b810e980798d.png",
    title: "Todo lo que debes saber sobre el seguro de vida",
    excerpt: "Descubre por qué el seguro de vida es la inversión más importante para proteger el futuro de tu familia.",
    category: "Vida",
    date: "8 ene 2026",
    readTime: "6 min",
    featured: false,
  },
  {
    id: "3",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_d4ea7d44ee_ace24dd049a6dafc.png",
    title: "Diferencias entre seguro de salud y medicina prepagada",
    excerpt: "Resolvemos la confusión más común entre los colombianos y te ayudamos a elegir la opción correcta.",
    category: "Salud",
    date: "5 ene 2026",
    readTime: "4 min",
    featured: false,
  },
  {
    id: "4",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_9dde51fef4_0bcb2b02d7ec289a.png",
    title: "5 razones para asegurar tu hogar hoy mismo",
    excerpt: "El seguro de hogar no es un lujo, es una necesidad. Te explicamos por qué con datos reales.",
    category: "Hogar",
    date: "2 ene 2026",
    readTime: "3 min",
    featured: false,
  },
  {
    id: "5",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_ccc4d3190a_10bcc100386c33d9.png",
    title: "Seguros empresariales: qué necesita tu pyme",
    excerpt: "Conoce las coberturas esenciales que toda empresa pequeña y mediana debería tener.",
    category: "Empresarial",
    date: "28 dic 2025",
    readTime: "7 min",
    featured: false,
  },
  {
    id: "6",
    img_url: "https://storage.googleapis.com/uxpilot-auth.appspot.com/gen_4591e15e71_b854c861b4ab3112.png",
    title: "10 errores comunes al contratar un seguro",
    excerpt: "Evita estos errores frecuentes y asegúrate de obtener la cobertura que realmente necesitas.",
    category: "Consejos",
    date: "20 dic 2025",
    readTime: "5 min",
    featured: false,
  },
];
