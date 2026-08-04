import { ArrowRight, Phone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import demoBgVideo from "@/routes/images/settledesk/videos/request a demo background.mp4";

export function ProductCTA({
  title = "Ready to Modernize Your Brokerage?",
  sub = "See how SettleDesk brings your properties, agents, and commissions together — start your 30-day free trial now.",
  onPrimaryCtaClick,
}: {
  title?: string;
  sub?: string;
  onPrimaryCtaClick?: () => void;
}) {
  const { theme } = useTheme();
  const calConfig = JSON.stringify({
    layout: "month_view",
    theme:
      theme === "dark" ||
      (theme === "system" &&
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light",
  });

  return (
    <section id="demo" className="py-32 relative border-t border-border overflow-hidden">
      {/* Background Video */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30">
        <video
          src={demoBgVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold font-display leading-tight">{title}</h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button onClick={onPrimaryCtaClick} className="btn-primary">
            <span>Start 30-Day Free Trial</span>
            <ArrowRight className="size-4" />
          </button>
          <button
            data-cal-link="arjun-rajput-2mdsis"
            data-cal-config={calConfig}
            className="btn-secondary"
          >
            <Phone className="size-4" />
            <span>Book a Discovery Call</span>
          </button>
        </div>
      </div>
    </section>
  );
}
