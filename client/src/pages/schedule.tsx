import { useState } from "react";
import {
  Video,
  Gamepad2,
  MessageSquare,
  ClipboardList,
  Palette,
  Clock,
  ChevronDown,
  Calendar,
} from "lucide-react";
import { dailySchedule } from "@shared/schema";

const activityIcons: Record<string, typeof Video> = {
  video: Video,
  game: Gamepad2,
  discussion: MessageSquare,
  survey: ClipboardList,
  creation: Palette,
};

const activityColors: Record<string, string> = {
  video: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
  game: "text-pink-400 bg-pink-400/10 border-pink-400/20",
  discussion: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
  survey: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  creation: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
};

const weekAccents: Record<number, { text: string; border: string; bg: string; label: string }> = {
  1: { text: "text-indigo-400",  border: "border-indigo-400",  bg: "bg-indigo-400/10",  label: "Explore & Learn" },
  2: { text: "text-emerald-400", border: "border-emerald-400", bg: "bg-emerald-400/10", label: "Explore & Learn" },
  3: { text: "text-cyan-400",    border: "border-cyan-400",    bg: "bg-cyan-400/10",    label: "Deconstruct & Construct" },
  4: { text: "text-pink-400",    border: "border-pink-400",    bg: "bg-pink-400/10",    label: "Create & Refine" },
  5: { text: "text-amber-400",   border: "border-amber-400",   bg: "bg-amber-400/10",   label: "Create & Refine" },
  6: { text: "text-violet-400",  border: "border-violet-400",  bg: "bg-violet-400/10",  label: "Showcase" },
};

