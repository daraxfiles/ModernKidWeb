import { Link } from "wouter";
import {
  GraduationCap,
  Target,
  Heart,
  Shield,
  Lightbulb,
  Video,
  Users,
  TrendingUp,
  Search,
  MessageCircle,
  Globe,
  UserCheck,
  Link2,
  Eye,
  FileQuestion,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Calendar,
  Clock,
} from "lucide-react";

import nikeAdImg from "@assets/dddd_1764901434643.png";
import legoAdImg from "@assets/cccc_1764901434643.png";

const stats = [
  { value: "6", label: "Weeks" },
  { value: "12", label: "Sessions" },
  { value: "6–8", label: "Grade Range" },
  { value: "~1hr", label: "Per Session" },
];

const goals = [
  { icon: Shield, title: "Media Literacy", desc: "Evaluate and analyze media critically using proven frameworks.", accent: "text-indigo-400" },
  { icon: Lightbulb, title: "Critical Thinking", desc: "Question sources, verify claims, and resist manipulation.", accent: "text-amber-400" },
  { icon: Users, title: "Collaboration", desc: "Work alongside peers on real creative projects.", accent: "text-emerald-400" },
  { icon: Video, title: "Creative Expression", desc: "Tell stories that matter through multiple media formats.", accent: "text-cyan-400" },
  { icon: Target, title: "Problem Solving", desc: "Address societal issues through purposeful media creation.", accent: "text-pink-400" },
  { icon: Heart, title: "Digital Citizenship", desc: "Use technology responsibly, ethically, and with intention.", accent: "text-violet-400" },
];

const infoSources = [
  { icon: TrendingUp, source: "Social Media", desc: "YouTube, TikTok, Instagram, Snapchat", pct: 84 },
  { icon: Search, source: "Search Engines", desc: "Google and other search engines", pct: 72 },
  { icon: Users, source: "Friends & Family", desc: "Peers sharing through group chats and DMs", pct: 67 },
  { icon: MessageCircle, source: "Messaging Apps", desc: "Discord, WhatsApp, iMessage", pct: 58 },
  { icon: Globe, source: "News Websites", desc: "Online news sites, via social links", pct: 31 },
];

