import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Video,
  Mic,
  Image,
  Shield,
  Users,
  Lightbulb,
  Calendar,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Play,
  Sparkles,
  Star,
  Zap,
  Camera,
} from "lucide-react";
import { dailySchedule } from "@shared/schema";

import greenScreenImg from "@assets/cdcdc_1764901434641.png";
import libraryFilmingImg from "@assets/cfvrfvr_1764901434623.png";
import chromebookImg from "@assets/nbff_1764901434641.png";

export default function Home() {
  const weekGroups = dailySchedule.reduce((acc, day) => {
    if (!acc[day.week]) acc[day.week] = [];
    acc[day.week].push(day);
    return acc;
  }, {} as Record<number, typeof dailySchedule>);

  return (
    <div className="min-h-screen bg-white dark:bg-background">
      <section className="relative overflow-hidden bg-white dark:bg-background py-16 md:py-28">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 gap-2" data-testid="badge-research">
              <Sparkles className="h-3.5 w-3.5" />
              Media Literacy Program
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Creative Media Production{" "}
              <span className="gradient-text">Bootcamp</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              An afterschool camp promoting interest-based and creative media production for middle schoolers. Learn to identify misinformation, create compelling media, and make your voice heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="gap-2 shadow-lg shadow-primary/25" data-testid="button-learn-more">
                  Learn About the Program
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/schedule">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-schedule">
                  <Calendar className="h-4 w-4" />
                  View Daily Schedule
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-12">
              <Badge variant="secondary" className="gap-2">
                <Calendar className="h-3.5 w-3.5 text-primary" />
                6 Weeks
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <GraduationCap className="h-3.5 w-3.5 text-accent" />
                Grades 6-8
              </Badge>
              <Badge variant="secondary" className="gap-2">
                <Star className="h-3.5 w-3.5 text-primary" />
                Free Program
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Camera className="h-3.5 w-3.5 mr-1" />
              Camp in Action
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See What Students Create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Real photos from our bootcamp showing students learning and creating
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden hover-elevate group" data-testid="card-activity-greenscreen">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={greenScreenImg} 
                  alt="Student using green screen" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <Badge className="bg-primary text-primary-foreground border-0">
                    Green Screen Studio
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Professional Production</h3>
                <p className="text-sm text-muted-foreground">
                  Students learn to use green screens for creative video effects and professional-quality productions.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate group" data-testid="card-activity-filming">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={libraryFilmingImg} 
                  alt="Students filming in library" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <Badge className="bg-accent text-accent-foreground border-0">
                    On-Location Filming
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Hands-On Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Students work together to plan and film their projects in real locations around the school.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate group" data-testid="card-activity-digital">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={chromebookImg} 
                  alt="Student working on Chromebook" 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <Badge className="bg-chart-3 text-white border-0">
                    Digital Creation
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold mb-1">Digital Tools</h3>
                <p className="text-sm text-muted-foreground">
                  Learn to use computers and software to edit, design, and publish your media projects.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery">
              <Button variant="outline" className="gap-2" data-testid="button-view-gallery">
                View Student Gallery
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Zap className="h-3.5 w-3.5 mr-1" />
              Core Skills
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Develop critical skills for navigating today's media landscape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-elevate card-accent-primary" data-testid="card-media-literacy">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl icon-container-primary flex items-center justify-center mb-4">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl">Media Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn to critically analyze media messages, understand how media is constructed, and evaluate sources for credibility.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Evaluate media sources</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Deconstruct media messages</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>Identify bias and perspective</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate card-accent-yellow" data-testid="card-misinformation">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl icon-container-yellow flex items-center justify-center mb-4">
                  <Lightbulb className="h-7 w-7 text-chart-3" />
                </div>
                <CardTitle className="text-xl">Misinformation Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop skills to identify false information, fact-check claims, and understand how misinformation spreads online.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-chart-3 mt-0.5 shrink-0" />
                    <span>Spot fake news</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-chart-3 mt-0.5 shrink-0" />
                    <span>Verify information</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-chart-3 mt-0.5 shrink-0" />
                    <span>Play educational games</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate card-accent-accent" data-testid="card-production">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl icon-container-accent flex items-center justify-center mb-4">
                  <Video className="h-7 w-7 text-accent" />
                </div>
                <CardTitle className="text-xl">Creative Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Create your own media projects including video essays, podcasts, photo stories, and more about issues you care about.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Plan compelling stories</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Use professional tools</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Showcase your work</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Video className="h-3.5 w-3.5 mr-1" />
              Creative Formats
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Media Formats You'll Create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Express yourself through multiple creative formats
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Video, label: "Video Essays", desc: "Tell stories through video", color: "primary" },
              { icon: Mic, label: "Podcasts", desc: "Share your voice", color: "accent" },
              { icon: Image, label: "Photo Stories", desc: "Visual narratives", color: "chart-3" },
              { icon: Play, label: "Digital Stories", desc: "Interactive experiences", color: "chart-4" },
              { icon: Lightbulb, label: "Infographics", desc: "Data visualization", color: "chart-5" },
              { icon: Users, label: "Advertisements", desc: "Persuasive media", color: "primary" },
            ].map((item, i) => (
              <Card key={i} className="hover-elevate" data-testid={`card-format-${i}`}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${
                    item.color === 'primary' ? 'icon-container-primary' :
                    item.color === 'accent' ? 'icon-container-accent' :
                    item.color === 'chart-3' ? 'icon-container-yellow' :
                    item.color === 'chart-4' ? 'icon-container-pink' :
                    'icon-container-green'
                  }`}>
                    <item.icon className={`h-6 w-6 ${
                      item.color === 'primary' ? 'text-primary' :
                      item.color === 'accent' ? 'text-accent' :
                      item.color === 'chart-3' ? 'text-chart-3' :
                      item.color === 'chart-4' ? 'text-chart-4' :
                      'text-chart-5'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              Program Timeline
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your 6-Week Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A structured progression from learning to creating
            </p>
            <div className="rainbow-line max-w-xs mx-auto mt-6" />
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {Object.entries(weekGroups).map(([week, days]) => {
                const weekColors = {
                  "1": { accent: "card-accent-primary", badge: "bg-primary/10 text-primary" },
                  "2": { accent: "card-accent-accent", badge: "bg-accent/10 text-accent" },
                  "3": { accent: "card-accent-yellow", badge: "bg-chart-3/10 text-chart-3" },
                  "4": { accent: "card-accent-pink", badge: "bg-chart-4/10 text-chart-4" },
                  "5": { accent: "card-accent-green", badge: "bg-chart-5/10 text-chart-5" },
                  "6": { accent: "card-accent-primary", badge: "bg-primary/10 text-primary" },
                };
                const colors = weekColors[week as keyof typeof weekColors] || weekColors["1"];
                return (
                  <Card key={week} className={`overflow-hidden hover-elevate ${colors.accent}`} data-testid={`card-week-${week}`}>
                    <CardHeader className="bg-secondary/30 pb-3">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <CardTitle className="text-lg">
                          Week {week}
                          <span className="ml-2 text-muted-foreground font-normal">
                            ({days.length} {days.length === 1 ? "day" : "days"})
                          </span>
                        </CardTitle>
                        <Badge className={colors.badge}>
                          {week === "1" || week === "2"
                            ? "Learning"
                            : week === "3"
                            ? "Practice"
                            : "Creating"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="grid gap-2">
                        {days.map((day) => (
                          <div
                            key={day.day}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                          >
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-sm font-bold text-primary shrink-0">
                              {day.day}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-semibold truncate">{day.title}</p>
                              <p className="text-sm text-muted-foreground truncate">
                                {day.theme}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link href="/schedule">
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-full-schedule">
                  View Full Schedule
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-chart-4" />
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center relative">
          <Sparkles className="h-10 w-10 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Ready to Start Creating?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-10 text-lg">
            Join our bootcamp and learn to create compelling media while developing critical thinking skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create">
              <Button size="lg" variant="secondary" className="gap-2 shadow-lg" data-testid="button-start-creating">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/faq#contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
                data-testid="button-contact-us"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