export default function Schedule() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const weekGroups = dailySchedule.reduce((acc, day) => {
    if (!acc[day.week]) acc[day.week] = [];
    acc[day.week].push(day);
    return acc;
  }, {} as Record<number, typeof dailySchedule>);

  return (
    <div className="min-h-screen bg-[#f4f1ea] text-[#0f0f12] font-sans selection:bg-indigo-500/30 overflow-x-hidden pt-20">

      {/* Hero Header */}
      <header className="px-8 py-16 md:py-24 border-b border-black/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/8 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-violet-400 font-mono tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" /> 6-Week Program
            </p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase mb-6 leading-none">
              The<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0f0f12] to-[#0f0f12]/30">
                Schedule
              </span>
            </h1>
            <p className="text-lg text-[#0f0f12]/50 max-w-xl font-light">
              12 sessions, twice a week, one hour each — explore, create, and showcase.
            </p>
          </div>

          {/* Week quick-nav */}
          <div className="flex flex-wrap md:flex-col gap-2 md:gap-1 shrink-0">
            {Object.keys(weekGroups).map((w) => {
              const week = parseInt(w);
              const accent = weekAccents[week];
              return (
                <a
                  key={week}
                  href={`#week-${week}`}
                  className={`text-right px-6 py-2 font-mono text-xs uppercase tracking-widest transition-all border-r-2 ${accent.text} ${accent.border} hover:opacity-80`}
                  data-testid={`nav-week-${week}`}
                >
                  Week {week} — {accent.label}
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto">

        {Object.entries(weekGroups).map(([w, days]) => {
          const week = parseInt(w);
          const accent = weekAccents[week];

          return (
            <section key={week} id={`week-${week}`} className="border-b border-black/10">

              {/* Week header row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10">
                <div className={`md:col-span-3 bg-[#edeae2] p-8 md:p-12 flex flex-col justify-between min-h-[160px]`} data-testid={`card-schedule-week-${week}`}>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${accent.text}`}>{accent.label}</span>
                  <div>
                    <span className={`text-8xl font-black leading-none ${accent.text} opacity-30 select-none`}>
                      W{week}
                    </span>
                    <div className={`h-px w-12 ${accent.bg.replace('/10', '')} mt-4 opacity-40`} />
                  </div>
                </div>

                <div className="md:col-span-9 bg-[#edeae2] p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {days.map((day) => (
                      <span key={day.day} className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full border ${accent.bg} ${accent.text} border-opacity-30`}
                        style={{ borderColor: "currentColor", borderOpacity: 0.2 }}>
                        Session {day.day}
                      </span>
                    ))}
                  </div>
                  <p className="text-[#0f0f12]/30 font-light text-sm">
                    {days.map(d => d.theme).join(" · ")}
                  </p>
                </div>
              </div>

              {/* Day rows */}
              {days.map((day) => {
                const isOpen = openDay === day.day;
                return (
                  <div key={day.day} className="border-t border-black/5">
                    {/* Day trigger */}
                    <button
                      className="w-full text-left grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 hover:bg-black/5 transition-colors group"
                      onClick={() => setOpenDay(isOpen ? null : day.day)}
                      data-testid={`accordion-day-${day.day}`}
                    >
                      <div className="md:col-span-3 bg-[#edeae2] group-hover:bg-[#e6e2d8] transition-colors px-8 py-6 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 ${accent.bg} ${accent.text}`}>
                          {day.day}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-[#0f0f12]/20" />
                          <span className="text-[#0f0f12]/30 font-mono text-xs">
                            {day.activities.reduce((sum, a) => {
                              const mins = parseInt(a.duration);
                              return sum + (isNaN(mins) ? 0 : mins);
                            }, 0)} min
                          </span>
                        </div>
                      </div>

                      <div className="md:col-span-8 bg-[#edeae2] group-hover:bg-[#e6e2d8] transition-colors px-8 py-6">
                        <p className="font-bold text-lg mb-1 text-left">{day.title}</p>
                        <p className={`text-sm font-mono ${accent.text} opacity-70`}>{day.theme}</p>
                      </div>

                      <div className="md:col-span-1 bg-[#edeae2] group-hover:bg-[#e6e2d8] transition-colors flex items-center justify-center">
                        <ChevronDown className={`w-5 h-5 text-[#0f0f12]/30 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                    </button>

                    {/* Expanded content */}
                    {isOpen && (
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 border-t border-black/5">
                        {/* Activities */}
                        <div className="md:col-span-8 bg-[#f0ede5] p-8 md:p-10">
                          <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-6">Activities</p>
                          <div className="space-y-3">
                            {day.activities.map((activity, i) => {
                              const Icon = activityIcons[activity.type] || MessageSquare;
                              const color = activityColors[activity.type] || activityColors.discussion;
                              return (
                                <div key={i} className="flex items-center gap-4 p-4 border border-black/5 rounded-lg bg-black/[0.04]">
                                  <div className={`w-8 h-8 rounded-md flex items-center justify-center shrink-0 border ${color}`}>
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium leading-snug">{activity.name}</p>
                                  </div>
                                  <div className="flex items-center gap-3 shrink-0">
                                    <span className="text-[#0f0f12]/30 font-mono text-xs">{activity.duration}</span>
                                    <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${color}`}>
                                      {activity.type}
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="md:col-span-4 bg-[#f0ede5] p-8 md:p-10 flex flex-col justify-between">
                          <div>
                            <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-6">Skills Practiced</p>
                            <div className="flex flex-col gap-2">
                              {day.skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3 py-2 border-b border-black/5 last:border-b-0">
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${accent.text.replace('text-', 'bg-')}`} />
                                  <span className="text-[#0f0f12]/60 text-sm font-light">{skill}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="mt-8 pt-6 border-t border-black/5">
                            <p className="text-[#0f0f12]/20 font-mono text-xs uppercase tracking-widest">
                              {day.activities.length} activities
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </section>
          );
        })}

        {/* Session info footer row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-black/10 border-b border-black/10">
          <div className="md:col-span-12 bg-[#edeae2] p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-16">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-violet-400/60 shrink-0" />
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-1">Session Length</p>
                <p className="text-2xl font-bold">~1 Hour</p>
              </div>
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-black/10" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-1">Frequency</p>
              <p className="text-2xl font-bold">Twice a Week</p>
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-black/10" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-1">Total Sessions</p>
              <p className="text-2xl font-bold">12 Sessions</p>
            </div>
            <div className="h-px md:h-12 w-full md:w-px bg-black/10" />
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-[#0f0f12]/30 mb-1">Duration</p>
              <p className="text-2xl font-bold">6 Weeks</p>
            </div>
          </div>
        </div>

      </main>

      <footer className="py-12 text-center text-[#0f0f12]/20 font-mono text-sm border-t border-black/5">
        &copy; Creative Media Bootcamp. Navigate the Noise.
      </footer>
    </div>
  );
}
