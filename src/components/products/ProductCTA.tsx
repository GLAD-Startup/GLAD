import { ArrowRight, Phone } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import demoBgVideo from "@/routes/videos/Orange Simple People Bridge Logo (3).mp4";

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
    <section id="demo" className="py-32 relative overflow-hidden isolate">
      {/* Background Video */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover translate-y-10 scale-110 opacity-90 dark:opacity-85 brightness-110 dark:brightness-125 min-h-full min-w-full"
        >
          <source src={demoBgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/20 dark:bg-background/30 backdrop-blur-[1px] z-10" />

        {/* 4-Side Radial Vignette & Edge Fades matching exact screenshot style */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,var(--tw-gradient-stops))] from-transparent via-background/60 to-background z-10" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 left-0 w-72 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-72 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center relative z-20">
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
