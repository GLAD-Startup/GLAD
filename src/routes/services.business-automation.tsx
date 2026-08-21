import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services.data";
import { ServicePage, buildServiceHead } from "@/components/site/ServicePage";

const service = services.find((s) => s.slug === "business-automation")!;

export const Route = createFileRoute("/services/business-automation")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
