import { projects, type PortfolioProject } from "@/lib/portfolio";
import type { Locale } from "@/lib/locale";

interface ProjectCopy {
  category: string;
  alt: string;
  description: string;
  recognition?: string;
  sourceNote?: string;
  images: { alt: string; caption: string; note?: string }[];
}

export const englishProjectCopy: Record<string, ProjectCopy> = {
  Civix: {
    category: "PWA · Citizen reporting", alt: "Civix on mobile: citizen dashboard and urban risk map",
    description: "A citizen reporting PWA built with Next.js, React and TypeScript. It brings together geolocation, photo evidence, community support and incident tracking. The Express and PostgreSQL backend organizes reports by area and powers an urban risk index, while AI supports the validation of photo evidence.",
    recognition: "Qualified for national ExpoCiencias 2026",
    sourceNote: "Original mobile interface with local demo data: map, filters, report details and progress tracking.",
    images: [
      { alt: "Civix home with the neighborhood risk index and nearby reports", caption: "Your area's risk, at a glance" },
      { alt: "Civix mobile map with geolocated reports and category filters", caption: "Reports on the map" },
      { alt: "Civix map with the Water filter active and local demo reports", caption: "Focus on what matters in your city" },
      { alt: "Selected map incident with its category, status, risk and detail link", caption: "From the map to the report" },
      { alt: "Water shortage report with risk, community support and location", caption: "Every incident has context" },
      { alt: "Incident timeline from submission to assignment to a municipal team", caption: "From reporting to action" },
    ],
  },
  ArmonyX: {
    category: "Mobile web · Residential community", alt: "ArmonyX mobile views for residential communities",
    description: "A residential platform with Next.js and TypeScript interfaces for residents, administrators and security staff. It brings community incidents, visitor invitations and access management together around a neighborhood map. An Express and PostgreSQL API manages users, organizations and reports, with real-time communication through Socket.IO.",
    sourceNote: "Mobile views of Las Fincas Residencial: map, community reports and invitations in the local demo environment.",
    images: [
      { alt: "Resident home dashboard for Las Fincas Residencial", caption: "Your community, up to date" },
      { alt: "Las Fincas map with the existing residential footprints and original ArmonyX map style", caption: "Las Fincas, house by house" },
      { alt: "Residential map legend and layers", caption: "A map that makes sense" },
      { alt: "Community incident list with demo data", caption: "What's happening in your community" },
      { alt: "Incident detail with location and progress tracking", caption: "Every report has context" },
      { alt: "Original visitor invitation form, without creating an active access QR code", caption: "Organized access for visitors" },
    ],
  },
  Antoja: {
    category: "Flutter · Food delivery", alt: "Antoja on mobile: restaurants and menus",
    description: "A food delivery ecosystem with three experiences: customer, business and courier. Built with Flutter and Dart, it shares a codebase with Riverpod state management. A Node.js and Express API, backed by Prisma and PostgreSQL, connects menus, orders, sales and deliveries; Socket.IO communicates updates in real time.",
    sourceNote: "Original Flutter interface on mobile web, with a demo catalog and illustrative food photography created for this presentation.",
    images: [
      { alt: "Customer home with categories and demo restaurants", caption: "Find your next craving" },
      { alt: "Restaurant menu and dish selection", caption: "From the menu to your order" },
      { alt: "Customer order tracking and order history", caption: "Your orders, in one place" },
      { alt: "Business dashboard with sales, metrics and orders", caption: "Your business, in real time" },
      { alt: "Order inbox with statuses and order details", caption: "Every order, under control" },
      { alt: "Dish categories, prices and availability", caption: "A menu that's easy to manage" },
      { alt: "Revenue reports and daily sales summary", caption: "A clearer view of your sales" },
      { alt: "Delivery offers with earnings, distances and conditions", caption: "Delivery details that matter" },
      { alt: "Courier weekly earnings and activity", caption: "Your work, in numbers" },
      { alt: "Courier demo profile and account tools", caption: "Ready for the next delivery" },
    ],
  },
  Konansa: {
    category: "Professional internship · Finance", alt: "Konansa financial dashboard presented on several devices",
    description: "A personal finance platform I worked on during my internship at Wallavi. I implemented three budgeting modules with Next.js, React and MySQL in a serverless architecture, integrating REST APIs and database persistence. I worked with a team of five through sprints and production releases. The original website is no longer available; the gallery preserves its presentation.",
    images: [
      { alt: "Recomposed presentation of Konansa's original mobile interfaces and assistant", caption: "The mobile experience", note: "Presentation composition" },
      { alt: "Recomposed presentation of Konansa's original dashboards on a laptop, tablet and phone", caption: "The financial dashboard", note: "Presentation composition" },
      { alt: "Preserved screenshot of the original Konansa presentation website", caption: "The original website" },
    ],
  },
  BlueSense: {
    category: "IoT · Water quality", alt: "Original BlueSense map with water quality monitoring points",
    description: "An IoT and web prototype for visualizing river water quality information. It combines PHP and Chart.js to present measurements in charts, with an interactive Leaflet map for locating monitoring points and interpreting their indicators. The original website preserves the project presentation and its explanation of water quality statuses.",
    recognition: "Honorable mention at Hackbox Hackathon",
    sourceNote: "Screenshots of the original BlueSense website: presentation and views of the water monitoring prototype.",
    images: [
      { alt: "BlueSense monitoring points on an OpenStreetMap map", caption: "Water quality, on the map" },
      { alt: "Original BlueSense homepage with its logo and NOVA·Sense presentation", caption: "Technology to care for water" },
      { alt: "Original section describing BlueSense's technology proposal", caption: "An approach to monitoring" },
      { alt: "Original prototype legend showing Safe, Caution and Danger indicators", caption: "Every indicator has a meaning" },
    ],
  },
  "Ramírez Plaza": {
    category: "Commercial website", alt: "Ramírez Plaza shopping center presentation website",
    description: "A commercial website built with HTML, CSS and JavaScript to introduce Ramírez Plaza and showcase its businesses. It organizes a visual directory of shops, services and information about the plaza, with responsive navigation and photography to explore each space. The website uses jQuery for its interactions.",
    images: [
      { alt: "Ramírez Plaza homepage and its businesses", caption: "A place to discover local businesses" },
      { alt: "About section of the Ramírez Plaza website", caption: "Getting to know the plaza" },
      { alt: "Leori Store in the Ramírez Plaza business directory", caption: "The businesses in the plaza" },
      { alt: "Frida ice cream shop on the Ramírez Plaza website", caption: "Services with their own identity" },
    ],
  },
  "Nova-Sense": {
    category: "Monitoring · Real-time data", alt: "Nova-Sense water quality data and alerts dashboard",
    description: "A monitoring web application bringing together measurements, a map of monitoring points, alerts and water quality statistics. Its Next.js and React interface organizes data exploration and visualization in a dashboard. It also includes an assistant view for exploring system information; the gallery covers the main modules.",
    images: [
      { alt: "Nova-Sense presentation page", caption: "Information to care for water" },
      { alt: "Nova-Sense monitoring dashboard", caption: "Every measurement, in context" },
      { alt: "Nova-Sense monitoring point map", caption: "Monitoring on the map" },
      { alt: "Nova-Sense water quality alerts", caption: "Spotting changes early" },
      { alt: "Nova-Sense charts and statistics", caption: "From data to trends" },
      { alt: "Nova-Sense information assistant", caption: "A conversation with the data" },
    ],
  },
  Echo: {
    category: "Workflow automation", alt: "Echo workflow automation platform presentation",
    description: "A platform focused on automating repetitive tasks and synchronizing information. Its Next.js and React interface lets visitors explore the automation dashboard and configure synchronization through a form. The gallery documents the product presentation and public demo, with sample data to illustrate how it works.",
    sourceNote: "Product presentation and views of the public demo. The dashboard shows sample data.",
    images: [
      { alt: "Echo homepage and automation presentation", caption: "Fewer repetitive tasks" },
      { alt: "Automation dashboard in Echo's public demo", caption: "The automation dashboard" },
      { alt: "Echo synchronization setup form", caption: "Setting up a synchronization" },
    ],
  },
};

const imageRoles: Record<string, string> = { Cliente: "Customer", Negocio: "Business", Repartidor: "Courier" };
const technologyLabels: Record<string, string> = { "Visualización de datos": "Data visualization", "APIs REST": "REST APIs" };

export function getProjects(locale: Locale): PortfolioProject[] {
  if (locale === "es") return projects;

  return projects.map((project) => {
    const copy = englishProjectCopy[project.title];
    return {
      ...project,
      category: copy.category,
      alt: copy.alt,
      description: copy.description,
      recognition: copy.recognition,
      sourceNote: copy.sourceNote,
      stack: project.stack?.map((item) => technologyLabels[item] ?? item),
      images: project.images?.map((image, index) => ({ ...image, ...copy.images[index], category: image.category ? imageRoles[image.category] : undefined })),
    };
  });
}
