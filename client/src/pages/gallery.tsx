import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import {
  Video,
  Mic,
  Image,
  FileText,
  Lightbulb,
  Megaphone,
  Star,
  ArrowRight,
  Play,
  AlertCircle,
  PenTool,
  Camera,
  Sparkles,
  ChevronRight,
  Filter,
} from "lucide-react";
import type { ShowcaseProject } from "@shared/schema";

import waterbottleImg from "@assets/cvf_1764901434641.png";
import mangaImg from "@assets/nmm_1764901434642.png";
import workingYoungImg from "@assets/vvv_1764901434642.png";
import duckShopliftersImg from "@assets/bn_1764901434642.png";
import genshinImg from "@assets/vv_1764901434642.png";
import storyboardHandImg from "@assets/ss_1764901434642.png";
import stickyNotesImg from "@assets/ddd_1764901434642.png";
import storyboardSketchImg from "@assets/dd_1764901434643.png";
import scriptExcerptImg from "@assets/ppp_1764901434643.png";
import podcastTranscriptImg from "@assets/sss_1764901434644.png";

const projectTypeIcons: Record<string, typeof Video> = {
  video_essay: Video,
  podcast: Mic,
  photo_story: Image,
  digital_story: FileText,
  infographic: Lightbulb,
  meme_ad: Megaphone,
};

const projectTypeLabels: Record<string, string> = {
  video_essay: "Video Essay",
  podcast: "Podcast",
  photo_story: "Photo Story",
  digital_story: "Digital Story",
  infographic: "Infographic",
  meme_ad: "Advertisement",
};

const sampleProjects = [
  { id: "sample-1", title: "The Waterbottle", type: "video_essay", category: "Videos", creator: "Camp Participant", description: "A creative video exploring everyday objects and their stories.", image: waterbottleImg },
  { id: "sample-2", title: "Manga Mansplained", type: "podcast", category: "Podcasts", creator: "Camp Participant", description: "A podcast episode reviewing games and manga with cool alliteration.", image: mangaImg },
  { id: "sample-3", title: "Working Young", type: "digital_story", category: "Videos", creator: "Camp Participant", description: "A story about a kid named Da'morie who wants to help his community and make it better for the next generation.", image: workingYoungImg },
  { id: "sample-4", title: "The Duck Shoplifters", type: "video_essay", category: "Videos", creator: "Camp Participant", description: "A creative short film with humor — 'Coming to no theater near you!'", image: duckShopliftersImg },
  { id: "sample-5", title: "Genshin Impact Slides", type: "infographic", category: "Infographics", creator: "Camp Participant", description: "Everything you need to know about Genshin Impact, presented in an engaging slide format.", image: genshinImg },
  { id: "sample-6", title: "Shopping Script", type: "digital_story", category: "Scripts", creator: "Camp Participants", description: "A collaborative script with color-coded dialogue between friends deciding to go shopping.", image: scriptExcerptImg },
  { id: "sample-7", title: "Podcast Transcript", type: "podcast", category: "Podcasts", creator: "Camp Participant", description: "A transcript for a podcast episode reviewing 'Stray' — a game with amazing graphics.", image: podcastTranscriptImg },
];

const planningExamples = [
  { id: "plan-1", title: "Brainstorming Web", description: "Hand-drawn idea map exploring topics like food, shopping, horses, and creative concepts.", image: storyboardHandImg },
  { id: "plan-2", title: "Team Planning Notes", description: "Colorful sticky notes with team ideas and project planning.", image: stickyNotesImg },
  { id: "plan-3", title: "Storyboard Sketch", description: "A visual storyboard planning out scenes with drawings and notes.", image: storyboardSketchImg },
];

const categories = ["All", "Videos", "Podcasts", "Infographics", "Scripts"];
const sections = ["Sample Work", "Planning", "Submitted"];

const accentColors: Record<string, string> = {
  video_essay: "text-cyan-400",
  podcast: "text-pink-400",
  photo_story: "text-emerald-400",
  digital_story: "text-indigo-400",
  infographic: "text-amber-400",
  meme_ad: "text-orange-400",
};

