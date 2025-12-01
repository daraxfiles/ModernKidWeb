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
  MapPin,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Play,
} from "lucide-react";
import { dailySchedule } from "@shared/schema";

export default function Home() {
  const weekGroups = dailySchedule.reduce((acc, day) => {
    if (!acc[day.week]) acc[day.week] = [];
    acc[day.week].push(day);
    return acc;
  }, {} as Record<number, typeof dailySchedule>);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background dark:from-primary/20 dark:via-accent/10 dark:to-background py-16 md:py-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4" data-testid="badge-research">
              Media Literacy Program
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Creative Media Production{" "}
              <span className="text-primary">Bootcamp</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              An afterschool camp promoting interest-based and creative media production for middle schoolers. Learn to identify misinformation, create compelling media, and make your voice heard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about">
                <Button size="lg" className="gap-2" data-testid="button-learn-more">
                  Learn About the Study
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

            <div className="flex flex-wrap justify-center gap-6 mt-12">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary" />
                <span>12 Days</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span>Grades 6-8</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Afterschool Program</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What You'll Learn</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Develop critical skills for navigating today's media landscape
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="hover-elevate" data-testid="card-media-literacy">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Media Literacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn to critically analyze media messages, understand how media is constructed, and evaluate sources for credibility.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Evaluate media sources</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Deconstruct media messages</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Identify bias and perspective</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-misinformation">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-3/10 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-chart-3" />
                </div>
                <CardTitle>Misinformation Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Develop skills to identify false information, fact-check claims, and understand how misinformation spreads online.
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Spot fake news</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Verify information</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Play educational games</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-elevate" data-testid="card-production">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-chart-2" />
                </div>
                <CardTitle>Creative Production</CardTitle>
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

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Media Formats You'll Create</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Express yourself through multiple creative formats
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { icon: Video, label: "Video Essays", desc: "Tell stories through video" },
              { icon: Mic, label: "Podcasts", desc: "Share your voice" },
              { icon: Image, label: "Photo Stories", desc: "Visual narratives" },
              { icon: Play, label: "Digital Stories", desc: "Interactive experiences" },
              { icon: Lightbulb, label: "Infographics", desc: "Data visualization" },
              { icon: Users, label: "Advertisements", desc: "Persuasive media" },
            ].map((item, i) => (
              <Card key={i} className="hover-elevate" data-testid={`card-format-${i}`}>
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.label}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your 12-Day Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A structured progression from learning to creating
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {Object.entries(weekGroups).map(([week, days]) => (
                <Card key={week} className="overflow-hidden" data-testid={`card-week-${week}`}>
                  <CardHeader className="bg-secondary/50 pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        Week {week}
                        <span className="ml-2 text-muted-foreground font-normal">
                          ({days.length} {days.length === 1 ? "day" : "days"})
                        </span>
                      </CardTitle>
                      <Badge variant="outline">
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
                          className="flex items-center gap-3 p-2 rounded-md hover:bg-secondary/50 transition-colors"
                        >
                          <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary shrink-0">
                            {day.day}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium truncate">{day.title}</p>
                            <p className="text-sm text-muted-foreground truncate">
                              {day.theme}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/schedule">
                <Button variant="outline" className="gap-2" data-testid="button-full-schedule">
                  View Full Schedule
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Creating?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Join our bootcamp and learn to create compelling media while developing critical thinking skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create">
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-start-creating">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/faq#contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
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
