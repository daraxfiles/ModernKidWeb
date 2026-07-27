import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Wrench, ImagePlay, CalendarDays, PenLine } from "lucide-react";
import heroVideo from "@assets/Aurora_1764618024141.mp4";

const sections = [
  {
    href: "/resources",
    icon: Wrench,
    label: "Tools & Resources",
    desc: "Apps, games, and videos curated for middle schoolers.",
  },
  {
    href: "/create",
    icon: PenLine,
    label: "Create Your Project",
    desc: "A 7-step wizard that takes your idea from concept to screen.",
  },
  {
    href: "/gallery",
    icon: ImagePlay,
    label: "Gallery",
    desc: "Browse completed projects from bootcamp participants.",
  },
  {
    href: "/schedule",
    icon: CalendarDays,
    label: "Schedule",
    desc: "Explore all 12 sessions across the 6-week program.",
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Hard dark overlay — let type dominate */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 px-6 max-w-5xl mx-auto w-full">
          {/* Monospace system label */}
          <p className="text-[hsl(var(--primary))] text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-8 opacity-90">
            ⌨ &nbsp;GRADES 6–8 &nbsp;·&nbsp; 6-WEEK PROGRAM &nbsp;·&nbsp; 12 SESSIONS
          </p>

          {/* Brand wordmark as hero headline */}
          <div className="mb-4">
            <h1 className="font-black leading-[0.88] tracking-tight font-mono">
              <span className="block text-[clamp(3.5rem,10vw,8rem)] text-white">
                CTRL+ALT+
              </span>
              <span className="block text-[clamp(3.5rem,10vw,8rem)] text-[hsl(var(--primary))]">
                MEDIA
              </span>
            </h1>
          </div>

          {/* Hard-reset manifesto line */}
          <div className="border-l-4 border-[hsl(var(--primary))] pl-4 mb-8 max-w-2xl">
            <p className="text-white/90 text-lg md:text-xl font-semibold leading-snug">
              Hit the hard-reset on a broken media landscape.
            </p>
            <p className="text-white/55 text-sm md:text-base mt-1 leading-relaxed">
              Question narratives. Build alternative media. Use AI. Speak truth to power — boldly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link href="/create">
              <Button
                size="lg"
                className="rounded-none px-8 bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--primary)/0.85)] font-bold text-base tracking-wide uppercase font-mono shadow-xl shadow-[hsl(var(--primary)/0.3)]"
                data-testid="button-hero-create"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                size="lg"
                variant="ghost"
                className="rounded-none px-8 text-white border border-white/30 hover:bg-white/10 hover:border-white/60 font-semibold text-base uppercase font-mono tracking-wide"
                data-testid="button-hero-resources"
              >
                Explore Tools
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
          <div className="w-px h-12 bg-white animate-pulse mx-auto" />
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-center text-[hsl(var(--muted-foreground))] text-[10px] uppercase tracking-[0.25em] font-mono font-semibold mb-3">
            What's inside
          </p>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mb-14">
            Everything you need to{" "}
            <span className="gradient-text">make media</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {sections.map(({ href, icon: Icon, label, desc }) => (
              <Link key={href} href={href}>
                <div
                  data-testid={`card-section-${label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group relative flex items-start gap-5 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-6 cursor-pointer transition-all duration-200 hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.05)] hover:-translate-y-0.5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[hsl(var(--primary)/0.15)]">
                    <Icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-foreground mb-1">{label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                  <ArrowRight className="shrink-0 h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all mt-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[hsl(var(--border))] py-6 px-6 text-center text-xs text-muted-foreground font-mono">
        CTRL+ALT+MEDIA · Hit Reset.
      </footer>
    </div>
  );
}
