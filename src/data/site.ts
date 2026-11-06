export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const nav: NavItem[] = [
  {
    label: "Empresa",
    href: "/empresa/",
    children: [
      { label: "Calidad y certificaciones", href: "/empresa/calidad-y-certificaciones/" },
      { label: "I+D+I", href: "/empresa/idi/" },
      { label: "Delegaciones", href: "/empresa/delegaciones/" },
    ],
  },
  {
    label: "Sectores",
    href: "/sectores/",
    children: [
      { label: "Industria", href: "/sectores/industria/" },
      { label: "Desarrollo inmobiliario", href: "/sectores/desarrollo-inmobiliario/" },
      { label: "Actividades calificadas", href: "/sectores/actividades-calificadas/" },
      { label: "Instalaciones audiovisuales", href: "/sectores/instalaciones-audiovisuales/" },
      { label: "Infraestructuras", href: "/sectores/infraestructuras/" },
    ],
  },
  {
    label: "Servicios",
    href: "/servicios/",
    children: [
      {
        label: "Consultoría",
        href: "/servicios/consultoria/",
        children: [
          { label: "Acústica", href: "/servicios/consultoria/consultoria-acustica/" },
          { label: "Telecomunicaciones", href: "/servicios/consultoria/consultoria-telecomunicaciones/" },
        ],
      },
      {
        label: "Laboratorio ensayos",
        href: "/servicios/laboratorio-ensayos/",
        children: [
          {
            label: "Certificaciones acústicas «in situ»",
            href: "/servicios/laboratorio-ensayos/certificaciones-acusticas-in-situ/",
          },
          {
            label: "Laboratorio fijo: cámaras acústicas",
            href: "/servicios/laboratorio-ensayos/laboratorio-fijo-camaras-acusticas/",
          },
        ],
      },
      { label: "Acústica subacuática", href: "/servicios/acustica-subacuatica/" },
      { label: "Instalaciones acústicas", href: "/servicios/instalaciones-acusticas/" },
      { label: "Fabricantes", href: "/servicios/desarrollo-de-productos/fabricantes/" },
    ],
  },
  { label: "Actualidad", href: "/actualidad/" },
  { label: "Presupuesto", href: "/solicitud-presupuesto/" },
  { label: "Experiencias", href: "/experiencias/" },
  { label: "Contactar", href: "/contactar/" },
  {
    label: "Español",
    href: "/",
    children: [
      { label: "English", href: "https://acusttel.com/en/home/", external: true },
      { label: "Polski", href: "https://acusttel.com/pl/strona-glowna/", external: true },
    ],
  },
];

export const phoneDisplay = "+34 96 286 62 79";
export const phoneTel = "+34962866279";
export const email = "info@acusttel.com";

export const addressLines = [
  "Pol. Ind. Benieto",
  "C/ Del Transporte, nº 12",
  "Bloque 2, Nave 14",
  "46702 Gandia (Valencia)",
];

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/acusttel-sl/" },
  { label: "Facebook", href: "https://www.facebook.com/Acusttel-896319584043450/" },
  { label: "X", href: "https://twitter.com/acusttel" },
  { label: "Instagram", href: "https://www.instagram.com/acusttel/" },
];

export const clients = [
  { name: "Acciona", file: "acciona.jpg" },
  { name: "Copisa", file: "copisa.jpg" },
  { name: "FCC", file: "fcc.jpg" },
  { name: "Ferrovial", file: "ferrovial.jpg" },
  { name: "Isolux Corsán", file: "isolux-corsan.jpg" },
  { name: "Vialobra", file: "vialobra.jpg" },
];

export interface ServiceCard {
  title: string;
  text: string;
  href: string;
}

export interface ServiceGroup {
  label: string;
  items: ServiceCard[];
}

/** Misma taxonomía en la portada y en Servicios. */
export const serviceGroups: ServiceGroup[] = [
  {
    label: "Medir y certificar",
    items: [
      {
        title: "Certificaciones y ensayos",
        text: "La división de laboratorio está acreditada por ENAC y colabora con administraciones autonómicas en ruido y vibraciones. Trabaja en transporte, actividades, industria y aglomeraciones urbanas.",
        href: "/servicios/laboratorio-ensayos/",
      },
      {
        title: "Cámaras acústicas",
        text: "Cámaras de ensayo acreditadas por ENAC para conocer las prestaciones acústicas de productos y sistemas constructivos.",
        href: "/servicios/laboratorio-ensayos/laboratorio-fijo-camaras-acusticas/",
      },
    ],
  },
  {
    label: "Proyectar",
    items: [
      {
        title: "Consultoría acústica",
        text: "Diseño de soluciones con método propio, herramientas de última generación y un equipo que lleva años en el oficio.",
        href: "/servicios/consultoria/consultoria-acustica/",
      },
      {
        title: "Telecomunicaciones",
        text: "ICT, domótica, legalización de instalaciones y eficiencia energética en la edificación.",
        href: "/servicios/consultoria/consultoria-telecomunicaciones/",
      },
      {
        title: "Acústica subacuática",
        text: "Medición, modelización y mitigación del ruido de la actividad humana en el mar, en obra portuaria y en actividad offshore.",
        href: "/servicios/acustica-subacuatica/",
      },
    ],
  },
  {
    label: "Ejecutar",
    items: [
      {
        title: "Instalaciones acústicas",
        text: "Aislamiento, insonorización, tratamientos y pantallas acústicas, de la idea a la obra.",
        href: "/servicios/instalaciones-acusticas/",
      },
      {
        title: "Fabricantes",
        text: "Desarrollo, certificación y optimización de elementos constructivos y de maquinaria.",
        href: "/servicios/desarrollo-de-productos/fabricantes/",
      },
    ],
  },
];

