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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-[hsl(var(--primary))] text-xs font-semibold tracking-widest uppercase mb-6">
            Grades 6–8 · 6-Week Bootcamp · 12 Sessions
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Create.{" "}
            <span className="inline-block px-3 py-1 rounded bg-[hsl(var(--primary))] text-white">
              Question.
            </span>{" "}
            Inspire.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Learn to spot misinformation, build real media projects, and share your story with the world.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/create">
              <Button
                size="lg"
                className="rounded-full px-8 bg-white text-black hover:bg-white/90 font-bold text-base shadow-xl"
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
                className="rounded-full px-8 text-white border border-white/30 hover:bg-white/10 font-semibold text-base"
                data-testid="button-hero-resources"
              >
                Explore Tools
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
          <div className="w-px h-12 bg-white animate-pulse mx-auto" />
        </div>
      </section>

      {/* SECTIONS GRID */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <p className="text-center text-[hsl(var(--muted-foreground))] text-xs uppercase tracking-widest font-semibold mb-3">
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
      <footer className="border-t border-[hsl(var(--border))] py-6 px-6 text-center text-xs text-muted-foreground">
        Creative Media Production Bootcamp
      </footer>
    </div>
  );
}
