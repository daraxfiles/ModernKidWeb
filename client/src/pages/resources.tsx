import {
  Play,
  Gamepad2,
  Search,
  PenTool,
  ExternalLink,
  ChevronRight,
  MonitorPlay,
  CheckCircle2,
  AlertTriangle,
  Globe,
} from "lucide-react";
import { mediaTools } from "@shared/schema";

import cardGameImg from "@assets/pic3_1764901434643.png";
import fakeItDashboardImg from "@assets/pic2_1764901434643.png";
import fakeItSimulationImg from "@assets/Picture1_1764901434643.png";

const games = [
  {
    name: "Fake it to Make it",
    description: "Create your own fake news website to understand how misinformation spreads. Learn the tactics used to deceive people online.",
    url: "https://www.fakeittomakeitgame.com/",
    tag: "SIMULATOR",
  },
  {
    name: "Lamboozled",
    description: "A fast-paced game that challenges you to identify fake information quickly. Learn to spot the signs of misleading content.",
    url: "#",
    tag: "STRATEGY",
  },
  {
    name: "Bad News",
    description: "Become a fake news tycoon and learn the six tactics of misinformation: impersonation, emotion, polarization, conspiracy, discredit, and trolling.",
    url: "https://www.getbadnews.com/",
    tag: "EDUCATIONAL",
  },
];

const videos = [
  { title: "The Role of Media in Society", description: "Understand how media shapes our understanding of the world and influences public opinion.", topic: "Media Literacy" },
  { title: "What is Misinformation?", description: "Learn about different types of false information and why it spreads so easily online.", topic: "Misinformation" },
  { title: "How to Verify Information", description: "Practical tips and strategies for fact-checking and verifying sources.", topic: "Fact-Checking" },
  { title: "Deconstructing Media Messages", description: "Learn to break down media to understand the techniques used to persuade audiences.", topic: "Media Analysis" },
  { title: "Constructing Your Own Media", description: "Basic principles of creating effective and responsible media content.", topic: "Media Creation" },
];

const siftSteps = [
  { letter: "S", title: "Stop", desc: "Before you share, ask yourself if you know the source and their reputation." },
  { letter: "I", title: "Investigate", desc: "Look into the source. Are they credible on this topic?" },
  { letter: "F", title: "Find Better Coverage", desc: "Read laterally. What do other trusted sources say?" },
  { letter: "T", title: "Trace to Original", desc: "Find the original context of the quote, image, or claim." },
];

const redFlags = [
  "Outrageous, highly emotional headlines designed to make you angry",
  "Missing author names or sketchy \"about us\" pages",
  "Grainy images that don't match the story context",
  "Lots of ALL CAPS and exclamation points!!!",
  "Asking you to share immediately before reading",
  "No date, no sources, no way to verify the claim",
];