export default function Gallery() {
  const [activeSection, setActiveSection] = useState("Sample Work");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typeFilter, setTypeFilter] = useState("all");
  const [themeFilter, setThemeFilter] = useState("all");

  const { data: projects, isLoading, error } = useQuery<ShowcaseProject[]>({
    queryKey: ["/api/showcase"],
  });

  const themes = projects ? [...new Set(projects.map((p) => p.issueTheme))] : [];

  const filteredProjects = projects?.filter((project) => {
    const matchesType = typeFilter === "all" || project.projectType === typeFilter;
    const matchesTheme = themeFilter === "all" || project.issueTheme === themeFilter;
    return matchesType && matchesTheme;
  }) || [];

  const filteredSamples = selectedCategory === "All"
    ? sampleProjects
    : sampleProjects.filter((p) => p.category === selectedCategory);

  const featured = filteredSamples[0];
  const rest = filteredSamples.slice(1);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#0f0f12] font-sans selection:bg-indigo-500/30 overflow-x-hidden pt-20">

      {/* Hero Header */}
      <header className="px-8 py-16 md:py-24 border-b border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-pink-400 font-mono tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Student Showcase
            </p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
              The<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f0f12] to-[#0f0f12]/30">
                Work
              </span>
            </h1>
            <p className="text-lg text-[#0f0f12]/50 max-w-xl font-light">
              Real projects made by real students — video essays, podcasts, scripts, and everything in between.
            </p>
          </div>

          {/* Section nav */}
          <div className="flex flex-col gap-1 shrink-0">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSection(s)}
                data-testid={`nav-section-${s.toLowerCase().replace(" ", "-")}`}
                className={`text-right px-6 py-3 font-mono text-sm uppercase tracking-widest transition-all border-r-2 ${
                  activeSection === s
                    ? "text-white border-pink-400"
                    : "text-[#0f0f12]/30 border-transparent hover:text-[#0f0f12]/60"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">

        {/* ── SAMPLE WORK ── */}
        {activeSection === "Sample Work" && (
          <section>
            {/* Category filter row */}
            <div className="flex items-center gap-3 px-8 py-6 border-b border-black/10 overflow-x-auto">
              <Filter className="w-4 h-4 text-[#0f0f12]/30 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  data-testid={`button-filter-${cat.toLowerCase()}`}
                  className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${
                    selectedCategory === cat
                      ? "bg-[#0f0f12] text-white border-[#0f0f12]"
                      : "bg-transparent text-[#0f0f12]/40 border-black/15 hover:border-black/40 hover:text-[#0f0f12]/70"
                  }`}
                >
                  {cat}
                </button>
              ))}
              <span className="ml-auto text-[#0f0f12]/20 font-mono text-xs shrink-0">{filteredSamples.length} projects</span>
            </div>

            {filteredSamples.length === 0 ? (
              <div className="py-32 text-center text-[#0f0f12]/30 font-mono text-sm">No projects in this category.</div>
            ) : (
              <>
                {/* Featured large card */}
                {featured && (
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 border-b border-black/10" data-testid={`card-sample-${featured.id}`}>
                    <div className="md:col-span-8 relative overflow-hidden group min-h-[420px]">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:scale-105 group-hover:opacity-90 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                      {/* Play overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 rounded-full bg-black/10 backdrop-blur border border-black/20 flex items-center justify-center">
                          <Play className="w-7 h-7 ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                        <div className="flex items-center gap-3 mb-4">
                          {(() => { const Icon = projectTypeIcons[featured.type] || FileText; return <Icon className={`w-4 h-4 ${accentColors[featured.type] || "text-[#0f0f12]/50"}`} />; })()}
                          <span className={`text-xs font-mono uppercase tracking-widest ${accentColors[featured.type] || "text-[#0f0f12]/50"}`}>
                            {projectTypeLabels[featured.type]}
                          </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">{featured.title}</h2>
                        <p className="text-white/60 font-light mb-2">{featured.description}</p>
                        <p className="text-white/40 font-mono text-xs uppercase tracking-widest">by {featured.creator}</p>
                      </div>
                    </div>

                    {/* Side stack */}
                    <div className="md:col-span-4 flex flex-col gap-px bg-black/10">
                      {rest.slice(0, 2).map((project) => {
                        const Icon = projectTypeIcons[project.type] || FileText;
                        return (
                          <div key={project.id} className="bg-[#edeae2] relative overflow-hidden group flex-1 min-h-[200px]" data-testid={`card-sample-${project.id}`}>
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover absolute inset-0 opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                            <div className="absolute bottom-0 left-0 p-6 text-white">
                              <div className="flex items-center gap-2 mb-2">
                                <Icon className={`w-3.5 h-3.5 ${accentColors[project.type] || "text-[#0f0f12]/50"}`} />
                                <span className={`text-[10px] font-mono uppercase tracking-widest ${accentColors[project.type] || "text-[#0f0f12]/50"}`}>{projectTypeLabels[project.type]}</span>
                              </div>
                              <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Remaining grid */}
                {rest.length > 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border-b border-black/10">
                    {rest.slice(2).map((project) => {
                      const Icon = projectTypeIcons[project.type] || FileText;
                      return (
                        <div key={project.id} className="bg-[#edeae2] relative overflow-hidden group min-h-[280px]" data-testid={`card-sample-${project.id}`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover absolute inset-0 opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="w-12 h-12 rounded-full bg-black/10 backdrop-blur border border-black/20 flex items-center justify-center">
                              <Play className="w-5 h-5 ml-0.5" />
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 p-6 text-white">
                            <div className="flex items-center gap-2 mb-2">
                              <Icon className={`w-3.5 h-3.5 ${accentColors[project.type] || "text-[#0f0f12]/50"}`} />
                              <span className={`text-[10px] font-mono uppercase tracking-widest ${accentColors[project.type] || "text-[#0f0f12]/50"}`}>{projectTypeLabels[project.type]}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                            <p className="text-white/50 text-sm font-light line-clamp-2">{project.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </section>
        )}

        {/* ── PLANNING ── */}
        {activeSection === "Planning" && (
          <section>
            <div className="px-8 py-8 border-b border-black/10">
              <p className="text-[#0f0f12]/40 font-light max-w-2xl">
                See how students plan their projects — brainstorming, storyboards, and sticky notes before a single frame is captured.
              </p>
            </div>

            {/* Full-bleed planning grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border-b border-black/10">
              {planningExamples.map((example, i) => (
                <div
                  key={example.id}
                  className={`relative overflow-hidden group ${i === 0 ? "md:col-span-2 min-h-[480px]" : "min-h-[320px]"}`}
                  data-testid={`card-planning-${example.id}`}
                >
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-full object-cover absolute inset-0 opacity-75 group-hover:opacity-95 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <PenTool className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">Planning</span>
                    </div>
                    <h3 className={`font-bold mb-2 ${i === 0 ? "text-3xl" : "text-xl"}`}>{example.title}</h3>
                    <p className="text-white/60 font-light text-sm">{example.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Planning tip */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">
              <div className="md:col-span-12 bg-[#edeae2] p-8 md:p-12 flex items-center gap-8">
                <div className="text-5xl font-black text-emerald-500/20 shrink-0 hidden md:block">✦</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">Planning is Key</h3>
                  <p className="text-[#0f0f12]/50 font-light max-w-3xl">
                    Great media projects start with great planning. Use brainstorming webs, sticky notes, and storyboards to organize your ideas before you start creating. It helps your team stay on the same page and ensures your finished piece lands the way you imagined it.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── SUBMITTED ── */}
        {activeSection === "Submitted" && (
          <section>
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3 px-8 py-6 border-b border-black/10">
              <Filter className="w-4 h-4 text-[#0f0f12]/30 shrink-0" />
              <div className="flex flex-wrap gap-2">
                {["all", "video_essay", "podcast", "photo_story", "digital_story", "infographic", "meme_ad"].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTypeFilter(t)}
                    data-testid={`filter-type-${t}`}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${
                      typeFilter === t
                        ? "bg-[#0f0f12] text-white border-[#0f0f12]"
                        : "bg-transparent text-[#0f0f12]/40 border-black/15 hover:border-black/40 hover:text-[#0f0f12]/70"
                    }`}
                  >
                    {t === "all" ? "All Types" : projectTypeLabels[t]}
                  </button>
                ))}
              </div>
              {themes.length > 0 && (
                <div className="flex flex-wrap gap-2 ml-4 pl-4 border-l border-black/10">
                  <button
                    onClick={() => setThemeFilter("all")}
                    className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${themeFilter === "all" ? "bg-[#0f0f12] text-white border-[#0f0f12]" : "bg-transparent text-[#0f0f12]/40 border-black/15 hover:border-black/40"}`}
                  >
                    All Themes
                  </button>
                  {themes.map((theme) => (
                    <button
                      key={theme}
                      onClick={() => setThemeFilter(theme)}
                      className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest border transition-all ${themeFilter === theme ? "bg-[#0f0f12] text-white border-[#0f0f12]" : "bg-transparent text-[#0f0f12]/40 border-black/15 hover:border-black/40"}`}
                    >
                      {theme}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {error ? (
              <div className="py-32 flex flex-col items-center gap-4 text-center">
                <AlertCircle className="w-10 h-10 text-red-400/60" />
                <p className="text-[#0f0f12]/40 font-light">Failed to load projects.</p>
                <button onClick={() => window.location.reload()} className="px-6 py-2 border border-black/20 rounded-full text-sm font-mono text-[#0f0f12]/60 hover:border-black/50 transition-all">
                  Retry
                </button>
              </div>
            ) : isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-[#edeae2] min-h-[280px] animate-pulse" />
                ))}
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="py-32 flex flex-col items-center gap-6 text-center">
                <Camera className="w-10 h-10 text-[#0f0f12]/20" />
                <div>
                  <p className="text-[#0f0f12]/50 mb-1">No submitted projects yet.</p>
                  <p className="text-[#0f0f12]/30 text-sm font-light">Be the first to share your creation!</p>
                </div>
                <Link href="/create">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#0f0f12] text-white rounded-full text-sm font-mono uppercase tracking-widest hover:bg-[#0f0f12]/90 transition-all" data-testid="button-start-first">
                    Start Creating <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border-b border-black/10">
                {filteredProjects.map((project) => {
                  const Icon = projectTypeIcons[project.projectType] || FileText;
                  return (
                    <div
                      key={project.id}
                      className="bg-[#edeae2] p-8 hover:bg-[#e6e2d8] transition-colors group min-h-[280px] flex flex-col justify-between"
                      data-testid={`card-project-${project.id}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${accentColors[project.projectType] || "text-[#0f0f12]/50"}`} />
                            <span className={`text-[10px] font-mono uppercase tracking-widest ${accentColors[project.projectType] || "text-[#0f0f12]/50"}`}>
                              {projectTypeLabels[project.projectType]}
                            </span>
                          </div>
                          {project.featured && (
                            <div className="flex items-center gap-1 text-amber-400">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              <span className="text-[10px] font-mono uppercase tracking-wider">Featured</span>
                            </div>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold mb-3 tracking-tight">{project.title}</h3>
                        <p className="text-[#0f0f12]/50 font-light text-sm mb-4 line-clamp-3">{project.description}</p>
                        {project.issueTheme && (
                          <span className="inline-block bg-black/5 border border-black/10 rounded-full px-3 py-1 text-[10px] font-mono tracking-wider text-[#0f0f12]/40">
                            {project.issueTheme}
                          </span>
                        )}
                      </div>
                      <p className="text-[#0f0f12]/20 font-mono text-xs uppercase tracking-widest mt-6">by {project.creator}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        )}

        {/* CTA */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 border-t border-black/10">
          <div className="md:col-span-12 bg-[#edeae2] p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="text-[#0f0f12]/30 font-mono text-xs uppercase tracking-widest mb-2">Ready to contribute?</p>
              <h3 className="text-3xl font-bold tracking-tight">Create Your Own Project</h3>
              <p className="text-[#0f0f12]/40 font-light mt-2">Start your media project and showcase it here.</p>
            </div>
            <Link href="/create">
              <button
                className="flex items-center gap-3 px-8 py-4 bg-[#0f0f12] text-white rounded-full font-mono text-sm uppercase tracking-widest hover:bg-[#0f0f12]/90 transition-all shrink-0 group"
                data-testid="button-create-project"
              >
                Start Creating
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </Link>
          </div>
        </div>

      </main>

      <footer className="py-12 text-center text-[#0f0f12]/20 font-mono text-sm border-t border-black/5">
        &copy; CTRL+ALT+MEDIA · Hit Reset.
      </footer>
    </div>
  );
}
