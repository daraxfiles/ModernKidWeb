import { Link } from "wouter";
import {
  Search,
  Shield,
  Eye,
  Video,
  ArrowRight,
  CheckCircle,
  Gamepad2,
  BookOpen,
  Target,
  Zap,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

const modules = [
  {
    num: "01",
    week: "Week 1",
    title: "Media Use & Technobiography",
    desc: "Explore your relationship with media and technology, and understand how it shapes what you believe.",
    icon: Search,
    accent: "text-indigo-400",
    accentBg: "bg-indigo-500/80",
    topics: [
      { title: "Introduction to the Bootcamp", activities: ["Icebreaker activities", "Team building exercises"] },
      { title: "Your Technobiography", activities: ["Self-assessment surveys", "Media diary creation"] },
      { title: "Media's Role in Society", activities: ["Video discussions", "Group brainstorming"] },
      { title: "Societal Issues Exploration", activities: ["Issue mapping", "Personal interest survey"] },
    ],
    games: ["Fake it to Make it"],
    skills: ["Self-reflection", "Media Awareness", "Collaboration"],
  },
  {
    num: "02",
    week: "Week 2",
    title: "Information Credibility & Misinformation",
    desc: "Learn to identify false information, evaluate sources, and develop skills for the age of viral content.",
    icon: Shield,
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/80",
    topics: [
      { title: "Types of Misinformation", activities: ["Video lessons", "Examples analysis"] },
      { title: "Investigating Credibility", activities: ["Source evaluation exercises", "Fact-checking practice"] },
      { title: "Media Credibility Assessment", activities: ["Credibility investigation", "Group discussion"] },
      { title: "Planning Your Story", activities: ["Story brainstorming", "Initial story planning"] },
    ],
    games: ["Lamboozled"],
    skills: ["Critical Thinking", "Research Skills", "Fact-Checking"],
  },
  {
    num: "03",
    week: "Week 3",
    title: "Media Deconstruction & Construction",
    desc: "Break down how media messages are crafted — then flip it around and build your own.",
    icon: Eye,
    accent: "text-pink-400",
    accentBg: "bg-pink-500/80",
    topics: [
      { title: "Deconstructing Media", activities: ["Media analysis exercises", "Video deconstruction"] },
      { title: "Constructing Media", activities: ["Advertisement creation", "Media construction"] },
      { title: "Elaborating Your Story", activities: ["Story development", "Character creation"] },
      { title: "Choosing Your Format", activities: ["Format exploration", "Design planning"] },
    ],
    games: [],
    skills: ["Media Analysis", "Creative Design", "Storytelling"],
  },
  {
    num: "04",
    week: "Weeks 4–5",
    title: "Media Production & Showcase",
    desc: "Create, refine, and present your media project. From first draft to final showcase.",
    icon: Video,
    accent: "text-amber-400",
    accentBg: "bg-amber-500/80",
    topics: [
      { title: "Media Creation", activities: ["Production work time", "Peer collaboration"] },
      { title: "Refinement & Feedback", activities: ["Peer review sessions", "Project iteration"] },
      { title: "Final Presentations", activities: ["Presentation practice", "Q&A sessions"] },
      { title: "Showcase & Celebration", activities: ["Project showcase", "Portfolio building"] },
    ],
    games: [],
    skills: ["Production Skills", "Presentation", "Reflection"],
  },
];

const games = [
  { name: "Fake it to Make it", tag: "SIMULATOR", url: "https://www.fakeittomakeitgame.com/", desc: "Create your own fake news website to understand how misinformation spreads. Learn the tactics used to deceive people online.", accent: "text-indigo-400", accentBg: "bg-indigo-500/80" },
  { name: "Lamboozled", tag: "STRATEGY", url: "#", desc: "A fast-paced game that challenges you to identify fake information quickly. Learn to spot the signs of misleading content.", accent: "text-emerald-400", accentBg: "bg-emerald-500/80" },
  { name: "Bad News", tag: "EDUCATIONAL", url: "https://www.getbadnews.com/", desc: "Become a fake news tycoon and learn the six tactics of misinformation: impersonation, emotion, polarization, conspiracy, discredit, and trolling.", accent: "text-pink-400", accentBg: "bg-pink-500/80" },
];

const keyConcepts = [
  { letter: "T", title: "Technobiography", desc: "Your personal history with technology and media" },
  { letter: "S", title: "Source Verification", desc: "Checking if information comes from a trustworthy place" },
  { letter: "D", title: "Deconstruction", desc: "Breaking down how media messages are crafted" },
  { letter: "C", title: "Construction", desc: "Building your own purposeful media content" },
];

export default function Modules() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#0f0f12] font-sans selection:bg-indigo-500/30 overflow-x-hidden pt-20">

      {/* ── HERO ── */}
      <header className="px-8 py-16 md:py-24 border-b border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/8 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-indigo-400 font-mono tracking-widest uppercase text-sm mb-4">
              Learning Modules
            </p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
              What You'll<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f0f12] to-[#0f0f12]/25">
                Learn
              </span>
            </h1>
            <p className="text-lg text-[#0f0f12]/50 max-w-xl font-light">
              Four modules over six weeks — each building on the last. From understanding media to producing and sharing your own.
            </p>
          </div>

          {/* Key concepts */}
          <div className="flex flex-col gap-1 shrink-0">
            {keyConcepts.map((c) => (
              <div key={c.letter} className="flex items-center gap-4 px-6 py-3 border-r-2 border-transparent text-right">
                <div className="text-right flex-1">
                  <p className="font-bold">{c.title}</p>
                  <p className="text-[#0f0f12]/30 font-mono text-xs">{c.desc}</p>
                </div>
                <span className="text-2xl font-black text-indigo-400/30 w-8 text-center">{c.letter}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">

        {/* ── WEEKLY MODULES ── */}
        {modules.map((mod, mi) => (
          <section key={mod.num} className="border-b border-black/10">
            {/* Section header */}
            <div className="px-8 md:px-12 py-8 md:py-12 border-b border-black/10">
              <div className="flex items-end gap-4">
                <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">{mod.num}</span>
                <div className="-ml-2 relative z-10">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-1">{mod.week}</p>
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight flex items-center gap-4">
                    {mod.title.split(" ").slice(0, 2).join(" ")} <mod.icon className={`w-7 h-7 md:w-10 md:h-10 ${mod.accent}`} />
                  </h2>
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-[#0f0f12]/25">
                    {mod.title.split(" ").slice(2).join(" ")}
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-[#0f0f12]/50 font-light max-w-2xl text-lg">{mod.desc}</p>
            </div>

            {/* Topics grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10" data-testid={`module-${mod.num}`}>
              {mod.topics.map((topic, ti) => (
                <div
                  key={ti}
                  className="bg-[#edeae2] p-8 hover:bg-[#e6e2d8] transition-colors group min-h-[220px] flex flex-col justify-between"
                  data-testid={`card-topic-${mi}-${ti}`}
                >
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-3">Session {ti + 1}</p>
                    <h3 className="text-lg font-bold mb-4 leading-snug">{topic.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {topic.activities.map((act, ai) => (
                      <li key={ai} className="flex items-start gap-2.5 text-sm text-[#0f0f12]/50">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#0f0f12]/20 group-hover:text-[#0f0f12]/40 transition-colors" />
                        <span className="font-light">{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Skills + games footer */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">
              {mod.games.length > 0 && (
                <div className="md:col-span-5 bg-[#edeae2] p-6 md:p-8 flex items-center gap-6">
                  <Gamepad2 className={`w-8 h-8 shrink-0 ${mod.accent}`} />
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/35 mb-1">Interactive Game</p>
                    <p className="font-bold">{mod.games[0]}</p>
                  </div>
                </div>
              )}
              <div className={`${mod.games.length > 0 ? "md:col-span-7" : "md:col-span-12"} bg-[#edeae2] p-6 md:p-8 flex items-center gap-6`}>
                <Target className="w-6 h-6 shrink-0 text-[#0f0f12]/20" />
                <div className="flex flex-wrap gap-2">
                  {mod.skills.map((skill) => (
                    <span key={skill} className="bg-black/5 border border-black/10 rounded-full px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-[#0f0f12]/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* ── GAMES SECTION ── */}
        <section className="border-b border-black/10">
          <div className="px-8 md:px-12 py-8 md:py-12 border-b border-black/10">
            <div className="flex items-end gap-4">
              <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">05</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -ml-2 relative z-10 flex items-center gap-4">
                Games <Gamepad2 className="w-8 h-8 md:w-12 md:h-12 text-pink-400" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {games.map((game, i) => (
              <div key={i} className="bg-[#edeae2] p-8 md:p-10 hover:bg-[#e6e2d8] transition-colors group flex flex-col justify-between min-h-[300px]" data-testid={`card-game-${i}`}>
                <div>
                  <span className={`inline-block bg-black/5 border border-black/10 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider ${game.accent} mb-6`}>
                    {game.tag}
                  </span>
                  <h3 className="text-2xl font-bold mb-4">{game.name}</h3>
                  <p className="text-[#0f0f12]/50 font-light text-sm leading-relaxed">{game.desc}</p>
                </div>
                {game.url !== "#" ? (
                  <a href={game.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-mono text-[#0f0f12]/30 group-hover:${game.accent} transition-colors uppercase tracking-widest mt-8`} data-testid={`link-game-${i}`}>
                    Play Now <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm font-mono text-[#0f0f12]/20 uppercase tracking-widest mt-8">Coming Soon</span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── KEY CONCEPTS ── */}
        <section className="border-b border-black/10">
          <div className="px-8 md:px-12 py-8 md:py-12 border-b border-black/10 flex items-center justify-between">
            <div className="flex items-end gap-4">
              <span className="text-6xl md:text-9xl font-black text-black/8 leading-none -ml-1 select-none tracking-tighter">06</span>
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -ml-2 relative z-10 flex items-center gap-4">
                Concepts <BookOpen className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" />
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
            {keyConcepts.map((c, i) => (
              <div key={i} className="bg-[#edeae2] p-8 md:p-12 hover:bg-[#e6e2d8] transition-colors group flex gap-8 items-start" data-testid={`card-concept-${i}`}>
                <span className="text-6xl font-black text-cyan-500/15 group-hover:text-cyan-500/30 transition-colors shrink-0 leading-none">{c.letter}</span>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{c.title}</h3>
                  <p className="text-[#0f0f12]/50 font-light">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 border-t border-black/10">
          <div className="md:col-span-8 bg-[#edeae2] p-8 md:p-12 flex flex-col justify-between min-h-[220px]">
            <p className="text-indigo-400 font-mono tracking-widest uppercase text-sm">Apply what you've learned</p>
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">Start Your Project</h3>
              <p className="text-[#0f0f12]/40 font-light">Build a real media project from concept to showcase using the 7-step wizard.</p>
            </div>
          </div>
          <div className="md:col-span-4 bg-[#0f0f12] p-8 flex flex-col justify-end hover:bg-[#1a1a1a] transition-colors group">
            <Link href="/create" data-testid="link-cta-create">
              <div>
                <Zap className="w-6 h-6 text-white/30 mb-8" />
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
