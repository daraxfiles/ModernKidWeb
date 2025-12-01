import { useState } from "react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
} from "lucide-react";
import type { ShowcaseProject } from "@shared/schema";

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

function ProjectSkeleton() {
  return (
    <Card className="overflow-hidden">
      <Skeleton className="aspect-video w-full" />
      <CardContent className="p-4">
        <div className="flex gap-2 mb-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-24" />
        </div>
        <Skeleton className="h-5 w-3/4 mb-1" />
        <Skeleton className="h-4 w-1/2 mb-2" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3 mt-1" />
      </CardContent>
    </Card>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [themeFilter, setThemeFilter] = useState<string>("all");

  const { data: projects, isLoading, error } = useQuery<ShowcaseProject[]>({
    queryKey: ["/api/showcase"],
  });

  const themes = projects ? [...new Set(projects.map((p) => p.issueTheme))] : [];

  const filteredProjects = projects?.filter((project) => {
    const matchesType = filter === "all" || project.projectType === filter;
    const matchesTheme = themeFilter === "all" || project.issueTheme === themeFilter;
    return matchesType && matchesTheme;
  }) || [];

  return (
    <div className="min-h-screen py-12 md:py-16 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Student Showcase
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore amazing media projects created by bootcamp participants
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-type-filter">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="video_essay">Video Essay</SelectItem>
                <SelectItem value="podcast">Podcast</SelectItem>
                <SelectItem value="photo_story">Photo Story</SelectItem>
                <SelectItem value="digital_story">Digital Story</SelectItem>
                <SelectItem value="infographic">Infographic</SelectItem>
                <SelectItem value="meme_ad">Advertisement</SelectItem>
              </SelectContent>
            </Select>

            <Select value={themeFilter} onValueChange={setThemeFilter}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-theme-filter">
                <SelectValue placeholder="Filter by theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Themes</SelectItem>
                {themes.map((theme) => (
                  <SelectItem key={theme} value={theme}>
                    {theme}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {error ? (
            <div className="text-center py-16">
              <div className="h-16 w-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <p className="text-muted-foreground mb-4">Failed to load projects. Please try again.</p>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Retry
              </Button>
            </div>
          ) : isLoading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <ProjectSkeleton key={i} />
              ))}
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No projects match your filters.</p>
              <Button
                variant="ghost"
                className="mt-4"
                onClick={() => {
                  setFilter("all");
                  setThemeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const Icon = projectTypeIcons[project.projectType] || FileText;
                return (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover-elevate group"
                    data-testid={`card-project-${project.id}`}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/20 via-chart-2/20 to-chart-3/20 dark:from-primary/30 dark:via-chart-2/30 dark:to-chart-3/30 relative flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-background/80 dark:bg-background/60 backdrop-blur flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      {project.featured && (
                        <div className="absolute top-3 right-3">
                          <Badge className="gap-1 bg-chart-3 text-white border-0">
                            <Star className="h-3 w-3" />
                            Featured
                          </Badge>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="h-12 w-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Badge variant="outline" className="shrink-0">
                          {projectTypeLabels[project.projectType]}
                        </Badge>
                        <Badge variant="secondary" className="text-xs shrink-0">
                          {project.issueTheme}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-1 line-clamp-1">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        by {project.creator}
                      </p>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          <div className="text-center mt-12">
            <Card className="inline-block bg-primary/5 dark:bg-primary/10 border-primary/20" data-testid="card-cta">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Ready to Create Your Own?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start your media project and showcase it here!
                </p>
                <Link href="/create">
                  <Button className="gap-2" data-testid="button-create-project">
                    Start Creating
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
