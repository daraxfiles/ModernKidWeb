import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Video,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Globe,
  Search,
  MessageCircle,
  AlertTriangle,
  Eye,
  FileQuestion,
  Smartphone,
  TrendingUp,
  UserCheck,
  Link2,
  Megaphone,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import nikeAdImg from "@assets/dddd_1764901434643.png";
import legoAdImg from "@assets/cccc_1764901434643.png";

const goals = [
  { icon: Shield, title: "Media Literacy", desc: "Evaluate and analyze media critically" },
  { icon: Lightbulb, title: "Critical Thinking", desc: "Question sources and verify information" },
  { icon: Users, title: "Collaboration", desc: "Work together on creative projects" },
  { icon: Video, title: "Creative Expression", desc: "Tell stories that matter to you" },
  { icon: Target, title: "Problem Solving", desc: "Address societal issues through media" },
  { icon: Heart, title: "Digital Citizenship", desc: "Use media responsibly and ethically" },
];

const infoSources = [
  { icon: TrendingUp, source: "Social Media", desc: "YouTube, TikTok, Instagram, and Snapchat", pct: "84%" },
  { icon: Search, source: "Search Engines", desc: "Google and other search engines for research", pct: "72%" },
  { icon: Users, source: "Friends & Family", desc: "Peers sharing through group chats and DMs", pct: "67%" },
  { icon: MessageCircle, source: "Messaging Apps", desc: "Discord, WhatsApp, and iMessage", pct: "58%" },
  { icon: Globe, source: "News Websites", desc: "Online news sites, via social links", pct: "31%" },
];

const verifyMethods = [
  { icon: Search, method: "Search it up", desc: "Look for the same story on Google" },
  { icon: UserCheck, method: "Ask trusted adults", desc: "Check with parents or teachers" },
  { icon: Link2, method: "Check the source", desc: "Look at who posted it and their profile" },
  { icon: Eye, method: "Look for evidence", desc: "Photos, videos, or links to support claims" },
  { icon: MessageCircle, method: "Ask friends", desc: "Discuss with peers who may know" },
  { icon: FileQuestion, method: "Fact-check sites", desc: "Snopes or PolitiFact (less common)" },
];

const programWeeks = [
  {
    label: "Weeks 1–2",
    title: "Explore & Learn",
    variant: "default" as const,
    items: [
      "Develop Technobiography — explore your media usage and tech access",
      "Select and evaluate media sources for credibility",
      'Play games like "Fake it to Make it" and "Lamboozled"',
      "Learn to distinguish accurate from false information",
    ],
  },
  {
    label: "Week 3",
    title: "Deconstruct & Construct",
    variant: "secondary" as const,
    items: [
      "Explore how others create media",
      "Learn techniques for creating memes, ads, and infographics",
      "Plan your story with characters, themes, and conflict",
    ],
  },
  {
    label: "Weeks 4–5",
    title: "Create & Showcase",
    variant: "outline" as const,
    items: [
      "Produce your media project with peer and researcher support",
      "Refine and improve based on feedback",
      "Present final project at the showcase",
      "Build a digital portfolio to continue adding to",
    ],
  },
];

const adExamples = [
  {
    img: nikeAdImg,
    alt: "Nike Air advertisement example",
    badge: "Classic Ad",
    badgeBg: "bg-[hsl(var(--chart-3))]",
    title: "Analyzing Messages",
    question: "What message is this ad sending? Who is the target audience? What techniques are used to persuade?",
  },
  {
    img: legoAdImg,
    alt: "LEGO advertisement example",
    badge: "Brand Ad",
    badgeBg: "bg-[hsl(var(--primary))]",
    title: "Understanding Branding",
    question: "How do brands build emotional connections? What values are being associated with the product?",
  },
];

