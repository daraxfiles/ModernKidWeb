import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Shield,
  Eye,
  Palette,
  Video,
  ArrowRight,
  CheckCircle,
  Gamepad2,
  BookOpen,
  Target,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const modules = [
  {
    id: "week1",
    week: "Week 1",
    num: "01",
    title: "Media Use & Technobiography",
    description: "Explore your relationship with media and technology",
    icon: Search,
    accent: "hsl(var(--primary))",
    topics: [
      { title: "Introduction to the Bootcamp", description: "Meet the researchers and fellow participants", activities: ["Icebreaker activities", "Team building exercises"] },
      { title: "Your Technobiography", description: "Explore your daily media usage and tech tool preferences", activities: ["Self-assessment surveys", "Media diary creation"] },
      { title: "Media's Role in Society", description: "Understand how media shapes opinions and society", activities: ["Video discussions", "Group brainstorming"] },
      { title: "Societal Issues Exploration", description: "Identify issues you care about and want to address", activities: ["Group brainstorming", "Issue mapping"] },
    ],
    games: ["Fake it to Make it"],
    skills: ["Self-reflection", "Media Awareness", "Collaboration"],
  },
  {
    id: "week2",
    week: "Week 2",
    num: "02",
    title: "Information Credibility & Misinformation",
    description: "Learn to identify and combat false information",
    icon: Shield,
    accent: "hsl(var(--accent))",
    topics: [
      { title: "Types of Misinformation", description: "Learn about different forms of false information", activities: ["Video lessons", "Examples analysis"] },
      { title: "Investigating Credibility", description: "Develop skills to verify information sources", activities: ["Source evaluation exercises", "Fact-checking practice"] },
      { title: "Media Credibility Assessment", description: "Learn to evaluate whether media can be trusted", activities: ["Credibility investigation activity", "Discussion"] },
      { title: "Planning Your Story", description: "Begin planning a story about an issue you care about", activities: ["Story brainstorming", "Initial story planning"] },
    ],
    games: ["Lamboozled"],
    skills: ["Critical Thinking", "Research Skills", "Fact-Checking"],
  },
  {
    id: "week3",
    week: "Week 3",
    num: "03",
    title: "Media Deconstruction & Construction",
    description: "Analyze and create different types of media",
    icon: Eye,
    accent: "hsl(var(--chart-3))",
    topics: [
      { title: "Deconstructing Media", description: "Break down how media messages are crafted", activities: ["Media analysis exercises", "Video deconstruction"] },
      { title: "Constructing Media", description: "Learn the basics of creating compelling media", activities: ["Advertisement creation", "Media construction techniques"] },
      { title: "Elaborating Your Story", description: "Add depth to your story with characters, themes, and conflict", activities: ["Story development", "Character creation"] },
      { title: "Choosing Your Format", description: "Select the best media format for your story", activities: ["Format exploration", "Design planning"] },
    ],
    games: [],
    skills: ["Media Analysis", "Creative Design", "Storytelling"],
  },
  {
    id: "week4-5",
    week: "Weeks 4–5",
    num: "04",
    title: "Media Production & Showcase",
    description: "Create, refine, and present your media project",
    icon: Video,
    accent: "hsl(var(--chart-4))",
    topics: [
      { title: "Media Creation", description: "Start building your media project", activities: ["Production work time", "Peer collaboration"] },
      { title: "Refinement & Feedback", description: "Improve your project based on feedback", activities: ["Peer review sessions", "Project iteration"] },
      { title: "Final Presentations", description: "Present your work to the group", activities: ["Presentation practice", "Q&A sessions"] },
      { title: "Showcase & Celebration", description: "Share your completed project at the final showcase", activities: ["Project showcase", "Portfolio building"] },
    ],
    games: [],
    skills: ["Production Skills", "Presentation", "Reflection"],
  },
];

const keyConcepts = [
  { icon: Search, title: "Technobiography", desc: "Your personal media usage history" },
  { icon: Shield, title: "Source Verification", desc: "Checking if information is credible" },
  { icon: Eye, title: "Media Deconstruction", desc: "Breaking down how media is made" },
  { icon: Palette, title: "Media Construction", desc: "Creating your own media content" },
];

