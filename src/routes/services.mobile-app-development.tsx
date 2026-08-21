import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services.data";
import { ServicePage, buildServiceHead } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "mobile-app-development")!;

export const Route = createFileRoute("/services/mobile-app-development")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
