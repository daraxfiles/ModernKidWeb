import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  FileText,
  Layout,
  Video,
  Mic,
  Image,
  Monitor,
  Smartphone,
  Globe,
  ExternalLink,
  Gamepad2,
  BookOpen,
  Youtube,
} from "lucide-react";
import { mediaTools } from "@shared/schema";

const categoryIcons: Record<string, typeof FileText> = {
  "Script Writing": FileText,
  "Storyboarding": Layout,
  "Video Editing": Video,
  "Audio Editing": Mic,
  "Image Design": Image,
};

const platformIcons: Record<string, typeof Monitor> = {
  Desktop: Monitor,
  Mobile: Smartphone,
  Web: Globe,
};

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
};

const games = [
  {
    name: "Fake it to Make it",
    description: "Create your own fake news website to understand how misinformation spreads. This game teaches you the tactics used to deceive people online.",
    url: "https://www.fakeittomakeitgame.com/",
    skills: ["Misinformation awareness", "Critical thinking", "Media analysis"],
    duration: "15-20 min",
  },
  {
    name: "Lamboozled",
    description: "A fast-paced game that challenges you to identify fake information quickly. Learn to spot the signs of misleading content.",
    url: "#",
    skills: ["Quick analysis", "Pattern recognition", "Fact-checking"],
    duration: "10-15 min",
  },
  {
    name: "Bad News",
    description: "Become a fake news tycoon and learn the six tactics of misinformation: impersonation, emotion, polarization, conspiracy, discredit, and trolling.",
    url: "https://www.getbadnews.com/",
    skills: ["Understanding propaganda", "Media literacy", "Critical analysis"],
    duration: "15-20 min",
  },
];

const videos = [
  {
    title: "The Role of Media in Society",
    description: "Understand how media shapes our understanding of the world and influences public opinion.",
    topic: "Media Literacy",
  },
  {
    title: "What is Misinformation?",
    description: "Learn about different types of false information and why it spreads so easily online.",
    topic: "Misinformation",
  },
  {
    title: "How to Verify Information",
    description: "Practical tips and strategies for fact-checking and verifying sources.",
    topic: "Fact-Checking",
  },
  {
    title: "Deconstructing Media Messages",
    description: "Learn to break down media to understand the techniques used to persuade audiences.",
    topic: "Media Analysis",
  },
  {
    title: "Constructing Your Own Media",
    description: "Basic principles of creating effective and responsible media content.",
    topic: "Media Creation",
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen py-12 md:py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Tools & Resources
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Create
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover beginner-friendly tools, games, and resources for your media projects.
            </p>
          </div>

          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
              <TabsTrigger value="tools" data-testid="tab-tools">
                <FileText className="h-4 w-4 mr-2" />
                Tools
              </TabsTrigger>
              <TabsTrigger value="games" data-testid="tab-games">
                <Gamepad2 className="h-4 w-4 mr-2" />
                Games
              </TabsTrigger>
              <TabsTrigger value="videos" data-testid="tab-videos">
                <Youtube className="h-4 w-4 mr-2" />
                Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="tools">
              <div className="space-y-8">
                {mediaTools.map((category, i) => {
                  const Icon = categoryIcons[category.category] || FileText;
                  return (
                    <Card key={i} data-testid={`card-category-${i}`}>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          {category.category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid sm:grid-cols-2 gap-4">
                          {category.tools.map((tool, j) => (
                            <Card key={j} className="bg-secondary/30 border-0 hover-elevate">
                              <CardContent className="p-4">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                  <h4 className="font-semibold">{tool.name}</h4>
                                  <Badge
                                    variant="secondary"
                                    className={difficultyColors[tool.difficulty]}
                                  >
                                    {tool.difficulty}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-3">
                                  {tool.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                  {tool.platforms.map((platform, k) => {
                                    const PlatformIcon = platformIcons[platform] || Globe;
                                    return (
                                      <Badge key={k} variant="outline" className="gap-1">
                                        <PlatformIcon className="h-3 w-3" />
                                        {platform}
                                      </Badge>
                                    );
                                  })}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="games">
              <div className="space-y-4">
                <p className="text-muted-foreground text-center mb-6">
                  Interactive games that teach you about misinformation and media literacy
                </p>
                {games.map((game, i) => (
                  <Card key={i} className="hover-elevate" data-testid={`card-game-${i}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="h-10 w-10 rounded-lg bg-chart-3/10 flex items-center justify-center">
                              <Gamepad2 className="h-5 w-5 text-chart-3" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{game.name}</h3>
                              <Badge variant="outline" className="text-xs">
                                {game.duration}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            {game.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {game.skills.map((skill, j) => (
                              <Badge key={j} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        {game.url !== "#" && (
                          <a
                            href={game.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-primary hover:underline shrink-0"
                          >
                            Play Game
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="space-y-4">
                <p className="text-muted-foreground text-center mb-6">
                  Educational videos you'll watch during the bootcamp
                </p>
                {videos.map((video, i) => (
                  <Card key={i} className="hover-elevate" data-testid={`card-video-${i}`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <Youtube className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-semibold">{video.title}</h3>
                            <Badge variant="outline">{video.topic}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <Card className="mt-8 bg-primary/5 border-primary/20" data-testid="card-tip">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Pro Tip</h3>
                  <p className="text-sm text-muted-foreground">
                    Don't worry if you haven't used these tools before! We'll guide you through everything during the bootcamp. Start with the "Easy" tools and work your way up as you get more comfortable.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