export default function Modules() {
  const [active, setActive] = useState("week1");
  const current = modules.find((m) => m.id === active)!;

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 border-b border-border/60">
        <div className="max-w-5xl mx-auto">
          <Badge variant="secondary" className="mb-6 font-mono text-xs tracking-widest uppercase">
            Learning Modules
          </Badge>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-5">
            What You'll<br />
            <span className="gradient-text">Learn</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Four weekly modules, each building on the last — from understanding media
            to producing and sharing your own.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-14">

        {/* Week selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {modules.map((mod) => {
            const Icon = mod.icon;
            const isActive = active === mod.id;
            return (
              <motion.button
                key={mod.id}
                onClick={() => setActive(mod.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? "border-[hsl(var(--primary)/0.5)] bg-[hsl(var(--primary)/0.06)]"
                    : "border-border bg-card hover:border-[hsl(var(--primary)/0.25)]"
                }`}
                data-testid={`tab-${mod.id}`}
              >
                <div className={`flex items-center gap-2 ${isActive ? "text-[hsl(var(--primary))]" : "text-muted-foreground"}`}>
                  <Icon className="h-4 w-4" />
                  <span className="text-[10px] font-mono uppercase tracking-widest">{mod.week}</span>
                </div>
                <p className={`text-sm font-semibold leading-tight ${isActive ? "text-foreground" : "text-muted-foreground"}`}>
                  {mod.title}
                </p>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[hsl(var(--primary))]"
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Active module content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {/* Module header */}
            <div className="flex items-end gap-5 mb-8">
              <span
                className="text-[5rem] font-black leading-none tabular-nums select-none shrink-0"
                style={{ color: current.accent, opacity: 0.15, lineHeight: 1 }}
              >
                {current.num}
              </span>
              <div className="pb-1">
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">
                  {current.week}
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
                  {current.title}
                </h2>
                <p className="text-muted-foreground mt-1">{current.description}</p>
              </div>
            </div>

            {/* Topics grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8" data-testid={`card-module-${active}`}>
              {current.topics.map((topic, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="p-5 rounded-xl border border-border bg-card"
                >
                  <h3 className="font-semibold mb-1 text-foreground">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{topic.description}</p>
                  <div className="space-y-1.5">
                    {topic.activities.map((act, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3.5 w-3.5 text-[hsl(var(--accent))] shrink-0" />
                        {act}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Games + Skills row */}
            <div className="flex flex-col sm:flex-row gap-5">
              {current.games.length > 0 && (
                <div className="flex-1 p-5 rounded-xl border border-border bg-card">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                    <Gamepad2 className="h-4 w-4 text-[hsl(var(--primary))]" />
                    Interactive Games
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {current.games.map((game, i) => (
                      <Badge key={i} variant="secondary" className="gap-1.5">
                        <Gamepad2 className="h-3 w-3" />
                        {game}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex-1 p-5 rounded-xl border border-border bg-card">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
                  <Target className="h-4 w-4 text-[hsl(var(--primary))]" />
                  Skills Developed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Divider */}
        <div className="h-px bg-border my-14" />

        {/* Bottom two cards */}
        <div className="grid md:grid-cols-2 gap-5">

          {/* Games */}
          <div className="p-6 rounded-2xl border border-border bg-card" data-testid="card-games">
            <div className="flex items-center gap-2 mb-5">
              <Gamepad2 className="h-5 w-5 text-[hsl(var(--primary))]" />
              <h3 className="font-bold">Educational Games</h3>
            </div>
            <div className="space-y-4">
              {[
                { title: "Fake it to Make it", desc: "Create fake news to understand how misinformation spreads. Learn the tactics used to deceive people." },
                { title: "Lamboozled", desc: "Test your ability to spot fake information and learn strategies for identifying misleading content." },
              ].map((game) => (
                <div key={game.title} className="p-4 rounded-xl bg-secondary/50">
                  <p className="font-semibold text-sm mb-1">{game.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{game.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Concepts */}
          <div className="p-6 rounded-2xl border border-border bg-card" data-testid="card-key-concepts">
            <div className="flex items-center gap-2 mb-5">
              <BookOpen className="h-5 w-5 text-[hsl(var(--primary))]" />
              <h3 className="font-bold">Key Concepts</h3>
            </div>
            <div className="space-y-3">
              {keyConcepts.map((c, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-lg bg-[hsl(var(--primary)/0.1)] flex items-center justify-center shrink-0">
                    <c.icon className="h-4 w-4 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{c.title}</p>
                    <p className="text-xs text-muted-foreground">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link href="/create">
            <Button size="lg" className="gap-2 rounded-full px-8" data-testid="button-start-project">
              Start Your Project
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