export interface Office {
  group: string;
  name: string;
  lines: string[];
}

export const offices: Office[] = [
  {
    group: "España",
    name: "Gandia · sede",
    lines: ["Pol. Ind. Benieto", "C/ Del Transporte, nº 12, Bloque 2, Nave 14", "46702 Gandia (Valencia)"],
  },
  {
    group: "España",
    name: "Madrid",
    lines: ["Av. Cerro del Águila, 2, Portal 2, 5º-2", "28700 San Sebastián de los Reyes"],
  },
  {
    group: "España",
    name: "Murcia",
    lines: ["Pza. de la Cerámica, 6, 1º I", "30500 Molina de Segura"],
  },
  { group: "España", name: "Cataluña", lines: ["[por confirmar]"] },
  { group: "España", name: "Andalucía", lines: ["[por confirmar]"] },
  {
    group: "Delegaciones propias",
    name: "Polonia",
    lines: ["Al. Jerozolimskie 96 (5.º piso)", "00-807 Warszawa"],
  },
  {
    group: "Delegaciones propias",
    name: "Chile",
    lines: ["San Sebastián 2812, oficina 809", "Las Condes, Santiago"],
  },
  {
    group: "Mapa internacional",
    name: "Rumanía",
    lines: ["St. Garii de Nord, nr. 6-8 A, sc. 4", "Et. 3, ap. 28, District 1, Bucharest"],
  },
  { group: "Oficinas colaboradoras", name: "Turquía", lines: ["[por confirmar]"] },
  { group: "Oficinas colaboradoras", name: "México", lines: ["[por confirmar]"] },
  { group: "Oficinas colaboradoras", name: "Arabia Saudí", lines: ["[por confirmar]"] },
];

export const newsCategories = [
  { slug: "corporativa-es", label: "Corporativa" },
  { slug: "articulos-es", label: "Artículos" },
  { slug: "proyectos-es", label: "Proyectos" },
];

export const projectCategories = [
  { slug: "edificacion", label: "Acústica en la edificación" },
  { slug: "estudios-urbanisticos-es", label: "Estudios Urbanísticos" },
  { slug: "industria-es", label: "Industria" },
  { slug: "infraestructuras-es", label: "Infraestructuras" },
  { slug: "instalaciones-audiovisuales-es", label: "Instalaciones Audiovisuales" },
  { slug: "vibraciones-es", label: "Vibraciones" },
];

export const privacyClause = `De conformidad con lo establecido en la normativa vigente en Protección de Datos de Carácter Personal, le informamos que sus datos serán incorporados al sistema de tratamiento titularidad de Acústica y Telecomunicaciones S.L. con CIF B-96677315 y domicilio social sito en C/ Del Transporte, 12, 46702 Gandia (Valencia), con la finalidad de atender sus consultas. En cumplimiento con la normativa vigente, Acústica y Telecomunicaciones S.L. informa que los datos serán conservados durante el plazo estrictamente necesario para cumplir con los preceptos mencionados.

Mientras no nos comunique lo contrario, entenderemos que sus datos no han sido modificados, que usted se compromete a notificarnos cualquier variación y que tenemos su consentimiento para utilizarlos para las finalidades mencionadas.

Acústica y Telecomunicaciones S.L. informa que procederá a tratar los datos de manera lícita, leal, transparente, adecuada, pertinente, limitada, exacta y actualizada. Es por ello que Acústica y Telecomunicaciones S.L. se compromete a adoptar todas las medidas razonables para que estos se supriman o rectifiquen sin dilación cuando sean inexactos.

De acuerdo con los derechos que le confiere la normativa vigente en protección de datos podrá ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos de carácter personal, así como del consentimiento prestado para el tratamiento de los mismos, dirigiendo su petición a la dirección postal indicada más arriba o al correo info@acusttel.com.

Podrá dirigirse a la Autoridad de Control competente para presentar la reclamación que considere oportuna. El envío de estos datos implica la aceptación de esta cláusula.`;

export const howKnown = ["Google", "Yahoo!", "Otros"];
export const activities = [
  "Arquitecto/Aparejador",
  "Promotor",
  "Constructor",
  "Industria",
  "Mutua de Accidentes",
  "Servicios de Prevención",
  "Ingeniero",
  "Fabricante/Distribuidor",
  "Actividad calificada",
  "Otros",
];
export const helpTopics = [
  "Acústica medioambiental",
  "Aislamiento acústico",
  "Medidas acústicas",
  "Acondicionamiento acústico",
  "Instalación",
  "Electroacústica",
  "Antena colectiva",
  "Otros",
];
export const budgetServices = [
  'Certificaciones acústicas "in situ"',
  "Consultoría acústica",
  "Consultoría telecomunicaciones",
  "Cámaras acústicas",
  "Instalaciones acústicas",
];
export const budgetSectors = [
  "Industria",
  "Promoción inmobiliaria",
  "Promoción servicios",
  "Administración y medio ambiente",
  "Actividades calificadas",
  "Instalaciones audiovisuales",
  "Fabricantes",
];
