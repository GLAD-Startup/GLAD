import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services.data";
import { ServicePage, buildServiceHead } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "ai-solutions")!;

export const Route = createFileRoute("/services/ai-solutions")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
