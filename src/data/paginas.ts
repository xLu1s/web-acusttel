export type Block =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "cards"; items: { title: string; text: string; href: string }[] }
  | { t: "quote"; text: string }
  | { t: "offices" }
  | { t: "certs" }
  | { t: "links"; items: { label: string; href: string; external?: boolean }[] };

export interface PageDoc {
  slug: string;
  kind: "page" | "news-index" | "projects-index" | "contact" | "budget" | "legal" | "empty-portfolio";
  legalKey?: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede?: string;
  image?: string;
  imageAlt?: string;
  blocks?: Block[];
}

const quote: Block = {
  t: "quote",
  text: "El silencio es tranquilidad, es concentración, descanso y respeto hacia los demás. Crea mejores espacios habitables y lugares de trabajo más eficientes. El silencio es tranquilidad, y tu tranquilidad es Acusttel.",
};

export const paginas: PageDoc[] = [
  {
    slug: "empresa",
    kind: "page",
    title: "Empresa",
    description:
      "Acusttel nace en Gandia en 1997. Consultoría acústica y de telecomunicaciones con equipo de ingeniería, delegaciones en España y proyectos internacionales.",
    eyebrow: "La compañía",
    h1: "Una ingeniería acústica nacida en Gandia en 1997",
    lede: "Tres compañeros de la primera promoción de la escuela de ingenieros técnicos de telecomunicación de Gandia pusieron en marcha Acusttel con una idea clara: la acústica iba a ser una especialidad transversal de la ingeniería.",
    image: "reunion.webp",
    imageAlt: "Equipo de trabajo reunido en torno a una mesa",
    blocks: [
      {
        t: "p",
        text: "Desde el inicio contaron con el apoyo de la EPSG, del programa Ideas de la UPV y del CEEI Valencia, que completaron la formación de gestión de un equipo que venía de la ingeniería. A lo largo de estos años la empresa ha recibido reconocimientos de la UPV, del CEEI, de jóvenes emprendedores, de FAES (Federación de Asociaciones de Empresarios de la Safor), el premio Bancaixa, el premio Caixa Popular y FEMEVAL.",
      },
      {
        t: "p",
        text: "El posicionamiento se ha construido paso a paso, con el cliente y el aporte de valor en el centro, y con un equipo que sostiene el proyecto. Además del mercado nacional, Acusttel ha trabajado en Sudamérica, Europa del este y Oriente Medio, en proyectos de ingeniería con equipos de varios países.",
      },
      {
        t: "p",
        text: "La web actual decía que la compañía celebraría en breve sus 25 años. El dato que sigue vigente, y el que publicamos, es el de origen: 1997. El cliente y el equipo siguen siendo el foco.",
      },
      { t: "h2", text: "Por qué es una referencia en consultoría acústica" },
      {
        t: "p",
        text: "Acusttel se plantea liderar la ingeniería acústica a escala nacional. Hoy cuenta con delegaciones en la Comunitat Valenciana, la Región de Murcia, Cataluña, Andalucía y Madrid. En los últimos años ha ampliado el trabajo a otros países, entre ellos Chile, Rumanía y Polonia.",
      },
      {
        t: "p",
        text: "Aporta criterio acústico en industria, sector inmobiliario, infraestructuras, administración y actividades calificadas. Estudia cada caso con técnicas de análisis por intensidad sonora para aplicar soluciones de mínima agresión, y gestiona la certificación de productos tanto en acústica como en protección pasiva frente al fuego.",
      },
      {
        t: "ul",
        items: [
          "Especialización en control del ruido ambiental.",
          "Más de 20 años de experiencia reconocida en la propia web.",
          "Equipo de más de 30 ingenieros acústicos especializados, con formación continua. En la portada, la compañía habla de más de 20 profesionales de la ingeniería: son las dos cifras que publica, en contextos distintos.",
          "Inversión en I+D+i para mantener técnicas y tecnología al día.",
          "Participación en asociaciones nacionales y europeas.",
        ],
      },
      quote,
      {
        t: "links",
        items: [
          { label: "Calidad y certificaciones", href: "/empresa/calidad-y-certificaciones/" },
          { label: "I+D+I", href: "/empresa/idi/" },
          { label: "Delegaciones", href: "/empresa/delegaciones/" },
        ],
      },
    ],
  },
  {
    slug: "empresa/calidad-y-certificaciones",
    kind: "page",
    title: "Calidad y certificaciones",
    description:
      "Acusttel está certificada por AW Certificación en ISO 9001 (02299) e ISO 14001 (02301), con certificadora acreditada por ENAC.",
    eyebrow: "Empresa",
    h1: "Calidad certificada, con nombre y número",
    lede: "La fiabilidad técnica de Acusttel se apoya en los años de laboratorio —Sonox, laboratorio de ensayos— y en la certificación ISO 9001 e ISO 14001 para las empresas del grupo.",
    image: "laboratorio.webp",
    imageAlt: "Entorno de laboratorio",
    blocks: [
      {
        t: "p",
        text: "Acusttel apuesta por la diferenciación tecnológica y por servicios de mayor valor añadido. Esa apuesta se ha reconocido por administraciones y por entidades de certificación.",
      },
      { t: "h2", text: "ISO 9001: el trabajo, bajo control" },
      {
        t: "p",
        text: "La certificación ISO 9001 ordena procesos, áreas y actividades. En la práctica, la compañía la traduce así:",
      },
      {
        t: "ul",
        items: [
          "Gestionar y controlar con más eficacia los procesos de trabajo.",
          "Optimizar recursos y reducir errores en cada fase, con ahorro para la empresa y para el cliente.",
          "Aumentar la satisfacción de clientes y del resto de partes del proyecto.",
          "Mejorar la competitividad.",
          "Diferenciar el servicio por el nivel de calidad.",
        ],
      },
      { t: "h2", text: "ISO 14001: el compromiso ambiental" },
      {
        t: "ul",
        items: [
          "Prevenir, reducir y controlar los impactos de actividades, productos y servicios.",
          "Asegurar el cumplimiento de los requisitos legales aplicables.",
          "Reforzar el compromiso ambiental de la empresa.",
          "Ahorrar costes optimizando consumos y reduciendo residuos.",
          "Sostener la imagen de la compañía con estándares exigentes.",
        ],
      },
      { t: "h2", text: "Gestión de la innovación" },
      {
        t: "ul",
        items: [
          "Sistematizar las actividades de I+D+i.",
          "Potenciarlas y mejorar la gestión de los recursos.",
          "Gestionar la cartera de proyectos.",
        ],
      },
      { t: "h2", text: "Empresa certificada por AW Certificación" },
      {
        t: "p",
        text: "Ingeniería y consultoría: gestión de la calidad (ISO 9001) y gestión ambiental (ISO 14001). Instalaciones acústicas: gestión de la calidad (ISO 9001) y gestión ambiental (ISO 14001).",
      },
      { t: "certs" },
      {
        t: "links",
        items: [{ label: "Política de calidad y medio ambiente", href: "/politica-de-gestion-acusttel/" }],
      },
    ],
  },
  {
    slug: "empresa/idi",
    kind: "page",
    title: "I+D+I",
    description:
      "Líneas de investigación de Acusttel: vibraciones en transporte, control activo, simulación, monitorización y diseño de productos acústicos.",
    eyebrow: "Empresa",
    h1: "Investigación aplicada al ruido y a las vibraciones",
    lede: "Acusttel dedica una parte relevante de sus recursos a investigación, desarrollo e innovación, porque de ahí salen resultados más sólidos y clientes mejor atendidos.",
    image: "medicion.webp",
    imageAlt: "Revisión de planos y medición sobre una mesa de trabajo",
    blocks: [
      {
        t: "p",
        text: "El departamento de I+D+i trabaja en técnicas nuevas de ingeniería acústica. Esa inversión ha acompañado el crecimiento de la consultora y el acceso a proyectos de envergadura. Gracias a estudios y desarrollos en aislamiento, Acusttel forma parte de la Asociación Europea de Fabricantes de Pantallas Acústicas.",
      },
      {
        t: "p",
        text: "Aunque el recorrido en estudios acústicos ambientales es largo, el equipo sigue desarrollando técnicas y tecnología para mantenerse en la primera línea del sector.",
      },
      { t: "h2", text: "Desde dónde se plantea cada proyecto de investigación" },
      {
        t: "ul",
        items: [
          "Investigación interna, para profundizar en el conocimiento: uno de los ejes de diferenciación.",
          "Innovación en los servicios, para responder mejor a lo que el cliente necesita ahora y a lo que va a necesitar.",
          "La posibilidad de que el cliente externalice I+D+i acústica sin una gran inversión en activos fijos ni en personal propio.",
        ],
      },
      { t: "h2", text: "Materias de investigación técnica" },
      {
        t: "ul",
        items: [
          "Predicción acústica de vibraciones en infraestructuras de transporte y en edificaciones.",
          "Control activo de ruido.",
          "Diseño de productos para aislamiento acústico.",
          "Diseño de productos para acondicionamiento acústico.",
          "Optimización de productos acústicos.",
          "Simulación de propiedades acústicas por elementos finitos.",
          "Simulación por elementos de contorno.",
          "Simulación por transferencia de impedancias.",
          "Reducción del ruido de maquinaria mediante el diseño.",
          "Sistemas de monitorización de ruido y vibraciones.",
        ],
      },
    ],
  },
  {
    slug: "empresa/delegaciones",
    kind: "page",
    title: "Delegaciones",
    description:
      "Sede en Gandia y delegaciones en Madrid, Murcia, Polonia, Chile y Rumanía. Oficinas colaboradoras en Turquía, México y Arabia Saudí.",
    eyebrow: "Empresa",
    h1: "Delegaciones en España y fuera",
    lede: "El crecimiento de Acusttel se ha apoyado en el mercado de origen y, a partir de ahí, en proyectos internacionales que han obligado a afinar la gestión interna.",
    image: "torre.webp",
    imageAlt: "Torre de oficinas de vidrio",
    blocks: [
      {
        t: "p",
        text: "La demanda de consultoría acústica fuera de España llevó a abrir horizonte en países donde la ingeniería acústica se tiene en cuenta en edificación, infraestructuras y medio ambiente. Además de las delegaciones españolas, la compañía cuenta con delegaciones propias en Chile y Polonia, y con oficinas colaboradoras en Turquía, México, Rumanía y Arabia Saudí. El mapa del sitio publica también una dirección en Bucarest.",
      },
      {
        t: "p",
        text: "En España, la página de empresa cita delegaciones en la Comunitat Valenciana, la Región de Murcia, Cataluña, Andalucía y Madrid. Las direcciones que el mapa publica son Gandia, Madrid y Molina de Segura. Cataluña y Andalucía figuran sin dirección.",
      },
      { t: "h2", text: "Direcciones publicadas" },
      { t: "offices" },
      {
        t: "p",
        text: "El código postal de la sede de Gandia es 46702 en el aviso legal y en el pie de la web. El mapa interactivo mostraba 46700: aquí se mantiene el del domicilio legal.",
      },
    ],
  },
  {
    slug: "sectores",
    kind: "page",
    title: "Sectores",
    description:
      "Acústica para industria, desarrollo inmobiliario, actividades calificadas, instalaciones audiovisuales e infraestructuras.",
    eyebrow: "Sectores",
    h1: "Cinco sectores, el mismo criterio acústico",
    lede: "Acusttel estudia y proyecta aislamiento y acondicionamiento allí donde una actividad, un edificio o una infraestructura tiene que convivir con un límite de ruido.",
    image: "ciudad.webp",
    imageAlt: "Vista urbana",
    blocks: [
      {
        t: "cards",
        items: [
          {
            title: "Industria",
            text: "Plantas donde hay que bajar el ruido de máquinas, cortar la transmisión de vibraciones y separar zonas ruidosas, por salud laboral y por normativa.",
            href: "/sectores/industria/",
          },
          {
            title: "Desarrollo inmobiliario",
            text: "Hoteles, hospitales, centros comerciales y vivienda. El acondicionamiento es más estricto cuando hay residentes cerca.",
            href: "/sectores/desarrollo-inmobiliario/",
          },
          {
            title: "Actividades calificadas",
            text: "Bares, restaurantes, talleres y otras actividades con niveles altos, que necesitan integrarse sin molestar.",
            href: "/sectores/actividades-calificadas/",
          },
          {
            title: "Instalaciones audiovisuales",
            text: "Recintos de grabación o reproducción donde el nivel de fondo tiene que ser muy bajo y el material, el adecuado.",
            href: "/sectores/instalaciones-audiovisuales/",
          },
          {
            title: "Infraestructuras",
            text: "Variables acústicas para proteger el medio ambiente y adaptar comunidades e infraestructuras a la normativa.",
            href: "/sectores/infraestructuras/",
          },
        ],
      },
      { t: "h2", text: "Qué se aporta en cada uno" },
      {
        t: "ul",
        items: [
          "Industria: evaluación, diseño de soluciones y ejecución de medidas correctoras.",
          "Edificación: estudio acústico, dirección acústica de obra y certificado de aislamientos y de ruido de instalaciones.",
          "Actividades: proyecto, dirección, ejecución y certificación final, en un encargo llave en mano.",
          "Audiovisual: aislamiento y acondicionamiento de estudios de grabación, salas de conferencia y espacios de alta exigencia.",
          "Infraestructuras lineales: diseño de sistemas para ruido y vibraciones, tanto para la administración como para ingenierías.",
        ],
      },
    ],
  },
  {
    slug: "sectores/industria",
    kind: "page",
    title: "Industria",
    description:
      "Medición, acústica preventiva y correctiva e instalaciones para la industria. Más de 10 años de soluciones acústicas industriales publicados por Acusttel.",
    eyebrow: "Sectores",
    h1: "La industria, medida antes de insonorizada",
    lede: "La legislación obliga a evaluar y reducir el ruido en el exterior y en los puestos de trabajo. Acusttel entra por cuatro vías, según el momento del problema.",
    image: "industria.webp",
    imageAlt: "Trabajo industrial con chispas de soldadura",
    blocks: [
      { t: "h2", text: "Mediciones para contrastar la legislación" },
      {
        t: "p",
        text: "Análisis del panorama acústico de la operación, con metodologías distintas: monitorizado permanente y muestreos aleatorios.",
      },
      { t: "h2", text: "Acústica preventiva" },
      {
        t: "p",
        text: "Estudios predictivos antes de una autorización ambiental, una implantación nueva o una ampliación. Sirven para fijar las medidas correctoras, elegir equipos y decidir dónde se instalan.",
      },
      { t: "h2", text: "Acústica correctiva" },
      {
        t: "p",
        text: "Cuando el ruido ya está, se analiza cada foco y su peso en el resultado global. El programa de control de ruido permite ver la inversión, escalonar las actuaciones y comprobar si acercan al objetivo.",
      },
      { t: "h2", text: "Instalaciones acústicas" },
      {
        t: "p",
        text: "Acusttel instala lo que proyecta: concepción, diseño, ejecución de la insonorización y del acondicionamiento, y validación final. Lleva más de 10 años investigando, diseñando y ejecutando soluciones para la industria. El departamento técnico estudia la viabilidad de cada caso.",
      },
      { t: "links", items: [{ label: "Hablar con el departamento técnico", href: "/contactar/" }] },
    ],
  },
  {
    slug: "sectores/desarrollo-inmobiliario",
    kind: "page",
    title: "Desarrollo inmobiliario",
    description:
      "Proyecto acústico, control de obra, certificación y patologías para hoteles, hospitales, centros comerciales y residencial.",
    eyebrow: "Sectores",
    h1: "Edificios que se entregan con la acústica resuelta",
    lede: "Un hotel, un hospital, un centro comercial o un residencial necesita aislamiento, acondicionamiento y, cuando toca, refuerzo sonoro o instalaciones electroacústicas. El diseño cumple la ley sin perder de vista cómo se va a usar el edificio.",
    image: "residencial.webp",
    imageAlt: "Edificio residencial contemporáneo",
    blocks: [
      {
        t: "p",
        text: "Acusttel entra desde el estudio inicial, junto al proyectista, en la redacción de obra nueva o reforma, en la dirección técnica y en la certificación acústica final. El objetivo es sumar un criterio acústico a la cadena de valor de quien promueve o construye.",
      },
      {
        t: "cards",
        items: [
          {
            title: "Proyecto acústico",
            text: "Soluciones particulares de sistemas constructivos y de instalaciones, desde el estudio hasta el proyecto de ejecución.",
            href: "/servicios/consultoria/consultoria-acustica/",
          },
          {
            title: "Control de obra",
            text: "Visitas, actas de inspección, revisión de detalles y pruebas de servicio durante la obra.",
            href: "/contactar/",
          },
          {
            title: "Certificación acústica",
            text: "Ensayos in situ del aislamiento y de la inmisión de ruido de las instalaciones, en la entrega.",
            href: "/servicios/laboratorio-ensayos/certificaciones-acusticas-in-situ/",
          },
          {
            title: "Patologías",
            text: "Localización de puentes acústicos por intensidad sonora y soluciones de mínima agresión.",
            href: "/servicios/consultoria/consultoria-acustica/",
          },
        ],
      },
    ],
  },
  {
    slug: "sectores/actividades-calificadas",
    kind: "page",
    title: "Actividades calificadas",
    description:
      "Aislamiento y acondicionamiento de actividades ruidosas, con estudio, instalación, certificación y legalización. Servicio en todo el territorio.",
    eyebrow: "Sectores",
    h1: "Actividades que suenan, sin convertirse en un problema",
    lede: "Bares, restaurantes, talleres, tiendas y franquicias necesitan que el sonido forme parte del negocio y no de la queja del vecino. Acusttel cubre el estudio, las medidas correctoras y la instalación.",
    image: "hotel.webp",
    imageAlt: "Interior de un establecimiento de uso público",
    blocks: [
      { t: "h2", text: "Fases" },
      {
        t: "ol",
        items: [
          "Estudio acústico previo, preventivo o correctivo.",
          "Análisis y definición de soluciones para la calidad acústica buscada y para la legislación vigente.",
          "Instalación acústica.",
          "Certificación acústica final.",
        ],
      },
      { t: "h2", text: "Cadenas, supermercados y franquicias" },
      {
        t: "p",
        text: "El tamaño, la experiencia y la solvencia técnica permiten acompañar a cadenas de tiendas, supermercados y franquicias en las que el ruido condiciona el negocio. Con equipo y delegaciones en buena parte del territorio, el servicio se plantea para quien necesita cobertura geográfica, plazos y un único interlocutor.",
      },
      { t: "h2", text: "Compromiso" },
      {
        t: "ul",
        items: [
          "Soluciones eficaces en coste, operación, plazos y resultado.",
          "Garantía de plazos de ejecución y de resultados.",
          "Gestión de la documentación para la legalización acústica del establecimiento.",
          "Un solo servicio para todo el territorio nacional.",
        ],
      },
    ],
  },
  {
    slug: "sectores/instalaciones-audiovisuales",
    kind: "page",
    title: "Instalaciones audiovisuales",
    description:
      "Diseño y ejecución de platós, estudios, salas de grabación, conferencias, auditorios y salas de cine. Acústica pasiva y refuerzo sonoro.",
    eyebrow: "Sectores",
    h1: "Salas en las que la palabra y la música se entienden",
    lede: "Un recinto de grabación o de reproducción necesita que la acústica pasiva y el refuerzo sonoro trabajen juntos. La arquitectura, el aislamiento y el acondicionamiento deciden si esa calidad es posible.",
    image: "estudio.webp",
    imageAlt: "Estudio con mesa de mezclas y monitores",
    blocks: [
      {
        t: "p",
        text: "Acusttel diseña y ejecuta estos espacios y colabora con empresas de equipamiento escénico y electroacústico para dar una respuesta global. En cada proyecto los equipos se eligen por razones técnicas, de uso y de coste, no por catálogo cerrado.",
      },
      {
        t: "p",
        text: "Se definen las redes de infraestructuras audiovisuales y el equipamiento de audio y vídeo: proyección, captación, procesado y distribución. La calidad de escucha depende de la sala: reverberación, distribución de niveles, ruido de fondo, inteligibilidad, intimidad, claridad e impresión espacial.",
      },
      { t: "h2", text: "Campos de actuación" },
      {
        t: "ul",
        items: [
          "Platós de televisión.",
          "Estudios de radio y televisión.",
          "Salas de grabación sonora.",
          "Salas de conferencias.",
          "Auditorios.",
          "Salas cinematográficas.",
        ],
      },
    ],
  },
  {
    slug: "sectores/infraestructuras",
    kind: "page",
    title: "Infraestructuras",
    description:
      "Estudios de ruido y vibraciones en transporte, mapas de ruido municipales y acústica de planes urbanísticos.",
    eyebrow: "Sectores",
    h1: "Infraestructuras que se oyen antes de construirse",
    lede: "Integrar la acústica en la protección del medio ambiente sirve para cumplir la legislación y para mejorar la calidad de vida de quien vive junto a una vía, una carretera o un trazado nuevo.",
    image: "tren.webp",
    imageAlt: "Tren de mercancías en una vía",
    blocks: [
      {
        t: "p",
        text: "El compromiso ambiental de Acusttel se concreta en procesos que ayudan a cumplir las medidas de reducción de la contaminación acústica.",
      },
      { t: "h2", text: "Servicios" },
      {
        t: "ul",
        items: [
          "Estudios de ruido y vibraciones en infraestructuras de transporte.",
          "Mapas de ruido y programas de actuación municipales.",
          "Estudios acústicos para nuevos planes urbanísticos.",
        ],
      },
      {
        t: "links",
        items: [
          { label: "Ver experiencias de infraestructura", href: "/categoria_portfolio/infraestructuras-es/" },
          { label: "Consultoría acústica", href: "/servicios/consultoria/consultoria-acustica/" },
        ],
      },
    ],
  },
  {
    slug: "servicios",
    kind: "page",
    title: "Servicios",
    description:
      "Laboratorio, consultoría, cámaras acústicas, fabricantes e instalaciones. Delegaciones en España, Chile, Polonia y oficinas colaboradoras.",
    eyebrow: "Servicios",
    h1: "Del ensayo a la obra, en la misma casa",
    lede: "El valor está en integrar laboratorio de ruido y vibraciones, consultoría e instalaciones. Así un certificado, un mapa de ruido o una pantalla acústica no cambian de interlocutor a mitad de camino.",
    image: "paneles.webp",
    imageAlt: "Detalle de estudio con tratamiento acústico",
    blocks: [
      {
        t: "p",
        text: "Hay delegaciones en la Comunitat Valenciana, Andalucía, la Región de Murcia, Cataluña y Madrid. Fuera de España, delegaciones en Chile y Polonia y oficinas colaboradoras en México, Arabia Saudí, Turquía y Rumanía. En proyectos grandes, Acusttel se integra como especialista de ruido y vibraciones con ingenierías de alcance internacional.",
      },
      {
        t: "p",
        text: "La estructura por divisiones permite tanto una certificación pequeña como un proyecto de infraestructura de transporte, industria, generación de energía, tratamiento de aguas o planificación estratégica de ruido para una administración.",
      },
      {
        t: "cards",
        items: [
          {
            title: "Certificaciones y ensayos",
            text: "La división de laboratorio está acreditada por ENAC y es entidad colaboradora de administraciones autonómicas en ruido y vibraciones. Trabaja en transporte, actividades, industria y aglomeraciones urbanas.",
            href: "/servicios/laboratorio-ensayos/",
          },
          {
            title: "Consultoría acústica",
            text: "Diseño de soluciones con método propio, herramientas de última generación y un equipo que lleva años en el oficio.",
            href: "/servicios/consultoria/",
          },
          {
            title: "Cámaras acústicas",
            text: "Cámaras de ensayo acreditadas por ENAC para conocer las prestaciones acústicas de productos y sistemas constructivos.",
            href: "/servicios/laboratorio-ensayos/laboratorio-fijo-camaras-acusticas/",
          },
          {
            title: "Fabricantes",
            text: "Desarrollo, certificación y optimización de elementos constructivos y de maquinaria.",
            href: "/servicios/desarrollo-de-productos/fabricantes/",
          },
          {
            title: "Instalaciones",
            text: "Aislamiento, insonorización, tratamientos y pantallas acústicas, de la idea a la obra.",
            href: "/servicios/instalaciones-acusticas/",
          },
          {
            title: "Telecomunicaciones",
            text: "ICT, domótica, legalización de instalaciones y eficiencia energética en la edificación.",
            href: "/servicios/consultoria/consultoria-telecomunicaciones/",
          },
        ],
      },
    ],
  },
  {
    slug: "servicios/consultoria",
    kind: "page",
    title: "Consultoría",
    description:
      "Estudios acústicos preoperacionales y evaluaciones in situ. Mapas de ruido en grandes ciudades y proyectos internacionales.",
    eyebrow: "Servicios",
    h1: "Consultoría acústica con método y con obra detrás",
    lede: "El equipo estudia el ruido antes de que la actividad exista y también cuando ya está. A partir de ahí se eligen sistemas y materiales de acondicionamiento.",
    image: "oficina.webp",
    imageAlt: "Oficina contemporánea de trabajo",
    blocks: [
      {
        t: "p",
        text: "Durante años, Acusttel ha hecho estudios de urbanización, de implantación industrial y de infraestructuras nuevas, con pantallas metálicas, puertas acústicas y paneles. También elabora y actualiza mapas de ruido y estudios ambientales en ciudades como Barcelona, Madrid y Valencia, y en proyectos internacionales.",
      },
      {
        t: "p",
        text: "Ese recorrido ha permitido desarrollar técnicas propias y sistemas de aislamiento exigentes. La compañía forma parte de la Asociación Europea de Fabricantes de Pantallas Acústicas.",
      },
      { t: "h2", text: "Cómo se trabaja con el cliente" },
      {
        t: "ul",
        items: [
          "Aprovechar el presupuesto disponible con aislantes de calidad, sin inflar la solución.",
          "Un servicio pensado para ese proyecto, no una receta repetida.",
          "Estudio ambiental en profundidad y técnica distinta según el caso.",
          "Ingenieros en formación continua y material actualizado.",
        ],
      },
      { t: "h2", text: "El ruido y lo que provoca" },
      {
        t: "p",
        text: "En la industria, el ruido y las vibraciones afectan a la salud de quien trabaja. El mismo problema aparece en la calle y en la vivienda. Las vibraciones, además, piden aislamiento propio en ciudad y en empresa. Acusttel nace para eso: resolver problemas acústicos y mejorar cómo se vive y se trabaja.",
      },
      {
        t: "links",
        items: [
          { label: "Consultoría acústica", href: "/servicios/consultoria/consultoria-acustica/" },
          { label: "Telecomunicaciones", href: "/servicios/consultoria/consultoria-telecomunicaciones/" },
        ],
      },
    ],
  },
  {
    slug: "servicios/consultoria/consultoria-acustica",
    kind: "page",
    title: "Consultoría acústica",
    description:
      "Control de ruido industrial, DB-HR, mapas municipales, compatibilidad de suelo e impacto de carreteras, ferrocarril, metro y tranvía.",
    eyebrow: "Consultoría",
    h1: "Servicios de consultoría acústica",
    lede: "Procesos, tecnología y experiencia para decidir la solución por eficacia, coste y garantía de resultado. El trabajo cubre industria, medio ambiente, edificación, actividades y planeamiento.",
    image: "carretera.webp",
    imageAlt: "Infraestructura viaria",
    blocks: [
      { t: "h2", text: "Qué incluye" },
      {
        t: "ul",
        items: [
          "Programas de control de ruido de procesos industriales.",
          "Adaptación de proyectos inmobiliarios al DB-HR.",
          "Consultoría para hoteles, centros comerciales, hospitales y obras singulares.",
          "Mapas de ruido y programas de reducción en municipios.",
          "Estudios de suelo y de compatibilidad acústica.",
          "Impacto acústico y vibratorio de infraestructuras lineales: carreteras, ferrocarril, metro y tranvía.",
        ],
      },
    ],
  },
  {
    slug: "servicios/consultoria/consultoria-telecomunicaciones",
    kind: "page",
    title: "Consultoría de telecomunicaciones",
    description:
      "ICT, domótica, legalización de instalaciones y proyectos de energía solar y eficiencia energética en edificios.",
    eyebrow: "Consultoría",
    h1: "Telecomunicaciones con la misma exigencia que la acústica",
    lede: "Acusttel es, sobre todo, una consultora acústica. En un entorno más exigente asume también lo que piden las nuevas tecnologías y el Código Técnico de la Edificación.",
    image: "torre.webp",
    imageAlt: "Edificio de oficinas",
    blocks: [
      {
        t: "p",
        text: "Los proyectos se redactan para ser claros, efectivos y fáciles de construir, con comunicación constante para no generar costes de más. La marca se sostiene con información periódica del estado de los trabajos, equipos técnicos propios, precio cerrado y entrega en el plazo acordado.",
      },
      { t: "h2", text: "Servicios" },
      {
        t: "ul",
        items: [
          "Proyectos de infraestructuras comunes de telecomunicación (ICT).",
          "Domótica.",
          "Diseño y legalización de instalaciones: eléctricas, agua, gas, ventilación, garajes y otras.",
          "Energía solar y eficiencia energética en los edificios.",
        ],
      },
    ],
  },
  {
    slug: "servicios/laboratorio-ensayos",
    kind: "page",
    title: "Laboratorio de ensayos",
    description:
      "Sonox, laboratorio de ensayo y certificaciones acústicas de Acusttel: especialización, experiencia y fiabilidad técnica acreditada.",
    eyebrow: "Servicios",
    h1: "Sonox, el laboratorio",
    lede: "Sonox es el laboratorio de ensayo y de certificaciones acústicas. Su diferencia está en la especialización, en la experiencia contrastada y en la fiabilidad de una empresa acreditada.",
    image: "laboratorio.webp",
    imageAlt: "Laboratorio",
    blocks: [
      {
        t: "p",
        text: "En la página de servicios, Acusttel indica que la división de laboratorio de acústica está acreditada por ENAC y colabora con administraciones autonómicas en ruido y vibraciones.",
      },
      {
        t: "links",
        items: [
          {
            label: "Certificaciones acústicas in situ",
            href: "/servicios/laboratorio-ensayos/certificaciones-acusticas-in-situ/",
          },
          {
            label: "Cámaras acústicas",
            href: "/servicios/laboratorio-ensayos/laboratorio-fijo-camaras-acusticas/",
          },
        ],
      },
    ],
  },
  {
    slug: "servicios/laboratorio-ensayos/certificaciones-acusticas-in-situ",
    kind: "page",
    title: "Certificaciones acústicas in situ",
    description:
      "Ensayos de acústica ambiental y de edificación: auditorías, monitorización, certificados, potencia, intensimetría y vibraciones.",
    eyebrow: "Laboratorio",
    h1: "Certificar donde está el ruido",
    lede: "El laboratorio está preparado para ensayar acústica ambiental y de edificación. La medida sirve para contrastar una instalación con la ley o para arrancar después un proyecto de consultoría.",
    image: "medicion.webp",
    imageAlt: "Medición sobre documentación técnica",
    blocks: [
      {
        t: "p",
        text: "La fiabilidad del ensayo, la eficacia del servicio, la independencia y la especialización técnica son los argumentos con los que Sonox plantea la evaluación de una situación ruidosa.",
      },
      { t: "h2", text: "Ensayos" },
      {
        t: "ul",
        items: [
          "Auditorías acústicas de actividades frente a la legislación vigente.",
          "Monitorización continua de ruido y vibraciones.",
          "Certificados acústicos de edificación.",
          "Potencia acústica de focos de ruido.",
          "Intensimetrías.",
          "Análisis de vibraciones.",
        ],
      },
      { t: "h2", text: "Servicios de Sonox" },
      {
        t: "ul",
        items: [
          "Certificados acústicos para la edificación.",
          "Auditorías de actividades calificadas.",
          "Auditorías de plantas industriales.",
          "Certificación acústica de productos en laboratorio.",
        ],
      },
    ],
  },
  {
    slug: "servicios/laboratorio-ensayos/laboratorio-fijo-camaras-acusticas",
    kind: "page",
    title: "Laboratorio fijo: cámaras acústicas",
    description:
      "Cámaras de transmisión, reverberantes, in situ y de potencia, con software SEA y elementos finitos.",
    eyebrow: "Laboratorio",
    h1: "Cámaras para saber cómo se comporta un producto",
    lede: "Quien fabrica materiales o bienes de equipo necesita innovar. Acusttel se ofrece como aliado para mejorar la acústica del producto y, con ella, su valor.",
    image: "laboratorio.webp",
    imageAlt: "Entorno de laboratorio técnico",
    blocks: [
      { t: "h2", text: "Instalaciones" },
      {
        t: "ul",
        items: [
          "Cámaras de transmisión, para el aislamiento acústico de productos.",
          "Cámaras reverberantes, para la absorción de materiales.",
          "Cámaras in situ, para sistemas constructivos.",
          "Cámaras de potencia acústica.",
        ],
      },
      { t: "h2", text: "Instrumental" },
      {
        t: "ul",
        items: [
          "Software de análisis SEA, elementos finitos y otros.",
          "Analizadores, sondas de intensidad, transductores y equipamiento de medida de última generación.",
        ],
      },
      { t: "h2", text: "Servicios de Sonox" },
      {
        t: "ul",
        items: [
          "Certificados acústicos para la edificación.",
          "Auditorías de actividades calificadas.",
          "Auditorías de plantas industriales.",
          "Certificación acústica de productos en laboratorio.",
        ],
      },
    ],
  },
  {
    slug: "servicios/acustica-subacuatica",
    kind: "page",
    title: "Acústica subacuática",
    description:
      "Modelos de propagación, monitorización con hidrófonos y Descriptor 11 de la Estrategia Marina para obras portuarias y actividad offshore.",
    eyebrow: "Servicios",
    h1: "El ruido que no se ve, bajo el agua",
    lede: "Dragados, obra portuaria, hinca de pilotes, tráfico marítimo o industria costera introducen ruido en el mar. Ese ruido puede alterar cómo se comunican, se orientan, se alimentan y se reproducen cetáceos, peces e invertebrados.",
    image: "subacuatica.webp",
    imageAlt: "Superficie del mar en calma",
    blocks: [
      {
        t: "p",
        text: "Si los niveles son altos o impulsivos, puede haber estrés, desplazamientos, cambios de comportamiento o daño auditivo, y puede afectar a hábitats sensibles, zonas de protección y reservas. En Europa lo regula la Directiva marco sobre la estrategia marina, en especial el Descriptor 11 (ruido y energía acústica introducida en el agua), con indicadores como el 11.1.1 de sonidos impulsivos y el 11.2.1 de ruido continuo de baja frecuencia.",
      },
      {
        t: "p",
        text: "Por eso hacen falta estudios, monitorización y mitigación para licencias, evaluaciones ambientales y responsabilidad de quien promueve la obra.",
      },
      { t: "h2", text: "Qué hace Acusttel bajo el agua" },
      {
        t: "p",
        text: "Mide, modela y mitiga el ruido de la actividad humana en el mar, con dos objetivos: reducir el impacto ecológico y ayudar a que el proyecto cumpla la legislación. La oferta va del modelo predictivo de propagación (Bellhop y otros) a la monitorización con fondeos, los indicadores del Descriptor 11, el análisis espectral, las zonas de seguridad o de exclusión para especies sensibles y las medidas correctoras.",
      },
      { t: "h2", text: "Servicios" },
      {
        t: "ul",
        items: [
          "Modelización predictiva con Bellhop y otros modelos (trazado de rayos, modos normales) para localizar zonas de impacto.",
          "Monitorización in situ con hidrófonos y estaciones de registro, continua o puntual.",
          "Cumplimiento del Descriptor 11: indicadores 11.1.1 y 11.2.1.",
          "Niveles de presión sonora, espectros y caracterización de fuentes.",
          "Zonas de exclusión y planes de avistamiento para especies sensibles.",
          "Medidas correctoras: barreras, horarios y técnicas de construcción.",
        ],
      },
      {
        t: "p",
        text: "Los informes se preparan para auditorías ambientales, licencias y estudios de impacto.",
      },
      { t: "h2", text: "Proceso de trabajo" },
      {
        t: "ol",
        items: [
          "Diagnóstico: batimetría, velocidad del sonido, temperatura y salinidad, fondo, tráfico y especies.",
          "Modelo predictivo: configuración, escenarios de fuente y validación si hay datos previos.",
          "Monitorización real con fondeos o estaciones.",
          "Análisis: niveles, espectros, comparación con indicadores y riesgos.",
          "Mitigación: medidas, coste y beneficio, protocolos y vigilancia.",
          "Informe para licencias, auditorías y, si hace falta, seguimiento.",
        ],
      },
    ],
  },
  {
    slug: "servicios/instalaciones-acusticas",
    kind: "page",
    title: "Instalaciones acústicas",
    description:
      "Insonorización industrial, actividades y pantallas acústicas. La división de instalaciones proyecta y ejecuta con garantía de resultados.",
    eyebrow: "Servicios",
    h1: "La solución, instalada",
    lede: "La división de instalaciones asesora, proyecta y ejecuta. El encargo se adapta a la necesidad real, se optimiza el coste y la inversión queda cubierta por la garantía de resultados.",
    image: "paneles.webp",
    imageAlt: "Tratamiento acústico de un estudio",
    blocks: [
      { t: "h2", text: "Industria" },
      {
        t: "ul",
        items: [
          "Aislamiento y acondicionamiento de naves.",
          "Reducción de ruido de maquinaria y de equipos de ventilación.",
        ],
      },
      { t: "h2", text: "Actividades" },
      {
        t: "ul",
        items: [
          "Instalaciones en actividades calificadas, supermercados y edificios singulares.",
          "Soluciones para el sector audiovisual.",
        ],
      },
      { t: "h2", text: "Infraestructuras · Silenzia" },
      {
        t: "ul",
        items: [
          "Pantallas acústicas para infraestructuras.",
          "Sistemas de reducción de vibraciones en superestructura de vía.",
        ],
      },
    ],
  },
  {
    slug: "servicios/desarrollo-de-productos",
    kind: "page",
    title: "Desarrollo de productos",
    description:
      "Desarrollo, optimización y certificación acústica de elementos constructivos y de maquinaria para fabricantes.",
    eyebrow: "Servicios",
    h1: "Desarrollo de productos para quien fabrica",
    lede: "La página original resume así esta línea: desarrollo, optimización y certificación de elementos constructivos y de maquinaria. El detalle del trabajo con fabricantes está en la página siguiente.",
    image: "medicion.webp",
    imageAlt: "Desarrollo de producto sobre planos",
    blocks: [
      {
        t: "links",
        items: [{ label: "Fabricantes", href: "/servicios/desarrollo-de-productos/fabricantes/" }],
      },
    ],
  },
  {
    slug: "servicios/desarrollo-de-productos/fabricantes",
    kind: "page",
    title: "Fabricantes",
    description:
      "Medición y mejora acústica de productos de construcción, automoción, consumo, maquinaria industrial y electroacústica.",
    eyebrow: "Servicios",
    h1: "Fabricantes que necesitan un dato acústico fiable",
    lede: "La normativa de ruido y la necesidad de diferenciarse cambian el diseño de productos de construcción y de bienes de equipo. Acusttel mide las características acústicas y acompaña la mejora, la nueva aplicación o el producto nuevo.",
    image: "medicion.webp",
    imageAlt: "Medición de un desarrollo de producto",
    blocks: [
      { t: "h2", text: "Campos de aplicación" },
      {
        t: "ul",
        items: ["Construcción.", "Automoción.", "Productos de consumo.", "Maquinaria industrial.", "Electroacústica."],
      },
    ],
  },
  {
    slug: "actualidad",
    kind: "news-index",
    title: "Actualidad",
    description:
      "Noticias de Acusttel: proyectos de ruido y vibraciones, mapas estratégicos, investigación y vida de la compañía.",
    eyebrow: "Actualidad",
    h1: "Lo que la compañía ha contado",
    lede: "Proyectos, adjudicaciones y artículos técnicos publicados en el blog de Acusttel. El archivo conserva las piezas en español, de la más reciente a la más antigua.",
    image: "ciudad.webp",
    imageAlt: "Ciudad",
  },
  {
    slug: "experiencias",
    kind: "projects-index",
    title: "Experiencias",
    description:
      "Proyectos de Acusttel en edificación, estudios urbanísticos, industria, infraestructuras, audiovisual y vibraciones.",
    eyebrow: "Experiencias",
    h1: "Trabajos que sostienen la trayectoria",
    lede: "Auditorios, mapas, trazados ferroviarios y viarios. La selección publica los proyectos que aparecen en la web, con el cliente, la fecha y la descripción que allí figuran.",
    image: "auditorio.webp",
    imageAlt: "Sala de gran formato con público y pantalla",
  },
  {
    slug: "portfolio-experiencias",
    kind: "projects-index",
    title: "Portfolio de experiencias",
    description: "Misma selección de proyectos de Acusttel que la página de experiencias.",
    eyebrow: "Experiencias",
    h1: "Portfolio de experiencias",
    lede: "Esta dirección existe en la web actual y muestra la misma selección de trabajos que Experiencias.",
    image: "obra.webp",
    imageAlt: "Obra de construcción",
  },
  {
    slug: "projects",
    kind: "projects-index",
    title: "Proyectos",
    description: "Archivo de proyectos de acústica y vibraciones de Acusttel.",
    eyebrow: "Experiencias",
    h1: "Archivo de proyectos",
    lede: "Fichas publicadas en la web de Acusttel, con el texto original de cada encargo.",
    image: "tren.webp",
    imageAlt: "Infraestructura ferroviaria",
  },
  {
    slug: "portfolio",
    kind: "empty-portfolio",
    title: "Portfolio",
    description: "El archivo de portfolio de la web actual no devolvía elementos. Los trabajos están en Experiencias.",
    eyebrow: "Experiencias",
    h1: "Portfolio",
    lede: "En la web actual, esta vista no devolvía elementos que coincidieran con la selección. Los trabajos publicados están en Experiencias.",
    image: "obra.webp",
    imageAlt: "Obra",
  },
  {
    slug: "contactar",
    kind: "contact",
    title: "Contactar",
    description:
      "Contacto de Acusttel en Gandia: +34 96 286 62 79, info@acusttel.com, Polígono Industrial Benieto.",
    eyebrow: "Contacto",
    h1: "Cuéntenos el caso",
    lede: "Si quiere información sobre los servicios, envíe la consulta. Los campos con asterisco son obligatorios, como en el formulario original.",
    image: "oficina.webp",
    imageAlt: "Espacio de oficina",
  },
  {
    slug: "solicitud-presupuesto",
    kind: "budget",
    title: "Presupuesto",
    description: "Solicite presupuesto a Acusttel: servicio, sector y datos de contacto. Respuesta en info@acusttel.com.",
    eyebrow: "Presupuesto",
    h1: "Pida presupuesto",
    lede: "Rellene el formulario para solicitar presupuesto por correo. Para poder atenderle, todos los campos deben completarse, como pide la web actual.",
    image: "reunion.webp",
    imageAlt: "Reunión de trabajo",
  },
  {
    slug: "politica-de-gestion-acusttel",
    kind: "legal",
    legalKey: "politica-de-gestion-acusttel",
    title: "Política de gestión",
    description:
      "Política de calidad y medio ambiente de Acusttel, referida a UNE-EN ISO 9001, UNE-EN ISO 14001 y UNE-EN ISO/IEC 17025.",
    eyebrow: "Calidad",
    h1: "Política de gestión de la calidad y del medio ambiente",
    lede: "Texto publicado por la dirección. Se conserva el contenido. Al pie, la firma original: Antonio Piñera Lucas, Iñaki Miralles Martínez y Juan Luís Aguilera de Maya.",
    image: "laboratorio.webp",
    imageAlt: "Entorno técnico",
  },
  {
    slug: "aviso-legal",
    kind: "legal",
    legalKey: "aviso-legal",
    title: "Aviso legal",
    description: "Aviso legal de Acústica y Telecomunicaciones S.L., titular de Acusttel.",
    eyebrow: "Legal",
    h1: "Aviso legal",
    lede: "Texto legal publicado en la web de Acusttel, maquetado de nuevo sin cambiar su contenido.",
  },
  {
    slug: "politica-de-privacidad",
    kind: "legal",
    legalKey: "politica-de-privacidad",
    title: "Política de privacidad",
    description: "Política de privacidad de Acústica y Telecomunicaciones S.L. (CIF B96677315).",
    eyebrow: "Legal",
    h1: "Política de privacidad y protección de datos",
    lede: "Texto publicado en la web de Acusttel.",
  },
  {
    slug: "ley-de-cookies",
    kind: "legal",
    legalKey: "ley-de-cookies",
    title: "Ley de cookies",
    description: "Política de cookies del sitio de Acusttel.",
    eyebrow: "Legal",
    h1: "Política de cookies",
    lede: "Texto publicado en la web de Acusttel. Esta demo estática no instala cookies de analítica ni de publicidad.",
  },
];

export function findPagina(slug: string): PageDoc | undefined {
  return paginas.find((p) => p.slug === slug);
}
