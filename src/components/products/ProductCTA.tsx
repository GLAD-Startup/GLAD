import { ArrowRight, Phone } from "lucide-react";
import demoBgVideo from "@/routes/videos/Orange Simple People Bridge Logo (3).mp4";

export function ProductCTA({
  title = "Ready to Modernize Your Brokerage?",
  sub = "See how SettleDesk brings your properties, agents, and commissions together — start your 30-day free trial now.",
  primaryCtaText = "Start 30-Day Free Trial",
  onPrimaryCtaClick,
}: {
  title?: string;
  sub?: string;
  primaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
}) {
  const calConfig = JSON.stringify({
    layout: "month_view",
    theme: "light",
  });

  return (
    <section id="demo" className="py-16 sm:py-24 md:py-32 relative overflow-hidden isolate">
      {/* Background Video with 4-side seamless fade */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover translate-y-1 scale-105 opacity-65 brightness-105 min-h-full min-w-full"
          style={{
            maskImage:
              "radial-gradient(ellipse at 50% 43%, #000 28%, rgba(0,0,0,0.9) 52%, rgba(0,0,0,0.2) 75%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 43%, #000 28%, rgba(0,0,0,0.9) 52%, rgba(0,0,0,0.2) 75%, transparent 90%)",
          }}
        >
          <source src={demoBgVideo} type="video/mp4" />
        </video>

        {/* 4-Directional Edge Fade Gradients to guarantee 100% invisible borders on all sides */}
        <div
          className="absolute inset-x-0 top-0 h-24 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to bottom, var(--background, #F7F4ED) 0%, rgba(247,244,237,0.6) 30%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-44 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to top, var(--background, #F7F4ED) 0%, rgba(247,244,237,0.8) 40%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 left-0 w-48 md:w-80 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to right, var(--background, #F7F4ED) 0%, rgba(247,244,237,0.85) 35%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-48 md:w-80 pointer-events-none z-10"
          style={{
            background:
              "linear-gradient(to left, var(--background, #F7F4ED) 0%, rgba(247,244,237,0.85) 35%, transparent 100%)",
          }}
        />

        {/* Overall soft radial vignette overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background:
              "radial-gradient(ellipse at 50% 43%, transparent 45%, rgba(247,244,237,0.45) 70%, var(--background, #F7F4ED) 92%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center relative z-20">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold font-display leading-tight">{title}</h2>
        <p className="mt-4 sm:mt-6 text-xs sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {sub}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto">
          <button onClick={onPrimaryCtaClick} className="btn-primary w-full sm:w-auto justify-center">
            <span>{primaryCtaText}</span>
            <ArrowRight className="size-4" />
          </button>
          <button
            data-cal-link="arjun-rajput-2mdsis"
            data-cal-config={calConfig}
            className="btn-secondary w-full sm:w-auto justify-center"
          >
            <Phone className="size-4" />
            <span>Book a Discovery Call</span>
          </button>
        </div>
      </div>
    </section>
  );
}
