export function LogoStrip() {
  const logos = [
    { name: "Stripe", slug: "stripe" },
    { name: "Vercel", slug: "vercel", invertDark: true },
    { name: "Supabase", slug: "supabase" },
    { name: "OpenAI", slug: "openai", invertDark: true, url: "https://cdn.worldvectorlogo.com/logos/openai-2.svg" },
    { name: "Shopify", slug: "shopify" },
    { name: "Figma", slug: "figma" },
    { name: "Linear", slug: "linear" },
    { name: "Notion", slug: "notion", invertDark: true },
    { name: "Slack", slug: "slack", url: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" },
    { name: "Intercom", slug: "intercom" },
  ];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Scrolling track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="mx-8 flex items-center gap-2.5 text-muted-foreground/60 select-none group"
          >
            <img 
              src={logo.url || `https://cdn.simpleicons.org/${logo.slug}`} 
              alt={logo.name} 
              className={`size-5 transition-all duration-300 ${logo.invertDark ? 'dark:invert' : ''}`}
            />
            <span className="text-sm font-medium tracking-wide group-hover:text-foreground transition-colors duration-300">{logo.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 