export default function About() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6 border-b border-border/60">
        <div className="max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 font-mono text-xs tracking-widest uppercase">
            Media Literacy Program
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
            About the<br />
            <span className="gradient-text">Creative Media Bootcamp</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            A research-based afterschool program helping middle schoolers develop
            media literacy skills while creating meaningful content about issues
            they care about.
          </p>

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { num: "6", label: "Weeks" },
              { num: "12", label: "Sessions" },
              { num: "15–20", label: "Students" },
              { num: "6–8", label: "Grade Range" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card px-5 py-4">
                <p className="text-3xl font-black text-foreground">{stat.num}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">

          {/* LEFT COLUMN */}
          <div className="space-y-20">

            {/* What Is This Study */}
            <section>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">The Research</p>
              <h2 className="text-3xl font-bold mb-5">What Is This Study?</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We're looking for 15–20 middle schoolers aged 12–15 years (grades 6–8) to participate
                  in an exciting program examining how creative media production can help students learn
                  to use credible information.
                </p>
                <p>
                  This afterschool camp encourages adolescents to collaboratively design and produce media
                  about issues they care about — to help make their voices heard and solve immediate local
                  and societal problems. We are also interested in learning how they address misinformation
                  they encounter during their media creation.
                </p>
              </div>
            </section>

            {/* Goals */}
            <section>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">What We Teach</p>
              <h2 className="text-3xl font-bold mb-6">Goals of the Bootcamp</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {goals.map((goal, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -2 }}
                    className="flex items-start gap-4 p-4 rounded-xl border border-border bg-card hover:border-[hsl(var(--primary)/0.4)] hover:bg-[hsl(var(--primary)/0.03)] transition-all"
                    data-testid={`card-goal-${i}`}
                  >
                    <div className="h-9 w-9 rounded-lg bg-[hsl(var(--primary)/0.12)] flex items-center justify-center shrink-0">
                      <goal.icon className="h-4 w-4 text-[hsl(var(--primary))]" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{goal.title}</p>
                      <p className="text-sm text-muted-foreground">{goal.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Where Students Get Info */}
            <section>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                <Smartphone className="inline h-3 w-3 mr-1" />
                Media Habits
              </p>
              <h2 className="text-3xl font-bold mb-3">Where Middle Schoolers Get Their Information</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Understanding how students access news and information online is crucial
                for teaching media literacy. Here's what research tells us:
              </p>

              {/* Sources with bar visualization */}
              <div className="space-y-3 mb-10" data-testid="card-info-sources">
                {infoSources.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card" data-testid={`info-source-${i}`}>
                    <div className="h-9 w-9 rounded-lg bg-[hsl(var(--primary)/0.12)] flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-[hsl(var(--primary))]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-semibold text-sm">{item.source}</p>
                        <p className="font-black text-[hsl(var(--primary))] text-sm tabular-nums">{item.pct}</p>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]"
                          initial={{ width: 0 }}
                          whileInView={{ width: item.pct }}
                          transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* How students verify */}
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-[hsl(var(--accent))]" />
                How Students Check for Misinformation
              </h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-6" data-testid="card-verify-misinfo">
                {verifyMethods.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg border border-border bg-card/60" data-testid={`verify-method-${i}`}>
                    <div className="h-8 w-8 rounded-lg bg-[hsl(var(--accent)/0.12)] flex items-center justify-center shrink-0">
                      <item.icon className="h-3.5 w-3.5 text-[hsl(var(--accent))]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.method}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Warning callout */}
              <div className="flex items-start gap-4 p-5 rounded-xl border border-[hsl(var(--accent)/0.3)] bg-[hsl(var(--accent)/0.06)]" data-testid="card-misinfo-warning">
                <div className="h-10 w-10 rounded-lg bg-[hsl(var(--accent)/0.15)] flex items-center justify-center shrink-0">
                  <AlertTriangle className="h-5 w-5 text-[hsl(var(--accent))]" />
                </div>
                <div>
                  <h4 className="font-bold text-[hsl(var(--accent))] mb-1">Why This Matters</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Studies show that only <strong className="text-foreground">33% of middle schoolers</strong> can
                    accurately identify sponsored content, and many struggle to distinguish satire from real news.
                    Our bootcamp teaches critical evaluation skills that help students become more discerning
                    consumers of media.
                  </p>
                </div>
              </div>
            </section>

            {/* Ad Analysis */}
            <section>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
                <Megaphone className="inline h-3 w-3 mr-1" />
                Case Studies
              </p>
              <h2 className="text-3xl font-bold mb-3">Analyzing Media: Advertisements</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Students learn to deconstruct and analyze media, including advertisements.
                Here are examples of the types of media we explore together:
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {adExamples.map((ad, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -3 }}
                    className="rounded-2xl border border-border bg-card overflow-hidden"
                    data-testid={i === 0 ? "card-ad-nike" : "card-ad-lego"}
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={ad.img}
                        alt={ad.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <Badge className={`mb-3 text-white border-0 text-xs ${ad.badgeBg}`}>
                        {ad.badge}
                      </Badge>
                      <h4 className="font-bold mb-2">{ad.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">"{ad.question}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Program Structure */}
            <section>
              <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">The Journey</p>
              <h2 className="text-3xl font-bold mb-6">Program Structure</h2>
              <div className="space-y-3">
                {programWeeks.map((week, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-border bg-card overflow-hidden"
                    data-testid={`card-week-${i}`}
                  >
                    <div className="flex items-center gap-3 px-5 py-4 border-b border-border/60">
                      <Badge variant={week.variant} className="text-xs">{week.label}</Badge>
                      <h3 className="font-bold text-base">{week.title}</h3>
                    </div>
                    <ul className="p-5 space-y-2">
                      {week.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Accordion */}
            <section className="space-y-3">
              {[
                {
                  id: "students",
                  icon: GraduationCap,
                  title: "What Students Will Gain",
                  items: [
                    "Skills to identify and evaluate credible information online",
                    "Experience creating various media formats (video, audio, images)",
                    "Collaboration and teamwork skills",
                    "A digital portfolio showcasing their creative work",
                    "Understanding of how media shapes public opinion",
                  ],
                },
                {
                  id: "parents",
                  icon: Heart,
                  title: "What Parents Should Know",
                  items: [
                    "This is an approved educational research program",
                    "All activities are supervised by trained researchers",
                    "Your child will develop critical digital citizenship skills",
                    "Participation is voluntary and can be withdrawn at any time",
                    "Students will have a tangible portfolio of work to keep",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border bg-card overflow-hidden"
                >
                  <button
                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-3"
                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                    data-testid={`accordion-${item.id}`}
                  >
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-[hsl(var(--primary))]" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <motion.div animate={{ rotate: openAccordion === item.id ? 90 : 0 }} transition={{ duration: 0.2 }}>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openAccordion === item.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <ul className="px-5 pb-5 space-y-2 border-t border-border/60 pt-4">
                          {item.items.map((pt, j) => (
                            <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                              <CheckCircle className="h-4 w-4 text-[hsl(var(--accent))] shrink-0 mt-0.5" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-5 lg:sticky lg:top-24">

            {/* Key Details card */}
            <div className="rounded-2xl border border-border bg-card p-5" data-testid="card-key-details">
              <div className="flex items-center gap-2 mb-5">
                <BookOpen className="h-4 w-4 text-[hsl(var(--primary))]" />
                <h3 className="font-bold">Key Details</h3>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Users, label: "Who", value: "15–20 middle schoolers, Grades 6–8 (ages 12–15)" },
                  { icon: Calendar, label: "Duration", value: "6 weeks, 12 sessions (2× per week)" },
                  { icon: Clock, label: "Time", value: "~1 hour per session (afterschool)" },
                  { icon: MapPin, label: "Location", value: "Local Middle School" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="h-8 w-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                      <item.icon className="h-3.5 w-3.5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-[hsl(var(--primary))] p-5 text-white">
              <Lightbulb className="h-7 w-7 mb-3 opacity-80" />
              <h3 className="font-bold text-lg mb-2">Ready to create?</h3>
              <p className="text-sm opacity-80 mb-4 leading-relaxed">
                Use our 7-step wizard to plan, produce, and share your media project.
              </p>
              <Link href="/create">
                <Button
                  className="w-full bg-white text-[hsl(var(--primary))] hover:bg-white/90 font-bold"
                  data-testid="button-cta-create"
                >
                  Start Your Project
                  <ArrowRight className="h-4 w-4 ml-1.5" />
                </Button>
              </Link>
            </div>

            {/* Researchers */}
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-bold mb-4 flex items-center gap-2">
                <UserCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                Research Team
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Dr. Sarah Chen", role: "Principal Investigator" },
                  { name: "Dr. Marcus Rivera", role: "Co-Investigator" },
                  { name: "Dr. Amara Johnson", role: "Media Literacy Expert" },
                ].map((r) => (
                  <div key={r.name} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[hsl(var(--primary)/0.12)] flex items-center justify-center shrink-0">
                      <span className="text-[hsl(var(--primary))] text-xs font-bold">
                        {r.name.split(" ").map(n => n[0]).slice(1).join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule quick link */}
            <Link href="/schedule">
              <motion.div
                whileHover={{ x: 3 }}
                className="rounded-2xl border border-border bg-card p-5 flex items-center justify-between cursor-pointer hover:border-[hsl(var(--primary)/0.4)] transition-colors"
                data-testid="link-schedule"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-[hsl(var(--primary))]" />
                  <div>
                    <p className="font-semibold text-sm">View Full Schedule</p>
                    <p className="text-xs text-muted-foreground">All 12 sessions detailed</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </motion.div>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
}