const factCheckSites = [
  { name: "Snopes", url: "https://www.snopes.com", desc: "One of the oldest fact-checking sites, great for viral stories and urban legends" },
  { name: "PolitiFact", url: "https://www.politifact.com", desc: "Focuses on political claims with a 'Truth-O-Meter' rating system" },
  { name: "FactCheck.org", url: "https://www.factcheck.org", desc: "Non-partisan site that monitors accuracy in U.S. politics" },
  { name: "AP Fact Check", url: "https://apnews.com/APFactCheck", desc: "Fact-checking by the Associated Press news organization" },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#0f0f12] font-sans selection:bg-indigo-500/30 overflow-x-hidden pt-20">

      {/* Hero Header */}
      <header className="px-8 py-16 md:py-24 border-b border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-indigo-400 font-mono tracking-widest uppercase text-sm mb-4">
            Curated Collection
          </p>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
            Creative<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f0f12] to-[#0f0f12]/30">
              Arsenal
            </span>
          </h1>
          <p className="text-lg text-[#0f0f12]/50 max-w-xl font-light">
            Everything you need to master media creation and navigate the digital landscape with a critical eye.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">

        {/* 01. TOOLS */}
        <section className="border-b border-black/10">
          <div className="relative h-[40vh] md:h-[55vh] overflow-hidden group">
            <img
              src="/tools-banner.jpg"
              alt="Tools"
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
              <div>
                <span className="text-6xl md:text-9xl font-black text-black/10 leading-none -ml-2 select-none tracking-tighter">01</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -mt-4 md:-mt-8 relative z-10 flex items-center gap-4">
                  Tools <PenTool className="w-8 h-8 md:w-12 md:h-12 text-indigo-400" />
                </h2>
              </div>
              <div className="hidden md:block text-right">
                <p className="text-[#0f0f12]/40 font-mono text-sm uppercase tracking-widest">Media Software · {mediaTools.length} Categories</p>
              </div>
            </div>
          </div>

          {/* Tools grid from schema data */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">
            {/* Featured first category */}
            {mediaTools[0] && (
              <div className="md:col-span-8 bg-[#edeae2] p-8 md:p-12 hover:bg-[#e6e2d8] transition-colors group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-all" />
                <div className="flex flex-col justify-between min-h-[280px]">
                  <div className="flex justify-between items-start mb-8">
                    <div className="bg-black/5 border border-black/10 rounded-full px-4 py-1 text-xs font-mono tracking-wider text-[#0f0f12]/60 uppercase">
                      {mediaTools[0].category}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
                      {mediaTools[0].tools.map(t => t.name).join(" & ")}
                    </h3>
                    <p className="text-[#0f0f12]/50 text-lg leading-relaxed font-light">
                      {mediaTools[0].tools[0].description}
                    </p>
                    <div className="flex gap-2 mt-6 flex-wrap">
                      {mediaTools[0].tools[0].platforms.map((p, i) => (
                        <span key={i} className="bg-black/5 border border-black/10 rounded-full px-3 py-1 text-xs font-mono text-[#0f0f12]/50">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Remaining categories stacked */}
            <div className="md:col-span-4 flex flex-col gap-px bg-black/10">
              {mediaTools.slice(1).map((category, i) => (
                <div key={i} className="bg-[#edeae2] p-8 hover:bg-[#e6e2d8] transition-colors group flex-1">
                  <div className="bg-black/5 border border-black/10 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider text-[#0f0f12]/60 inline-block mb-4 uppercase">
                    {category.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {category.tools.map(t => t.name).join(", ")}
                  </h3>
                  <p className="text-[#0f0f12]/50 font-light text-sm line-clamp-2">
                    {category.tools[0].description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 02. TRUTH / FACT-CHECK */}
        <section className="border-b border-black/10">
          <div className="relative h-[30vh] md:h-[50vh] overflow-hidden group">
            <img
              src="/fact-banner.jpg"
              alt="Fact Check"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
              <div>
                <span className="text-6xl md:text-9xl font-black text-black/10 leading-none -ml-2 select-none tracking-tighter">02</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -mt-4 md:-mt-8 relative z-10 flex items-center gap-4">
                  Truth <Search className="w-8 h-8 md:w-12 md:h-12 text-emerald-400" />
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10">
            {/* SIFT Method */}
            <div className="bg-[#edeae2] p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 tracking-tight text-emerald-100">The SIFT Method</h3>
              <div className="space-y-8">
                {siftSteps.map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group" data-testid={`sift-step-${i}`}>
                    <div className="text-4xl font-black text-emerald-500/20 group-hover:text-emerald-500 transition-colors w-12 text-center shrink-0">
                      {item.letter}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                      <p className="text-[#0f0f12]/50 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Red Flags */}
            <div className="bg-[#edeae2] p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -right-20 -bottom-20 text-[20rem] font-black text-black/[0.05] leading-none pointer-events-none tracking-tighter select-none">
                FAKE
              </div>
              <h3 className="text-3xl font-bold mb-8 tracking-tight flex items-center gap-3">
                <AlertTriangle className="text-amber-500" />
                Red Flags
              </h3>
              <ul className="space-y-3">
                {redFlags.map((flag, i) => (
                  <li key={i} className="flex items-start gap-4 p-4 border border-black/5 rounded-lg bg-black/[0.04]" data-testid={`red-flag-${i}`}>
                    <CheckCircle2 className="w-5 h-5 text-amber-500/50 mt-0.5 shrink-0" />
                    <span className="text-[#0f0f12]/70 font-light">{flag}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Fact-check sites row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-black/10">
            {factCheckSites.map((site, i) => (
              <a
                key={i}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#edeae2] p-6 hover:bg-[#e6e2d8] transition-colors group flex flex-col justify-between min-h-[140px]"
                data-testid={`factcheck-site-${i}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-emerald-400/60 group-hover:text-emerald-400 transition-colors" />
                  <span className="text-xs font-mono text-[#0f0f12]/30 uppercase tracking-widest group-hover:text-[#0f0f12]/60 transition-colors">External</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 flex items-center gap-2">
                    {site.name}
                    <ExternalLink className="w-3.5 h-3.5 text-[#0f0f12]/20 group-hover:text-[#0f0f12]/60 transition-colors" />
                  </h4>
                  <p className="text-[#0f0f12]/40 text-sm font-light line-clamp-2">{site.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 03. GAMES */}
        <section className="border-b border-black/10">
          <div className="relative h-[30vh] md:h-[50vh] overflow-hidden group">
            <img
              src="/games-banner.jpg"
              alt="Games"
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-60 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
              <div>
                <span className="text-6xl md:text-9xl font-black text-black/10 leading-none -ml-2 select-none tracking-tighter">03</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -mt-4 md:-mt-8 relative z-10 flex items-center gap-4">
                  Games <Gamepad2 className="w-8 h-8 md:w-12 md:h-12 text-pink-500" />
                </h2>
              </div>
            </div>
          </div>

          {/* Game cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {games.map((game, i) => (
              <div key={i} className="bg-[#edeae2] p-8 md:p-10 hover:bg-[#e6e2d8] transition-colors group flex flex-col justify-between min-h-[320px]" data-testid={`card-game-${i}`}>
                <div>
                  <div className="bg-black/5 border border-black/10 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider text-pink-400/80 inline-block mb-6">
                    {game.tag}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{game.name}</h3>
                  <p className="text-[#0f0f12]/50 font-light mb-8 line-clamp-4">{game.description}</p>
                </div>
                {game.url !== "#" ? (
                  <a
                    href={game.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-mono text-[#0f0f12]/30 group-hover:text-pink-400 transition-colors uppercase tracking-widest"
                    data-testid={`link-game-${i}`}
                  >
                    Play Now <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-sm font-mono text-[#0f0f12]/20 uppercase tracking-widest">Coming Soon</span>
                )}
              </div>
            ))}
          </div>

          {/* Game screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10">
            {[
              { img: cardGameImg, label: "Card Game", caption: "Learn tactics used in fake news" },
              { img: fakeItDashboardImg, label: "Analytics", caption: "Track how misinformation spreads" },
              { img: fakeItSimulationImg, label: "Simulation", caption: "See how people react to fake news" },
            ].map((item, i) => (
              <div key={i} className="relative overflow-hidden group" data-testid={`screenshot-game-${i}`}>
                <img
                  src={item.img}
                  alt={item.caption}
                  className="w-full aspect-video object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-pink-500/80 text-white text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full mb-2">{item.label}</span>
                  <p className="text-white text-sm font-medium">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 04. VIDEOS */}
        <section className="mb-0">
          <div className="relative h-[30vh] md:h-[50vh] overflow-hidden group">
            <img
              src="/videos-banner.jpg"
              alt="Videos"
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4f1ea] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex items-end justify-between">
              <div>
                <span className="text-6xl md:text-9xl font-black text-black/10 leading-none -ml-2 select-none tracking-tighter">04</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tight -mt-4 md:-mt-8 relative z-10 flex items-center gap-4">
                  Videos <MonitorPlay className="w-8 h-8 md:w-12 md:h-12 text-cyan-400" />
                </h2>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">
            {/* Featured video */}
            <div className="md:col-span-8 bg-[#edeae2] p-8 md:p-12 group cursor-pointer hover:bg-[#e6e2d8] transition-colors relative" data-testid="card-video-featured">
              <div className="aspect-video bg-black rounded-lg mb-8 relative overflow-hidden flex items-center justify-center border border-black/10">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-30 grayscale group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80')" }}
                />
                <div className="w-20 h-20 rounded-full bg-cyan-500/90 flex items-center justify-center pl-2 backdrop-blur-sm z-10 group-hover:scale-110 transition-transform"
                  style={{ boxShadow: "0 0 40px rgba(6,182,212,0.3)" }}>
                  <Play className="w-8 h-8 text-black" fill="currentColor" />
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 tracking-tight">{videos[0].title}</h3>
              <p className="text-[#0f0f12]/50 text-lg font-light">{videos[0].description}</p>
              <span className="inline-block mt-4 bg-black/5 border border-black/10 rounded-full px-4 py-1 text-xs font-mono tracking-wider text-cyan-400/80">
                {videos[0].topic}
              </span>
            </div>

            {/* Video list */}
            <div className="md:col-span-4 flex flex-col gap-px bg-black/10">
              {videos.slice(1).map((video, i) => (
                <div key={i} className="bg-[#edeae2] p-6 flex-1 hover:bg-[#e6e2d8] transition-colors group cursor-pointer flex flex-col justify-center" data-testid={`card-video-${i + 1}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                      <Play className="w-5 h-5 ml-1 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold mb-1 group-hover:text-cyan-100 transition-colors leading-snug">
                        {video.title}
                      </h4>
                      <span className="text-[#0f0f12]/30 font-mono text-xs uppercase tracking-wider">{video.topic}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="py-12 text-center text-[#0f0f12]/20 font-mono text-sm border-t border-black/5 mt-0">
        &copy; Creative Media Bootcamp. Navigate the Noise.
      </footer>
    </div>
  );
}