const phases = [
  { num: "01", label: "Weeks 1–2", title: "Explore & Learn", accent: "text-indigo-400", items: ["Develop Technobiography and explore your media habits", "Evaluate media sources for credibility and bias", 'Play "Fake it to Make it" and "Lamboozled"', "Distinguish accurate from false information"] },
  { num: "02", label: "Week 3", title: "Deconstruct & Construct", accent: "text-emerald-400", items: ["Analyze how others build media messages", "Create your own advertisement or infographic", "Develop a societal issue you care about", "Choose your media format for your project"] },
  { num: "03", label: "Weeks 4–5", title: "Produce & Refine", accent: "text-pink-400", items: ["Begin creating your media project", "Receive peer feedback and iterate", "Practice presenting your work clearly", "Collaborate with your team"] },
  { num: "04", label: "Week 6", title: "Share & Celebrate", accent: "text-amber-400", items: ["Present your completed project", "Showcase your work to the group", "Build your digital portfolio", "Reflect on what you learned"] },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#0f0f12] font-sans selection:bg-indigo-500/30 overflow-x-hidden pt-20">

      {/* ── HERO ── */}
      <header className="px-8 py-16 md:py-24 border-b border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-violet-400 font-mono tracking-widest uppercase text-sm mb-4">
              Media Literacy Program
            </p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
              About the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f0f12] to-[#0f0f12]/25">
                Bootcamp
              </span>
            </h1>
            <p className="text-lg text-[#0f0f12]/50 max-w-xl font-light">
              A research-based afterschool program helping middle schoolers develop media literacy while creating content about issues they care about.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 gap-px bg-black/10 shrink-0 border border-black/10">
            {stats.map((s) => (
              <div key={s.label} className="bg-[#edeae2] px-8 py-6">
                <p className="text-4xl font-black tracking-tighter mb-1">{s.value}</p>
                <p className="text-[#0f0f12]/40 font-mono text-xs uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">

        {/* ── SECTION 01: THE STUDY ── */}
        <section className="border-b border-black/10">
          <div className="px-8 md:px-12 py-8 md:py-16 border-b border-black/10">
            <div className="flex items-end gap-4">
              <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">01</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -ml-2 relative z-10 flex items-center gap-4">
                The Study <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-violet-400" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">
            <div className="md:col-span-8 bg-[#edeae2] p-8 md:p-12">
              <div className="bg-black/5 border border-black/10 rounded-full px-4 py-1 text-xs font-mono tracking-wider text-[#0f0f12]/60 uppercase inline-block mb-6">
                Department of Education & Human Development
              </div>
              <p className="text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-6">
                What is This Research About?
              </p>
              <p className="text-[#0f0f12]/55 text-lg font-light leading-relaxed mb-5">
                This study examines how participating in a creative media production program can help middle school students build skills in identifying and addressing misinformation in their everyday lives.
              </p>
              <p className="text-[#0f0f12]/45 font-light leading-relaxed">
                Researchers are exploring whether students who produce media — videos, podcasts, infographics — develop a stronger understanding of how media works, how it can be manipulated, and how to think critically about the information they encounter.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col gap-px bg-black/10">
              {[
                { icon: Calendar, label: "Duration", value: "6 weeks, 2× per week" },
                { icon: Clock, label: "Session length", value: "Approximately 1 hour" },
                { icon: GraduationCap, label: "Grade level", value: "Grades 6, 7, and 8" },
                { icon: Users, label: "Group size", value: "15–20 students" },
              ].map((item) => (
                <div key={item.label} className="bg-[#edeae2] p-6 flex-1 flex items-start gap-4">
                  <item.icon className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/35 mb-1">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 02: GOALS ── */}
        <section className="border-b border-black/10">
          <div className="px-8 md:px-12 py-8 md:py-16 border-b border-black/10">
            <div className="flex items-end gap-4">
              <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">02</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -ml-2 relative z-10 flex items-center gap-4">
                Goals <Target className="w-8 h-8 md:w-12 md:h-12 text-amber-400" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
            {goals.map((goal, i) => (
              <div key={i} className="bg-[#edeae2] p-8 md:p-10 hover:bg-[#e6e2d8] transition-colors group min-h-[200px] flex flex-col justify-between" data-testid={`card-goal-${i}`}>
                <goal.icon className={`w-6 h-6 ${goal.accent} mb-6`} />
                <div>
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{goal.title}</h3>
                  <p className="text-[#0f0f12]/50 font-light">{goal.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── SECTION 03: WHERE TEENS GET NEWS ── */}
        <section className="border-b border-black/10">
          <div className="px-8 md:px-12 py-8 md:py-16 border-b border-black/10">
            <div className="flex items-end gap-4">
              <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">03</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -ml-2 relative z-10 flex items-center gap-4">
                The Media <TrendingUp className="w-8 h-8 md:w-12 md:h-12 text-pink-400" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">

            {/* Sources list */}
            <div className="md:col-span-7 bg-[#edeae2] p-8 md:p-12">
              <p className="text-[#0f0f12]/40 font-mono text-xs uppercase tracking-widest mb-2">Where teens get their news</p>
              <h3 className="text-3xl font-bold mb-8 tracking-tight">
                The Platforms Shaping What Young People Believe
              </h3>
              <div className="space-y-6">
                {infoSources.map((src, i) => (
                  <div key={i} className="group" data-testid={`source-${i}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <src.icon className="w-4 h-4 text-pink-400" />
                        <span className="font-semibold">{src.source}</span>
                        <span className="text-[#0f0f12]/35 text-sm font-light hidden sm:inline">{src.desc}</span>
                      </div>
                      <span className="text-2xl font-black text-pink-400/60 group-hover:text-pink-400 transition-colors tabular-nums">{src.pct}%</span>
                    </div>
                    <div className="h-1.5 bg-black/8 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-pink-400/50 rounded-full group-hover:bg-pink-400/80 transition-colors"
                        style={{ width: `${src.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ad images */}
            <div className="md:col-span-5 flex flex-col gap-px bg-black/10">
              <div className="relative overflow-hidden group flex-1 min-h-[240px]">
                <img src={nikeAdImg} alt="Nike Ad Analysis" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block bg-pink-500/80 text-white text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full mb-2">Ad Analysis</span>
                  <p className="text-white text-sm font-medium">Deconstructing persuasion techniques</p>
                </div>
              </div>
              <div className="relative overflow-hidden group flex-1 min-h-[240px]">
                <img src={legoAdImg} alt="Lego Ad Analysis" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 absolute inset-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="inline-block bg-pink-500/80 text-white text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full mb-2">Media Literacy</span>
                  <p className="text-white text-sm font-medium">Learning to read advertising critically</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 04: PROGRAM STRUCTURE ── */}
        <section className="border-b border-black/10">
          <div className="px-8 md:px-12 py-8 md:py-16 border-b border-black/10">
            <div className="flex items-end gap-4">
              <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">04</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -ml-2 relative z-10 flex items-center gap-4">
                Structure <Calendar className="w-8 h-8 md:w-12 md:h-12 text-emerald-400" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10">
            {phases.map((phase, i) => (
              <div key={i} className="bg-[#edeae2] p-8 md:p-10 hover:bg-[#e6e2d8] transition-colors group relative overflow-hidden" data-testid={`card-phase-${i}`}>
                <div className="absolute top-4 right-6 text-7xl font-black text-black/[0.05] select-none tracking-tighter leading-none">{phase.num}</div>
                <div className="bg-black/5 border border-black/10 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider text-[#0f0f12]/60 inline-block mb-4 uppercase">
                  {phase.label}
                </div>
                <h3 className={`text-2xl font-bold mb-5 tracking-tight ${phase.accent}`}>{phase.title}</h3>
                <ul className="space-y-2.5">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-[#0f0f12]/20 shrink-0 mt-0.5 group-hover:text-[#0f0f12]/40 transition-colors" />
                      <span className="text-[#0f0f12]/60 font-light text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 border-t border-black/10">
          <div className="md:col-span-8 bg-[#edeae2] p-8 md:p-12 flex flex-col justify-between min-h-[220px]">
            <p className="text-violet-400 font-mono tracking-widest uppercase text-sm">Ready to create?</p>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">Start Your Project</h3>
              <p className="text-[#0f0f12]/40 font-light">Use the 7-step wizard to build your media project from idea to showcase.</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-[#0f0f12] p-8 flex flex-col justify-end hover:bg-[#1a1a1a] transition-colors cursor-pointer group">
            <Link href="/create" data-testid="link-cta-create">
              <div>
                <p className="text-white/40 font-mono text-xs uppercase tracking-widest mb-8">7 Steps to Completion</p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-2xl font-bold">Create Now</span>
                  <ArrowRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

      </main>

      <footer className="py-12 text-center text-[#0f0f12]/20 font-mono text-sm border-t border-black/5">
        &copy; Creative Media Bootcamp. Navigate the Noise.
      </footer>
    </div>
  );
}
